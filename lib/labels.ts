const MONTH: Record<string, string> = {
  january: '1月',
  february: '2月',
  march: '3月',
  april: '4月',
  may: '5月',
  june: '6月',
  july: '7月',
  august: '8月',
  september: '9月',
  october: '10月',
  november: '11月',
  december: '12月'
}

export const month = (code: string | undefined): string =>
  code === undefined ? '分からない' : MONTH[code]

const HOUSING_SIZE: Record<string, string> = {
  '1-room': '1部屋（ワンルーム, 1K）',
  '2-room': '2部屋（1DK, 2K）',
  '3-room': '3部屋相当（2DK, 1LDK, 3K）',
  '4-room': '4部屋相当（3DK, 2LDK）',
  '5-6-room': '5〜6部屋相当（3LDK, 4LDK）',
  '7-more-room': '7部屋以上（5LDK以上）',
  unknown: '分からない'
}

export const housingSize = (code: string | undefined): string =>
  code === undefined ? HOUSING_SIZE.unknown : HOUSING_SIZE[code]

const HOUSING_INSULATION: Record<string, string> = {
  'no-insulation': '1970年代以前（無断熱）',
  '2-level': '1980年代（断熱等級2級）',
  '3-level': '1990年代（断熱等級3級）',
  '4-level': '2000年代以降（断熱等級4級）',
  unknown: '分からない'
}

export const housingInsulation = (code: string | undefined): string =>
  code === undefined ? HOUSING_INSULATION.unknown : HOUSING_INSULATION[code]

const ELECTRICITY_TYPE: Record<string, string> = {
  conventional: '通常の電力',
  'solar-panel': '屋上太陽光パネル',
  '30-renewable': '30%再生可能エネルギー',
  '50-renewable': '50%再生可能エネルギー',
  '100-renewable': '100%再生可能エネルギー',
  unknown: '分からない'
}

export const electricityType = (code: string | undefined): string =>
  code === undefined ? ELECTRICITY_TYPE.unknown : ELECTRICITY_TYPE[code]

const GAS_ITEM: Record<string, string> = {
  'urban-gas': '都市ガス',
  lpg: 'プロパンガス'
}

export const gasItem = (code: string | undefined): string =>
  code === undefined ? '分からない' : GAS_ITEM[code]

const CAR_TYPE: Record<string, string> = {
  gasoline: 'ガソリン車',
  light: '軽自動車',
  hv: 'ハイブリッド車',
  phv: 'プラグインハイブリッド車',
  ev: '電気自動車',
  unknown: '分からない'
}

export const carType = (code: string | undefined): string =>
  code === undefined ? '分からない' : CAR_TYPE[code]

const CAR_PASSENGERS: Record<string, string> = {
  '1': 'ほとんど1人',
  '1-2': '1~2人',
  '2': '2人',
  '2-3': '2~3人',
  '3': '3人',
  '3-4': '3~4人',
  '4-more': '4人以上',
  unknown: '分からない'
}

export const carPassengers = (code: string | undefined): string =>
  code === undefined ? CAR_PASSENGERS.unknown : CAR_PASSENGERS[code]

const CAR_CHARGING: Record<string, string> = {
  'use-charging-spots-occasionally':
    '自宅で充電することの方が多いが、充電スポットも利用する',
  'use-charging-spots-sometimes': '自宅と充電スポットを半々で利用する',
  'charge-almost-at-home': 'ほとんど自宅で充電する',
  'use-charging-spots-usually': 'ほとんど充電スポットで充電する',
  unknown: '分からない'
}

export const carCharging = (code: string | undefined): string =>
  code === undefined ? CAR_CHARGING.unknown : CAR_CHARGING[code]

const FOOD_DIRECT_WASTE_FREQUENCY: Record<string, string> = {
  '1-per-week': '週に1回',
  '2-3-per-week': '週に2～3回',
  '4-7-per-week': '週に4～7回',
  '8-more-per-week': '週に8回以上',
  seldom: 'ほとんどない',
  unknown: '分からない'
}

export const foodDirectWasteFrequency = (code: string | undefined): string =>
  code === undefined
    ? FOOD_DIRECT_WASTE_FREQUENCY.unknown
    : FOOD_DIRECT_WASTE_FREQUENCY[code]

const FOOD_LEFTOVER_FREQUENCY: Record<string, string> = {
  '1-per-week': '週に1回',
  '2-3-per-week': '週に2～3回',
  '4-7-per-week': '週に4～7回',
  '8-more-per-week': '週に8回以上',
  seldom: 'ほとんどない',
  unknown: '分からない'
}

export const foodLeftoverFrequency = (code: string | undefined): string =>
  code === undefined
    ? FOOD_LEFTOVER_FREQUENCY.unknown
    : FOOD_LEFTOVER_FREQUENCY[code]

const FOOD_INTAKE: Record<string, string> = {
  'very-little':
    '約1,400kcal かなり少ない（小学校低・中学年の子ども、高齢の女性）',
  'somewhat-little':
    '約2,000kcal やや少ない（座って過ごすことが多い女性、高齢の男性）',
  moderate:
    '約2,200kcal 普通（軽い運動や立ち仕事がある女性、座って過ごすことが多い男性）',
  'somewhat-much':
    '約2,400kcal やや多い（軽い運動や立ち仕事がある男性、運動習慣の多い女性）',
  'very-much': '約3,000kcal かなり多い（立ち仕事や移動、運動習慣の多い男性）',
  unknown: '分からない'
}

export const foodIntake = (code: string | undefined): string =>
  code === undefined ? FOOD_INTAKE.unknown : FOOD_INTAKE[code]

const ALCOHOL_FREQUENCY: Record<string, string> = {
  never: '飲まない',
  '2-3-less-per-month': '月に2〜3日',
  '1-per-week': '週に1日',
  '2-3-per-week': '週に2〜3日',
  '4-5-per-week': '週に4〜5日',
  everyday: 'ほぼ毎日',
  unknown: '分からない'
}

export const alcoholFrequency = (code: string | undefined): string =>
  code === undefined ? ALCOHOL_FREQUENCY.unknown : ALCOHOL_FREQUENCY[code]

const DAIRY_FOOD_FREQUENCY: Record<string, string> = {
  never: '食べない',
  '1-2-less-per-week': '週に1〜2回以下',
  'half-of-week': '週の半分',
  '1-per-day': '1日1回',
  '2-per-day': '1日2回',
  '3-more-per-day': '1日3回以上',
  unknown: '分からない'
}

export const dairyFoodFrequency = (code: string | undefined): string =>
  code === undefined ? DAIRY_FOOD_FREQUENCY.unknown : DAIRY_FOOD_FREQUENCY[code]

const DISH_FREQUENCY: Record<string, string> = {
  never: '食べない',
  '1-less-per-month': '月に1日以下',
  '2-3-per-month': '月に2〜3日',
  '1-per-week': '週に1日',
  '2-3-per-week': '週に2〜3日',
  '4-5-per-week': '週に4〜5日',
  everyday: 'ほぼ毎日',
  unknown: '分からない'
}

export const dishFrequency = (code: string | undefined): string =>
  code === undefined ? DISH_FREQUENCY.unknown : DISH_FREQUENCY[code]

const SOFT_DRINK_SNACK_EXPENSES: Record<string, string> = {
  '3k-less': '月に¥3,000未満',
  '3k-5k': '月に¥3,000〜¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-15k': '月に¥10,000〜¥15,000未満',
  '15k-more': '月に¥15,000以上',
  unknown: '分からない'
}

export const softDrinkSnackExpenses = (code: string | undefined): string =>
  code === undefined
    ? SOFT_DRINK_SNACK_EXPENSES.unknown
    : SOFT_DRINK_SNACK_EXPENSES[code]

const EAT_OUT_EXPENSES: Record<string, string> = {
  '5k-less': '月に¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-20k': '月に¥10,000〜¥20,000未満',
  '20k-50k': '月に¥20,000〜¥50,000未満',
  '50k-more': '月に¥50,000以上',
  unknown: '分からない'
}

export const eatOutExpenses = (code: string | undefined): string =>
  code === undefined ? EAT_OUT_EXPENSES.unknown : EAT_OUT_EXPENSES[code]

const TRAVEL_EXPENSES: Record<string, string> = {
  '10k-less': '¥10,000未満',
  '10k-30k': '¥10,000〜¥30,000未満',
  '30k-50k': '¥30,000〜¥50,000未満',
  '50k-100k': '¥50,000〜¥100,000未満',
  '100k-200k': '¥100,000〜¥200,000未満',
  '200k-more': '¥200,000以上',
  unknown: '分からない'
}

export const travelExpenses = (code: string | undefined): string =>
  code === undefined ? TRAVEL_EXPENSES.unknown : TRAVEL_EXPENSES[code]

const APPLIANCE_FURNITURE_EXPENSES: Record<string, string> = {
  '50k-less': '¥50,000未満',
  '50k-100k': '¥5,0000〜¥100,000未満',
  '100k-200k': '¥100,000〜¥200,000未満',
  '200k-300k': '¥200,000〜¥300,000未満',
  '300k-400k': '¥300,000〜¥400,000未満',
  '400k-more': '¥400,000以上',
  unknown: '分からない'
}

export const applianceFurnitureExpenses = (code: string | undefined): string =>
  code === undefined
    ? APPLIANCE_FURNITURE_EXPENSES.unknown
    : APPLIANCE_FURNITURE_EXPENSES[code]

const CLOTHES_BEAUTY_EXPENSES: Record<string, string> = {
  '5k-less': '月に¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-20k': '月に¥10,000〜¥20,000未満',
  '20k-50k': '月に¥20,000〜¥50,000未満',
  '50k-more': '月に¥50,000以上',
  unknown: '分からない'
}

export const clothesBeautyExpenses = (code: string | undefined): string =>
  code === undefined
    ? CLOTHES_BEAUTY_EXPENSES.unknown
    : CLOTHES_BEAUTY_EXPENSES[code]

const HOBBY_GOODS_EXPENSES: Record<string, string> = {
  '5k-less': '月に¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-20k': '月に¥10,000〜¥20,000未満',
  '20k-50k': '月に¥20,000〜¥50,000未満',
  '50k-more': '月に¥50,000以上',
  unknown: '分からない'
}

export const hobbyGoodsExpenses = (code: string | undefined): string =>
  code === undefined ? HOBBY_GOODS_EXPENSES.unknown : HOBBY_GOODS_EXPENSES[code]

const SERVICE_EXPENSES: Record<string, string> = {
  '5k-less': '月に¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-20k': '月に¥10,000〜¥20,000未満',
  '20k-50k': '月に¥20,000〜¥50,000未満',
  '50k-more': '月に¥50,000以上',
  unknown: '分からない'
}

export const serviceExpenses = (code: string | undefined): string =>
  code === undefined ? SERVICE_EXPENSES.unknown : SERVICE_EXPENSES[code]

const DAILY_GOODS_EXPENSES: Record<string, string> = {
  '5k-less': '月に¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-20k': '月に¥10,000〜¥20,000未満',
  '20k-30k': '月に¥20,000〜¥30,000未満',
  '30k-more': '月に¥30,000以上',
  unknown: '分からない'
}

export const dailyGoodsExpenses = (code: string | undefined): string =>
  code === undefined ? DAILY_GOODS_EXPENSES.unknown : DAILY_GOODS_EXPENSES[code]

const LEISURE_SPORTS_EXPENSES: Record<string, string> = {
  '5k-less': '月に¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-20k': '月に¥10,000〜¥20,000未満',
  '20k-50k': '月に¥20,000〜¥50,000未満',
  '50k-more': '月に¥50,000以上',
  unknown: '分からない'
}

export const leisureSportsExpenses = (code: string | undefined): string =>
  code === undefined
    ? LEISURE_SPORTS_EXPENSES.unknown
    : LEISURE_SPORTS_EXPENSES[code]

const COMMUNICATION_EXPENSES: Record<string, string> = {
  '5k-less': '月に¥5,000未満',
  '5k-10k': '月に¥5,000〜¥10,000未満',
  '10k-20k': '月に¥10,000〜¥20,000未満',
  '20k-30k': '月に¥20,000〜¥30,000未満',
  '30k-more': '月に¥30,000以上',
  unknown: '分からない'
}

export const communicationExpenses = (code: string | undefined): string =>
  code === undefined
    ? COMMUNICATION_EXPENSES.unknown
    : COMMUNICATION_EXPENSES[code]
