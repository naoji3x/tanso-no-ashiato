---
'$schema': ../schemas/post.yaml
title: 立花 瀧
firstName: 瀧
lastName: 立花
age: 20s
gender: male
region: kanto
tagline: 新宿に住む高校生のカーボンフットプリントは？
excerpt: 5トン切りです！東京暮らしの割には頑張っていますね！
totalComment: 住居と食が国民平均レベルですが、四谷〜信濃町近辺での徒歩圏内の生活が聞いていますね。
housingComment: 父親と四谷のマンションに二人暮らしで、ほぼ全国平均のフットプリントです。
mobilityComment: 自宅、高校、バイト先と徒歩圏内でフットプリントはほぼゼロです！
foodComment: 食べ盛りの男子高生ですが、頻繁に外食する財力はなく、ほぼ全国平均通りです。
otherComment: あまりオシャレという感じでもないので、結構節約できています。
iconImage: /assets/posts/taki-tachibana/taki-tachibana.png
backgroundImage: /assets/posts/taki-tachibana/vista-wei-OiERUvVrioU-unsplash.jpg
date: '2023-07-23T18:00:00'
contentReferences:
  - <a href="https://kiminonaha.trendnote.xyz/158">君の名は　ファンブログ</a>
  - <a href="http://tatazumai.c.ooco.jp/house2/s_your-name.html">日本の佇まい</a>
  -  <a href="https://www.env.go.jp/content/000122579.pdf">令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）</a>
  -  <a href="https://kepco.jp/gas/consumption/">関西電力 一般家庭のガス平均使用量</a>
  - <a href="https://47todofuken-ranking.com/toyu/#google_vignette">都道府県別の灯油の消費量ランキング</a>
imageReferences:
  - 背景：<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/OiERUvVrioU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/@weista?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vista Wei</a>が撮影した写真
  
housingAnswer:
  # https://kiminonaha.trendnote.xyz/158
  # http://tatazumai.c.ooco.jp/house2/s_your-name.html
  # 家は東京都千代田区六番町、築30年は超える古いマンション。父子家庭。3LDK。
  housingSize: 4-room
  residentCount: 2
  housingInsulation: no-insulation
  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のkWh/世帯・年が3,767kWh
  # 12で割って平均値を出して、3,767 / 12 = 314 ≒ 320とした。
  # https://www.env.go.jp/content/000122579.pdf
  electricity:
    electricityType: conventional
    monthlyConsumption: 320
    month: may #平均は5月とした。
  # 以下を参考に3人家族の場合は34m3とした。
  # https://kepco.jp/gas/consumption/
  gas:
    item: urban-gas
    monthlyConsumption: 26
    month: may

  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のL/世帯・年が74
  # https://www.env.go.jp/content/000122579.pdf
  # 関東にすると少し範囲が広いので、以下を参考に、東京は21.3L/年とした。
  # https://47todofuken-ranking.com/toyu/#google_vignette
  # 4ヶ月使うとして、21.3 / 4 ≒ 5.3L/月
  kerosene:
    monthlyConsumption: 5.3
    monthCount: 4


mobilityAnswer:
  # 高校生なので自家用車はなし。
  # privateCarAnnualMileage: 7800
  carType: gasoline
  carPassengers: 2-3
  # carCharging: unknown
  # 自宅の最寄り駅を四谷、高校の最寄り駅は信濃町とした。JRで通学もできるが徒歩圏内とした。
  # バイトは週３日、四谷から新宿御苑まで、丸の内線で行けるが徒歩圏内とした。
  trainWeeklyTravelingTime: 0
  # 東京から飛騨古川まで、5時間 x 往復
  trainAnnualTravelingTime: 10
  busWeeklyTravelingTime: 0
  busAnnualTravelingTime: 0
  motorbikeWeeklyTravelingTime: 0
  motorbikeAnnualTravelingTime: 0
  otherCarWeeklyTravelingTime: 0
  # 飛騨でのタクシー
  otherCarAnnualTravelingTime: 2
  airplaneAnnualTravelingTime: 0
  ferryAnnualTravelingTime: 0

foodAnswer:
  foodDirectWasteFrequency: seldom
  foodLeftoverFrequency: seldom
  foodIntake: somewhat-much
  alcoholFrequency: never
  dairyFoodFrequency: 2-per-day
  beefDishFrequency: 2-3-per-week
  porkDishFrequency: 2-3-per-week
  chickenDishFrequency: 4-5-per-week
  seafoodDishFrequency: 2-3-per-week
  softDrinkSnackExpenses: 3k-5k
  eatOutExpenses: 5k-10k

otherAnswer:
  travelExpenses: 10k-less
  applianceFurnitureExpenses: 50k-less
  clothesBeautyExpenses: 5k-10k
  hobbyGoodsExpenses: 5k-10k
  serviceExpenses: 5k-less
  dailyGoodsExpenses: 5k-less
  leisureSportsExpenses: 5k-less
  communicationExpenses: 20k-30k
---

## はじめに

都会の男子高生の代表として、「[君の名は。](http://www.kiminona.com/)」の立花瀧さんにモデルになってもらいました。都会暮らしですが、四谷のマンション住まいで高校も信濃町、バイト先も新宿御苑の北と、ほぼ徒歩生活圏内のため「移動」に関するフットプリントがかなり抑えられています。

各種前提条件は[君の名はファンブログ](https://kiminonaha.trendnote.xyz/158)、[日本の佇まい](http://tatazumai.c.ooco.jp/house2/s_your-name.html)を参考にさせて頂きました。なお、プロフィール画像については非営利目的の二次創作として描いています（[コミックス・ウェーブ・フィルム作品の二次創作について](https://www.cwfilms.jp/about/guideline.html)を参照。かなり寛容なガイドラインになっています）。

## 前提条件

### 住居

3LDKのマンションに父親と２人暮らしです。かなり古いマンションのようで、断熱性能は無断熱としました。また、電気使用量、ガス使用量、灯油使用量は以下の様に計算しています。

- **電気使用量**: [令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)より、関東甲信越の電気使用量は3,767kWh/世帯・年。12ヶ月で割って平均値を算出して、1世帯分相当として、3,767kWh / 12 ヶ月 x 1世帯 ≒ 320kWh/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **ガス使用量**: 都市ガスを使っていると想定。[関西電力 一般家庭のガス平均使用量](https://kepco.jp/gas/consumption)より、2人家族のガス平均使用量から26m3/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **灯油使用量**: [都道府県別の灯油の消費量ランキング](https://47todofuken-ranking.com/toyu/#google_vignette")を参考に、東京の灯油平均使用量は21.3L/年、4ヶ月使うとし、21.3L / 4ヶ月 * 1世帯 ≒ 5.3L/月としました。

### 移動

都会暮らしとはいえ、四谷住まいで高校、バイト先も近く、平日はほぼ徒歩で生活できる羨ましい環境です。映画の中では岐阜の糸守町に行くシーンがあるので、飛騨古川から東京まで、5時間 x 往復＋タクシー移動2時間を加えています。

### 食

食については食べ盛りですが男子高生ということで、１日の摂取カロリーを約2,400kcal やや多い（軽い運動や立ち仕事がある男性、運動習慣の多い女性）にしています。

### モノとサービス

建築に興味があるということで、建築系の書籍に結構お金を使っているのではと想定しました。バイトに忙しくてあまり娯楽にお金をかけていなさそうで、奥寺先輩とのデートも美術館リーズナブルな出費の様です。
