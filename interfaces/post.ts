import {
  AlcoholFrequency,
  ApplianceFurnitureExpenses,
  CarCharging,
  CarPassengers,
  CarType,
  ClothesBeautyExpenses,
  CommunicationExpenses,
  DailyGoodsExpenses,
  DairyFoodFrequency,
  DishFrequency,
  Domain,
  EatOutExpenses,
  ElectricityType,
  FoodDirectWasteFrequency,
  FoodIntake,
  FoodLeftoverFrequency,
  GasItem,
  HobbyGoodsExpenses,
  HousingInsulation,
  HousingSize,
  LeisureSportsExpenses,
  Month,
  ServiceExpenses,
  SoftDrinkSnackExpenses,
  TravelExpenses
} from 'cfp-calc'

export type Reference = {
  title: string
  url: string
}

export type Housing = {
  readonly housingSize?: HousingSize
  readonly residentCount?: number
  readonly housingInsulation?: HousingInsulation
  readonly electricity?: {
    readonly electricityType: ElectricityType
    readonly monthlyConsumption: number
    readonly month: Month
  }
  readonly gas?: {
    readonly item: GasItem
    readonly monthlyConsumption: number
    readonly month: Month
  }
  readonly kerosene?: {
    readonly monthlyConsumption: number
    readonly monthCount: number
  }
}

export type Mobility = {
  readonly privateCarAnnualMileage?: number
  readonly carType?: CarType
  readonly carPassengers?: CarPassengers
  readonly carCharging?: CarCharging
  readonly trainWeeklyTravelingTime?: number
  readonly trainAnnualTravelingTime?: number
  readonly busWeeklyTravelingTime?: number
  readonly busAnnualTravelingTime?: number
  readonly motorbikeWeeklyTravelingTime?: number
  readonly motorbikeAnnualTravelingTime?: number
  readonly otherCarWeeklyTravelingTime?: number
  readonly otherCarAnnualTravelingTime?: number
  readonly airplaneAnnualTravelingTime?: number
  readonly ferryAnnualTravelingTime?: number
}

export type Food = {
  readonly foodDirectWasteFrequency?: FoodDirectWasteFrequency
  readonly foodLeftoverFrequency?: FoodLeftoverFrequency
  readonly foodIntake?: FoodIntake
  readonly alcoholFrequency?: AlcoholFrequency
  readonly dairyFoodFrequency?: DairyFoodFrequency
  readonly beefDishFrequency?: DishFrequency
  readonly porkDishFrequency?: DishFrequency
  readonly chickenDishFrequency?: DishFrequency
  readonly seafoodDishFrequency?: DishFrequency
  readonly softDrinkSnackExpenses?: SoftDrinkSnackExpenses
  readonly eatOutExpenses?: EatOutExpenses
}

export type Other = {
  readonly travelExpenses?: TravelExpenses
  readonly applianceFurnitureExpenses?: ApplianceFurnitureExpenses
  readonly clothesBeautyExpenses?: ClothesBeautyExpenses
  readonly hobbyGoodsExpenses?: HobbyGoodsExpenses
  readonly serviceExpenses?: ServiceExpenses
  readonly dailyGoodsExpenses?: DailyGoodsExpenses
  readonly leisureSportsExpenses?: LeisureSportsExpenses
  readonly communicationExpenses?: CommunicationExpenses
}

type Post = {
  readonly slug: string
  readonly title: string
  readonly date: string
  readonly iconImage: string
  readonly backgroundImage: string

  readonly tagline: string
  readonly excerpt: string
  readonly totalComment: string
  readonly housingComment: string
  readonly mobilityComment: string
  readonly foodComment: string
  readonly otherComment: string

  readonly contentReferences: Reference[]
  readonly imageReferences: Reference[]

  readonly content: string

  readonly housing: Housing
  readonly mobility: Mobility
  readonly food: Food
  readonly other: Other

  readonly totalEstimation: number
  readonly totalBaseline: number

  readonly estimationByDomain: Record<Domain, number> // Domainで集計した推定値
  readonly baselineByDomain: Record<Domain, number> // Domainで集計したベースライン値
  readonly estimationBySubdomain: Record<Domain, Record<string, number>> // DomainとSubdomainで集計した推定値
  readonly baselineBySubdomain: Record<Domain, Record<string, number>> // DomainとSubdomainで集計したベースライン値
}

export default Post
