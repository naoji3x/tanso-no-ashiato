import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  StackProps,
  VStack
} from '@chakra-ui/react'
import { Domain } from 'cfp-calc'
import Cloud from 'components/Cloud'
import RadarChartCard from 'components/RadarChartCard'
import ReferenceButton from 'components/ReferenceButton'
import Post from 'interfaces/post'
import {
  DOMAINS,
  DOMAIN_LABELS,
  FOOD_SUBDOMAINS,
  FOOD_SUBDOMAIN_LABELS,
  HOUSING_SUBDOMAINS,
  HOUSING_SUBDOMAIN_LABELS,
  MOBILITY_SUBDOMAINS,
  MOBILITY_SUBDOMAIN_LABELS,
  OTHER_SUBDOMAINS,
  OTHER_SUBDOMAIN_LABELS
} from 'lib/constants'
import url from 'lib/url'
import { FaLeaf } from 'react-icons/fa'

type Props = {
  post: Post
}

const PostHeader = ({ post, ...rest }: Props & StackProps) => {
  const params: {
    readonly color: string
    readonly title: string
    readonly iconImage: string
    readonly labels: readonly string[] | readonly string[][]
    readonly domain: Domain
    readonly subdomains: readonly string[]
    readonly comment: string
  }[] = [
    {
      title: '住居',
      iconImage: '/icons/housing.svg',
      color: '#ed9928',
      labels: HOUSING_SUBDOMAIN_LABELS,
      domain: 'housing',
      subdomains: HOUSING_SUBDOMAINS,
      comment: post.housingComment
    },
    {
      title: '移動',
      iconImage: '/icons/mobility.svg',
      color: '#009DD3',
      labels: MOBILITY_SUBDOMAIN_LABELS,
      domain: 'mobility',
      subdomains: MOBILITY_SUBDOMAINS,
      comment: post.mobilityComment
    },
    {
      title: '食',
      iconImage: '/icons/food.svg',
      color: '#51a15a',
      labels: FOOD_SUBDOMAIN_LABELS,
      domain: 'food',
      subdomains: FOOD_SUBDOMAINS,
      comment: post.foodComment
    },
    {
      title: 'モノとサービス',
      iconImage: '/icons/other.svg',
      color: '#da7f79',
      labels: OTHER_SUBDOMAIN_LABELS,
      domain: 'other',
      subdomains: OTHER_SUBDOMAINS,
      comment: post.otherComment
    }
  ]

  return (
    <VStack {...rest} align={'center'} mx={1} w={'full'} maxW={'4xl'}>
      <Flex
        key={'header'}
        w={'full'}
        alignItems="center"
        px={{ base: 0, md: 3 }}
      >
        <Spacer />
        <ReferenceButton
          contentReferences={post.contentReferences}
          imageReferences={post.imageReferences}
        />
      </Flex>
      <HStack key={'image'}>
        <Flex key={'image'} mt={'-100px'}>
          <Image
            h={'auto'}
            borderRadius={'full'}
            alt="Image"
            objectFit="cover"
            boxShadow={'md'}
            boxSize={'200px'}
            src={url(post.iconImage)}
          />
        </Flex>
      </HStack>
      <Box key={'title'} px={3} pb={3} textAlign={'center'}>
        <Heading as={'h2'} size={'lg'} pt={2} pb={3}>
          {post.title}
        </Heading>
        {post.tagline}
      </Box>
      <Cloud key={'cloud'} value={post.totalEstimation} />
      <Box
        key={'excerpt'}
        textAlign={'center'}
        fontSize={'2xl'}
        py={2}
        fontWeight={'bold'}
      >
        {post.excerpt}
      </Box>
      <Divider key={'divider'} py={2} />
      <Box key={'totalIntroduction'} py={2}>
        「住居」、「移動」、「食」、「モノとサービス」別に排出量の傾向を国民平均と比較してみましょう。
      </Box>
      <RadarChartCard
        iconImage={FaLeaf}
        color={'#505050'}
        key={'radarChartCard'}
        title="国民平均との比較"
        baseLabel="国民平均"
        targetLabel={post.title}
        labels={DOMAIN_LABELS}
        baseData={DOMAINS.map((domain) => post.baselineByDomain[domain])}
        targetData={DOMAINS.map((domain) => post.estimationByDomain[domain])}
        comment={post.totalComment}
      />
      <Box key={'eachIntroduction'} py={2}>
        「住居」、「移動」、「食」、「モノとサービス」毎に内訳を確認しましょう。
      </Box>
      {params.map((param) => (
        <RadarChartCard
          iconImage={param.iconImage}
          color={param.color}
          key={param.title}
          title={param.title}
          baseLabel="国民平均"
          targetLabel={post.title}
          labels={param.labels}
          baseData={param.subdomains.map(
            (subdomain) => post.baselineBySubdomain[param.domain][subdomain]
          )}
          targetData={param.subdomains.map(
            (subdomain) => post.estimationBySubdomain[param.domain][subdomain]
          )}
          comment={param.comment}
        />
      ))}
    </VStack>
  )
}

export default PostHeader
