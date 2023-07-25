---
'$schema': ../schemas/post.yaml
title: 宮水 三葉
firstName: 三葉
lastName: 宮水
age: -10s
gender: female
region: tokai
tagline: 岐阜の田舎に住む高校生のフットプリントは？
excerpt: やりました、３トン台です！目標までもう少し！
totalComment: 住居と食をもう少し工夫すれば３トン達成できそうです！
housingComment: ３人暮らしで、世帯の平均人数2.33人（2015年国勢調査）を上回っている分、フットプリントが国民平均より低めです。
mobilityComment: 田舎暮らしですが日常は徒歩圏内の生活のようで移動に関わるフットプリントはほぼゼロです。
foodComment: 外食する場所もなく、極めて健康的な食生活です。
otherComment: ハリネズミがマイブームの様ですが、田舎なので娯楽も少なく、スマホの通信費ぐらいが大きな出費でしょうか。
iconImage: /assets/posts/mitsuha-miyamizu/mitsuha-miyamizu.png
backgroundImage: /assets/posts/mitsuha-miyamizu/kentaro-komada-MKpJ5f97Y4M-unsplash.jpg
date: '2023-07-23T22:00:00'
contentReferences:
  - <a href="https://www.athome.co.jp/cinemadori/5115/">シネマドリ at home x PICT-UP</a>
  - <a href="https://www.env.go.jp/content/000122579.pdf">令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）</a>
  - <a href="https://oil-info.ieej.or.jp/documents/data/20080326_2.pdf">財団法人日本エネルギー経済研究所平成１８年度プロパンガス消費実態調査報告書</a>
  - <a href="https://47todofuken-ranking.com/toyu/#google_vignette">都道府県別の灯油の消費量ランキング</a>
imageReferences:
  - 背景：<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/MKpJ5f97Y4M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/@kenta_k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kentaro Komada</a>が撮影した写真
  
housingAnswer:
  # https://www.athome.co.jp/cinemadori/5115/
  housingSize: 7-more-room
  residentCount: 3
  housingInsulation: no-insulation
  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の東海のkWh/世帯・年が4,286kWh
  # 12で割って平均値を出して、4,286 / 12 ≒ 360 とした。
  # https://www.env.go.jp/content/000122579.pdf
  electricity:
    electricityType: conventional
    monthlyConsumption: 360
    month: may #平均は5月とした。

  # 財団法人 日本エネルギー経済研究所 平成１８年度プロパンガス消費実態調査の岐阜のプロパンガス平均使用量は、8.3m3/月
  # https://oil-info.ieej.or.jp/documents/data/20080326_2.pdf
  gas:
    item: lpg
    monthlyConsumption: 8.3
    month: may
  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の東海のL/世帯・年が89
  # https://www.env.go.jp/content/000122579.pdf
  # 東海にすると少し範囲が広いので、以下を参考に、岐阜は109.1L/年とした。
  # https://47todofuken-ranking.com/toyu/#google_vignette
  # 4ヶ月使うとして、109.1 / 4 ≒ 27.3L/月
  kerosene:
    monthlyConsumption: 27.3
    monthCount: 4

mobilityAnswer:
  # privateCarAnnualMileage: 7800
  carType: gasoline
  carPassengers: '3'
  # carCharging: unknown
  trainWeeklyTravelingTime: 0
  # 東京から飛騨古川まで、5時間 x 往復
  trainAnnualTravelingTime: 10
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
  foodIntake: moderate
  alcoholFrequency: never
  dairyFoodFrequency: 2-per-day
  beefDishFrequency: 2-3-per-week
  porkDishFrequency: 2-3-per-week
  chickenDishFrequency: 2-3-per-week
  seafoodDishFrequency: 2-3-per-week
  softDrinkSnackExpenses: 3k-less
  eatOutExpenses: 5k-less

otherAnswer:
  travelExpenses: 10k-less
  applianceFurnitureExpenses: 50k-less
  clothesBeautyExpenses: 5k-10k
  hobbyGoodsExpenses: 5k-less
  serviceExpenses: 5k-less
  dailyGoodsExpenses: 5k-less
  leisureSportsExpenses: 5k-less
  communicationExpenses: 10k-20k
---

## はじめに

田舎の女子高生の代表として、「[君の名は。](http://www.kiminona.com/)」の宮水三葉さんにモデルになってもらいました。田舎暮らし、徒歩生活のため「移動」と「物とサービス」に関するフットプリントがかなり抑えられています。

各種前提条件は[シネマドリ at home x PICT-UP](https://www.athome.co.jp/cinemadori/5115/)を参考にさせて頂きました、なお、プロフィール画像については非営利目的の二次創作として描いています（[コミックス・ウェーブ・フィルム作品の二次創作について](https://www.cwfilms.jp/about/guideline.html)を参照。かなり寛容なガイドラインになっています）。

## 前提条件

### 住居

飛騨の山奥の田舎町に祖母と妹との３人暮らしです。家は古く大きな木造建築で、離れまである豪邸です。庭の手入れだけでも大変そうですね。建物はかなりの年代物ですので断熱性能は無断熱としています。また、電気使用量、ガス使用量、灯油使用量は以下の様に計算しています。

- **電気使用量**: [令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)より、東海の電気使用量は4,286kWh/世帯・年。12ヶ月で割って平均値を算出して、1世帯分相当として、4,286kWh / 12 ヶ月 x 1世帯 ≒ 360kWh/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **ガス使用量**: LPGを使っていると想定。[財団法人日本エネルギー経済研究所平成１８年度プロパンガス消費実態調査報告書](https://oil-info.ieej.or.jp/documents/data/20080326_2.pdf)から、岐阜のプロパンガス平均使用量は、8.3m3/月、対象月は5月としました。

- **灯油使用量**: [都道府県別の灯油の消費量ランキング](https://47todofuken-ranking.com/toyu/#google_vignette")を参考に、岐阜の灯油平均使用量は109.1L/年、4ヶ月使うとし、109.1L / 4ヶ月 * 1世帯 ≒ 27.3L/月としました。

### 移動

移動についてはほぼ徒歩圏内の生活、映画の中では東京の瀧くんに会いに行くシーンがあるので、飛騨古川から東京まで、5時間 x 往復を加えています。

### 食

食については食べ盛りですが、女子高生ということで、１日の摂取カロリーを約2,200kcal 普通（軽い運動や立ち仕事がある女性、座って過ごすことが多い男性）にしています。

### モノとサービス

田舎で特にこれといった娯楽はなく、塾に通っているといったこともなさそうです。マイブームのハリネズミグッズを集めるのが唯一の楽しみでしょうか。スマホの通信費ぐらいが大きな出費です。
