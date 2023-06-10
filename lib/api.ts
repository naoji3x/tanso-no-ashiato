import { Analysis, Diagnosis, FootprintSummary } from 'cfp-calc'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import Post from '../interfaces/post'
import convertToAnswers from './answers'

const postsDirectory = join(process.cwd(), '_posts')

const getPostSlugs = () => fs.readdirSync(postsDirectory)

export const getPostBySlug = (slug: string): Post => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { housingAnswer, mobilityAnswer, foodAnswer, otherAnswer } =
    convertToAnswers(data)

  const diagnosis = new Diagnosis()
  diagnosis.answerHousing(housingAnswer)
  diagnosis.answerMobility(mobilityAnswer)
  diagnosis.answerFood(foodAnswer)
  diagnosis.answerOther(otherAnswer)

  const analysis = new Analysis(diagnosis)

  const baselineSummaries = analysis.enumerateBaselineSummaries()
  const estimationSummaries = analysis.enumerateEstimationSummaries()
  // const actionSummaries = analysis.enumerateActionSummaries()

  // 総計計算
  const totalEstimation = estimationSummaries.reduce(
    (sum, e) => sum + e.footprint,
    0
  )
  const totalBaseline = baselineSummaries.reduce(
    (sum, e) => sum + e.footprint,
    0
  )

  // ドメイン毎の集計
  const sumByDomain = (acc: Record<string, number>, e: FootprintSummary) => {
    acc[e.domain] = (acc[e.domain] ?? 0) + e.footprint
    return acc
  }

  const estimationByDomain = estimationSummaries.reduce(
    (acc: Record<string, number>, e) => sumByDomain(acc, e),
    {}
  )
  const baselineByDomain = baselineSummaries.reduce(
    (acc: Record<string, number>, e) => sumByDomain(acc, e),
    {}
  )

  // サブドメイン毎の集計
  const sumOfSubdomain = (
    acc: Record<string, Record<string, number>>,
    e: FootprintSummary
  ) => {
    if (acc[e.domain] === undefined) {
      acc[e.domain] = {}
    }
    acc[e.domain][e.subdomain] = (acc[e.domain][e.subdomain] ?? 0) + e.footprint
    return acc
  }

  const estimationBySubdomain = estimationSummaries.reduce(
    (acc: Record<string, Record<string, number>>, e) => sumOfSubdomain(acc, e),
    {}
  )
  const baselineBySubdomain = baselineSummaries.reduce(
    (acc: Record<string, Record<string, number>>, e) => sumOfSubdomain(acc, e),
    {}
  )

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    iconImage: data.iconImage,
    backgroundImage: data.backgroundImage,

    tagline: data.tagline,
    excerpt: data.excerpt,
    totalComment: data.totalComment,
    housingComment: data.housingComment,
    mobilityComment: data.mobilityComment,
    foodComment: data.foodComment,
    otherComment: data.otherComment,
    contentReferences: data.contentReferences,
    imageReferences: data.imageReferences,

    content: content,

    housing: data.housingAnswer,
    mobility: data.mobilityAnswer,
    food: data.foodAnswer,
    other: data.otherAnswer,

    totalEstimation,
    totalBaseline,
    estimationByDomain,
    baselineByDomain,
    estimationBySubdomain,
    baselineBySubdomain
  }
}

export const getAllPosts = (): Post[] => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
