---
'$schema': ../schemas/post.yaml
title: 野比 のび太
firstName: のび太
lastName: 野比
age: -10s
gender: male
region: kanto
tagline: 昭和の一人っ子のカーボンフットプリントは？
excerpt: やりました！のび太くん、３トンの目標をほぼ達成です。
totalComment: 満遍なく国民平均を下回っていますが、特に移動が少なく、徒歩圏内での生活が効いています。
housingComment: 3DK借家に３人暮らしです（ドラえもんは人数カウント外）。
mobilityComment: ほぼ徒歩生活なので排出量は非常に少ないです。
foodComment: 牛肉がご馳走の時代なので滅多に食べない想定です。また、外食もほとんどしない前提です。
otherComment: 小学生ですので出費は最低限です。お小遣いは月500円ぐらいでしょうか。
iconImage: /images/green-avatar.svg
backgroundImage: /assets/posts/nobita-nobi/kyo-azuma-x_TJKVU1FJA-unsplash.jpg
date: '2023-06-11T11:00:00'
contentReferences:
  - <a href="https://www.homes.co.jp/cont/living/living_00324/">野比家の間取り</a>
  - <a href="https://doraworks.jp/blog/grade/">ドラワークス</a>
  -  <a href="https://www.env.go.jp/content/000122579.pdf">令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）</a>
imageReferences:
  - 背景:<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/x_TJKVU1FJA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/de/@tokyo_boy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">kyo azuma</a>が撮影した写真
  

housingAnswer:
  housingSize: 4-room
  residentCount: 3
  housingInsulation: no-insulation
  electricity:
    electricityType: conventional
    monthlyConsumption: 320
    month: may
  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のm3/世帯・年が269
  # 12で割って平均値を出して、1世代分相当として、269 / 12 ≒ 23とした。
  # https://www.env.go.jp/content/000122579.pdf
  gas:
    item: urban-gas
    monthlyConsumption: 23
    month: may
  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のL/世帯・年が74
  # https://www.env.go.jp/content/000122579.pdf
  # 4ヶ月使うとして、74 / 4 = 19
  kerosene:
    monthlyConsumption: 19
    monthCount: 4

mobilityAnswer:
  # privateCarAnnualMileage: 10000
  carType: gasoline
  carPassengers: '3'
  # carCharging: unknown
  trainWeeklyTravelingTime: 0
  trainAnnualTravelingTime: 6
  busWeeklyTravelingTime: 0
  busAnnualTravelingTime: 0
  motorbikeWeeklyTravelingTime: 0
  motorbikeAnnualTravelingTime: 0
  otherCarWeeklyTravelingTime: 0
  otherCarAnnualTravelingTime: 0
  airplaneAnnualTravelingTime: 0
  ferryAnnualTravelingTime: 0

foodAnswer:
  foodDirectWasteFrequency: seldom
  foodLeftoverFrequency: seldom
  foodIntake: very-little
  alcoholFrequency: never
  dairyFoodFrequency: 1-per-day
  beefDishFrequency: 2-3-per-month
  porkDishFrequency: 1-per-week
  chickenDishFrequency: 2-3-per-week
  seafoodDishFrequency: 4-5-per-week
  softDrinkSnackExpenses: 3k-less
  eatOutExpenses: 5k-less

otherAnswer:
  travelExpenses: 10k-less
  applianceFurnitureExpenses: 50k-less
  clothesBeautyExpenses: 5k-less
  hobbyGoodsExpenses: 5k-less
  serviceExpenses: 5k-less
  dailyGoodsExpenses: 5k-less
  leisureSportsExpenses: 5k-less
  communicationExpenses: 5k-less
---

## はじめに

昭和の家に住む一人っ子といえば野比のび太くんです。小学生ですので消費が少なく、それに応じて排出量も少なくなっています。見事3トンの目標を達成しました！一方で、逆の見方をすると、小学生のような生活を送らないと3トンの目標は達成が難しい、ということでもあります。各種前提条件は、[住まいのお役立ち情報](https://www.homes.co.jp/cont/living/living_00324/)、[ドラワークス](https://doraworks.jp/blog/grade/) を参考にしています。

## 前提条件

### 住居

練馬区の3DKの借家住まいです。家の間取りは2005年より前は5DKだったそうですが、2005年以降は3DKに変わってしまったとのこと。今回は後者の3DKを採用しました。また、電気使用量、ガス使用量、灯油使用量は、[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)に基づき、以下のように計算しています。

- **電気使用量**: 関東甲信越の電気使用量は3,767kWh/世帯・年。12ヶ月で割って月平均を算出し、1世代分相当として、3,767kWh / 12 ヶ月 x 1世帯 ≒ 320kWh/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **ガス使用量**: 都市ガスを使っていると想定。関東甲信越の都市ガス使用量は269m3/世帯・年で、12ヶ月で割って月平均を算出し、1世代分相当として、269m3 / 12ヶ月 x 1世帯 ≒ 23m3/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **灯油使用量**: 関東甲信越の灯油使用量は74L/世帯・年で4ヶ月使うとして、74L / 4ヶ月 * 1世帯 = 19L/月としました。

関東甲信越の電気使用量、ガス使用用、灯油使用量は全国平均を下回っていることから、全体的に国民平均を下回る結果になりました。

### 移動

移動についてはマイカーなし、また、小学生なので生活は徒歩圏内になります。この前提ですと排出量はほぼゼロに近いですね。なお、年一回ぐらいは電車で旅行に行く想定をしています。

### 食

専業主婦の野比玉子さんが家計をやりくりして食費を下げています。思い起こすと、昭和の時代は牛肉がご馳走でした。また、外食も滅多になく楽しみでした。そのくらいの頻度を前提にしています。

### モノとサービス

小学生なのでお小遣い500円前提で全て一番安い選択肢を選んでいます。ちなみにのび太くんは原作は4年生、アニメは5年生の設定だそうです。4年生と5年生ではお小遣いに大きなインパクトはなさそうですが。
