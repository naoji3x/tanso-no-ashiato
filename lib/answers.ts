import {
  FoodAnswer,
  HousingAnswer,
  MobilityAnswer,
  OtherAnswer
} from 'cfp-calc'
import { Food, Housing, Mobility, Other } from 'interfaces/post'

// undefinedの削除
const clean = (data: any): any => {
  const entries = Object.entries(data).filter(([, value]) => value != undefined)
  const cleaned = entries.map(([key, v]) => {
    const value = typeof v == 'object' ? clean(v) : v
    return [key, value]
  })

  return Object.fromEntries(cleaned)
}

export const convertToAnswers = (
  data: any
): {
  housingAnswer: HousingAnswer
  mobilityAnswer: MobilityAnswer
  foodAnswer: FoodAnswer
  otherAnswer: OtherAnswer
} => {
  const ha: Housing = data.housingAnswer
  const ma: Mobility = data.mobilityAnswer
  const fa: Food = data.foodAnswer
  const oa: Other = data.otherAnswer

  // 居住に関する質問への回答
  const housingAnswer: HousingAnswer = clean({
    residentCount: ha.residentCount,
    housingSize: ha.housingSize,
    electricity:
      ha.electricity === undefined
        ? undefined
        : {
            electricityType: ha.electricity.electricityType,
            consumptionOrLivingRegion: {
              monthlyConsumption: ha.electricity.monthlyConsumption,
              month: ha.electricity.month
            },
            privateCar:
              ma.privateCarAnnualMileage === undefined
                ? undefined
                : {
                    carType: ma.carType,
                    annualMileage: ma.privateCarAnnualMileage,
                    carCharging: ma.carCharging
                  }
          },
    gas:
      ha.gas === undefined
        ? undefined
        : {
            item: ha.gas.item,
            consumptionOrLivingRegion: {
              monthlyConsumption: ha.gas.monthlyConsumption,
              month: ha.gas.month
            }
          },
    kerosene:
      ha.kerosene === undefined
        ? undefined
        : {
            monthlyConsumption: ha.kerosene.monthlyConsumption,
            monthCount: ha.kerosene.monthCount
          }
  })

  // 移動に関する質問への回答
  const mobilityAnswer: MobilityAnswer = clean({
    privateCarAnnualMileage: ma.privateCarAnnualMileage,
    carType: ma.carType,
    carPassengers: ma.carPassengers,
    carCharging: ma.carCharging,
    electricityType: ha.electricity?.electricityType,

    travelingTimeOrResidentialAreaSize: {
      trainWeeklyTravelingTime: ma.trainWeeklyTravelingTime,
      trainAnnualTravelingTime: ma.trainAnnualTravelingTime,

      busWeeklyTravelingTime: ma.busWeeklyTravelingTime,
      busAnnualTravelingTime: ma.busAnnualTravelingTime,

      motorbikeWeeklyTravelingTime: ma.motorbikeWeeklyTravelingTime,
      motorbikeAnnualTravelingTime: ma.motorbikeAnnualTravelingTime,

      otherCarWeeklyTravelingTime: ma.otherCarWeeklyTravelingTime,
      otherCarAnnualTravelingTime: ma.otherCarAnnualTravelingTime,

      airplaneAnnualTravelingTime: ma.airplaneAnnualTravelingTime,
      ferryAnnualTravelingTime: ma.ferryAnnualTravelingTime
    }
  })

  // 食に関する質問への回答
  const foodAnswer: FoodAnswer = clean({
    foodDirectWasteFrequency: fa.foodDirectWasteFrequency,
    foodLeftoverFrequency: fa.foodLeftoverFrequency,
    foodIntake: fa.foodIntake,
    alcoholFrequency: fa.alcoholFrequency,
    dairyFoodFrequency: fa.dairyFoodFrequency,
    beefDishFrequency: fa.beefDishFrequency,
    porkDishFrequency: fa.porkDishFrequency,
    chickenDishFrequency: fa.chickenDishFrequency,
    seafoodDishFrequency: fa.seafoodDishFrequency,
    softDrinkSnackExpenses: fa.softDrinkSnackExpenses,
    eatOutExpenses: fa.eatOutExpenses
  })

  // モノとサービスに関する質問への回答
  const otherAnswer: OtherAnswer = clean({
    residentCount: ha.residentCount,
    travelExpenses: oa.travelExpenses,
    applianceFurnitureExpenses: oa.applianceFurnitureExpenses,
    clothesBeautyExpenses: oa.clothesBeautyExpenses,
    hobbyGoodsExpenses: oa.hobbyGoodsExpenses,
    serviceExpenses: oa.serviceExpenses,
    dailyGoodsExpenses: oa.dailyGoodsExpenses,
    leisureSportsExpenses: oa.leisureSportsExpenses,
    communicationExpenses: oa.communicationExpenses
  })

  return {
    housingAnswer,
    mobilityAnswer,
    foodAnswer,
    otherAnswer
  }
}

export default convertToAnswers
