import { Domain } from 'cfp-calc'

export const EXAMPLE_PATH = 'blog-starter'
export const CMS_NAME = 'Markdown'
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'

export const DOMAINS: readonly Domain[] = [
  'housing',
  'mobility',
  'food',
  'other'
]
export const DOMAIN_LABELS: readonly string[][] = [
  ['住居'],
  ['移動'],
  ['食'],
  ['モノと', 'サービス']
]
export const HOUSING_SUBDOMAINS: readonly string[] = [
  'construction-maintenance',
  'electricity',
  'other-energy',
  'water'
]

export const HOUSING_SUBDOMAIN_LABELS: readonly string[] = [
  '建設・維持管理',
  '電気',
  'ガス・灯油等',
  '水道'
]

export const MOBILITY_SUBDOMAINS: readonly string[] = [
  'private-car',
  'airplane',
  'train',
  'bus',
  'ferry',
  'car-sharing-taxi',
  'motorbike',
  'bicycle',
  'walking'
]

export const MOBILITY_SUBDOMAIN_LABELS: readonly string[][] = [
  ['自家用車'],
  ['飛行機'],
  ['鉄道'],
  ['バス'],
  ['フェリー'],
  ['レンタカー', 'タクシー'],
  ['バイク'],
  ['自転車'],
  ['徒歩']
]

export const FOOD_SUBDOMAINS: readonly string[] = [
  'cereals',
  'vegetables',
  'beans-nuts',
  'dairy',
  'eggs',
  'meat',
  'fish',
  'fruits',
  'other-food',
  'beverages',
  'restaurant'
]

export const FOOD_SUBDOMAIN_LABELS: readonly string[][] = [
  ['穀類'],
  ['野菜'],
  ['豆類'],
  ['乳製品'],
  ['卵'],
  ['肉類'],
  ['魚介類'],
  ['果物'],
  ['惣菜・菓子', '調味料等'],
  ['飲料'],
  ['外食']
]

export const OTHER_SUBDOMAINS: readonly string[] = [
  'hotel-travel',
  'leisure-sports',
  'waste-repair-rental',
  'appliance-furniture',
  'clothes',
  'daily-goods-cosmetics-medicine',
  'hobby-books-magazines',
  'communication-delivery-broadcasting',
  'ceremony',
  'medical-welfare-education',
  'other-services'
]

export const OTHER_SUBDOMAIN_LABELS: readonly string[][] = [
  ['宿泊'],
  ['娯楽', 'スポーツ施設等'],
  ['廃棄物処理', '修理等'],
  ['家電製品', '家具類'],
  ['衣類'],
  ['日用品・化粧品', '医薬品'],
  ['趣味用品', '書籍・雑誌'],
  ['通信・配送', '放送等'],
  ['冠婚葬祭'],
  ['医療・福祉', '教育'],
  ['その他サービス']
]
