---
'$schema': ../schemas/post.yaml
title: 磯野 波平
firstName: 波平
lastName: 磯野
age: 50s
gender: male
region: kanto
tagline: 日本を代表する昭和の大家族のフットプリントは？
excerpt: さすが、波平さん、約5トンと日本平均約７トンに比べるとだいぶ少なく、目標約3トンに向けて中間地点の排出量です。
totalComment: 二世帯住宅７人同居、マイカーなし、だけあって住居と移動に関する排出量が少ないですね。
housingComment: 二世帯７人同居なので、5LDKの豪邸でも一人当たりの排出量は少なくなります。ここで、-1.18トン稼いでいます。
mobilityComment: マイカーなし、ですので、その分電車の比重が大きくなっています。
foodComment: ほぼ国民平均と傾向は同じですが、ノリスケおじさんに奢る分、外食費用がかさんでいます。
otherComment: 囲碁、盆栽、釣り、俳句、書、ゴルフ、骨董品と多趣味なため、趣味用品費用が大きいです。
iconImage: /images/gray-avatar.svg
backgroundImage: /assets/posts/namihei-isono/linmiao-xu-hC33lVuI_co-unsplash.jpg
date: '2020-03-16T05:35:07.322Z'
contentReferences:
  - { title: イソラボ, url: https://iso-labo.com/labo/sazae-san.html#sazae09 }
  - {
      title: 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）,
      url: https://www.env.go.jp/content/000122579.pdf
    }
  - {
      title: Yahoo! JAPAN 知恵袋,
      url: https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12111688952
    }
imageReferences: []

housingAnswer:
  housingSize: 5-6-room
  residentCount: 7
  housingInsulation: no-insulation

  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のkWh/世帯・年が3,767kWh
  # 12で割って平均値を出して、2世代分相当として、3,767 / 12 * 2 = 628 ≒ 630とした。
  # https://www.env.go.jp/content/000122579.pdf
  electricity:
    electricityType: conventional
    monthlyConsumption: 630
    month: may #平均は5月とした。

  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のm3/世帯・年が24
  # 12で割って平均値を出して、2世代分相当として、24 / 12 * 2 = 4とした。
  # https://www.env.go.jp/content/000122579.pdf
  gas:
    item: lpg
    monthlyConsumption: 4
    month: may #平均は5月とした。

  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のL/世帯・年が74
  # https://www.env.go.jp/content/000122579.pdf
  # 4ヶ月使うとして、74 / 4 * 2 = 37
  kerosene:
    monthlyConsumption: 37
    monthCount: 4

mobilityAnswer:
  # privateCarAnnualMileage # 自家用車はないのでコメントアウト
  # 通勤の情報は以下。
  # https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12111688952
  carType: gasoline
  carPassengers: 4-more
  # carCharging: unknown
  trainWeeklyTravelingTime: 8 # 電車は世田谷から銀座まで、40分として x 2(往復) x 6日（当時は土曜も働いていた） = 8 hr
  trainAnnualTravelingTime: 12 # 電車で片道3時間、年２ぐらいを想定
  busWeeklyTravelingTime: 1 # バスは片道1km程度、5分として x 2(往復) x 6日（当時は土曜も働いていた） = 1 hr
  busAnnualTravelingTime: 2 # 一回の旅行で1時間、年２ぐらいを想定
  motorbikeWeeklyTravelingTime: 0
  motorbikeAnnualTravelingTime: 0
  otherCarWeeklyTravelingTime: 0
  otherCarAnnualTravelingTime: 2 # 一回の旅行で1時間、年２ぐらいを想定
  airplaneAnnualTravelingTime: 0
  ferryAnnualTravelingTime: 1 # ２回旅行に行く中で、1回は使用

foodAnswer:
  foodDirectWasteFrequency: seldom
  foodLeftoverFrequency: seldom
  foodIntake: moderate
  alcoholFrequency: everyday
  dairyFoodFrequency: 1-per-day
  beefDishFrequency: 2-3-per-month
  porkDishFrequency: 1-per-week
  chickenDishFrequency: 2-3-per-week
  seafoodDishFrequency: everyday
  softDrinkSnackExpenses: 3k-less
  eatOutExpenses: 10k-20k

otherAnswer:
  travelExpenses: 30k-50k
  applianceFurnitureExpenses: 50k-less
  clothesBeautyExpenses: 5k-10k
  hobbyGoodsExpenses: 10k-20k
  serviceExpenses: 5k-less
  dailyGoodsExpenses: 5k-less
  leisureSportsExpenses: 10k-20k
  communicationExpenses: 5k-less
---

## はじめに

日本を代表するお父さん（お爺さん）キャラクター、磯野波平さんのカーボンフットプリントを推定しました。各種前提条件は、[イソラボ](https://iso-labo.com/labo/sazae-san.html#sazae09)、[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)、[Yahoo! JAPAN 知恵袋](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12111688952)、を参考にしています。

波平さん時代の昭和のカーボンフットプリントを求めるというよりは、波平さんが現在社会で同じ生活を送ったら、どのくらいの排出量になるかを推定しています。

## 前提条件

### 住居

世田谷の 5DK 平屋の邸宅に住んでいる、とのことで、見た目は庶民ですが実はセレブだったんですね。ご自宅は1970年代以前の建築で無断熱としています。
また、電気使用量、ガス使用量、灯油使用量は、[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)に基づき、以下のように計算しています。

- **電気使用量**: 関東甲信越の電気使用量は3,767kWh/世帯・年。12ヶ月で割って平均値を算出して、2世代分相当として、3,767kWh / 12 ヶ月 x 2世帯 ≒ 630kWh/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **ガス使用量**: 都市ガスではなくLPGを使っていると想定。関東甲信越のLPG使用量は24m3/世帯・年。12ヶ月で割って平均値を算出して、2世代分相当として、24m3 / 12ヶ月 x 2世帯 = 4m3/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **灯油使用量**: 関東甲信越の灯油使用量は74L/世帯・年。4 ヶ月使うとして、74L / 4ヶ月 * 2世帯 = 37L/月としました。

### 移動

マイカーは所持しておらず、世田谷の自宅から銀座のオフィスへはバスと電車通勤のようです。家族旅行の際は電車、もしくはレンタカーを借りて移動したようですね。[都市伝説](https://ghibli-tosidensetu.com/%E3%82%B5%E3%82%B6%E3%82%A8%E3%81%95%E3%82%93%E3%81%AE%E6%9C%80%E7%B5%82%E5%9B%9E%E3%81%AF%E3%83%8F%E3%83%AF%E3%82%A4%E6%97%85%E8%A1%8C%EF%BC%81%E6%84%8F%E5%A4%96%E9%81%8E%E3%81%8E%E3%82%8B%E7%B5%90.html)では最終回にハワイ旅行に行ったとかいかなかったとか。あくまでも都市伝説なので今回は考慮しませんでした。

### 食

[イソラボ](https://iso-labo.com/labo/sazae-san.html#sazae09)によると、商社マンとのことで、それなりに飲み会も多いのではと推察しました。また、帰りにノリスケおじさんとちょっと一杯、というのもあるでしょう。

### モノとサービス

これまた、[イソラボ](https://iso-labo.com/labo/sazae-san.html#sazae09)によると、かなりの多趣味のため、趣味用品の消費を厚くしました。
