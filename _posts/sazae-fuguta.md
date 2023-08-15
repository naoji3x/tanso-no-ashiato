---
'$schema': ../schemas/post.yaml
title: フグ田 サザエ
firstName: サザエ
lastName: フグ田
age: 20s
gender: female
region: kanto
tagline: 日本を代表する昭和の専業主婦のフットプリントは？
excerpt: さすが、サザエさん、見事３トン台です。
totalComment: 二世帯住宅７人同居、マイカーなし、だけあって住居と移動に関する排出量が少ないですね（波平さんと同じです）。
housingComment: 二世帯７人同居なので、5LDKの豪邸でも一人当たりの排出量は少なくなります。ここで、約-1トン稼いでいます（こちらも、波平さんと同じです）。
mobilityComment: マイカーなし、お買い物も徒歩圏内ですのでほぼゼロです。
foodComment: 外食も少なく、二世帯家庭７人で食卓を囲むのが日常です。
otherComment: タラちゃんの子育てに忙しく、中々、趣味を楽しむ時間はなさそうですね。
iconImage: /assets/posts/sazae-fuguta/sazae-fuguta.png
backgroundImage: /assets/posts/sazae-fuguta/wai-siew-3x0K5jK70Ns-unsplash.jpg
date: '2023-07-31T11:00:01'
contentReferences:
  -  <a href="https://iso-labo.com/labo/sazae-san.html#sazae09">イソラボ</a>
  -  <a href="https://www.env.go.jp/content/000122579.pdf">令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）</a>
  -  <a href="https://kepco.jp/gas/consumption/">関西電力 一般家庭のガス平均使用量</a>
  -  <a href="https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12111688952">Yahoo! JAPAN 知恵袋</a>
  -  <a href="https://47todofuken-ranking.com/toyu/#google_vignette">都道府県別の灯油の消費量ランキング</a>
imageReferences: 
  - プロフィール:<a href="https://www.google.com/maps/place/%E3%82%B5%E3%82%B6%E3%82%A8%E3%81%95%E3%82%93%E9%8A%85%E5%83%8F/@35.6317165,139.6441964,20.04z/data=!4m6!3m5!1s0x6018f47be94aca91:0xe16ce761dab7c4c9!8m2!3d35.6316712!4d139.6442523!16s%2Fg%2F11cjgd8_b6?entry=ttu">サザエさんの銅像</a>
  - 背景:<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/3x0K5jK70Ns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@jawis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wai Siew</a>が撮影した写真
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
    month: may # 平均は5月とした。

  # 以下を参考に3人家族の場合は43m3とした。
  # https://kepco.jp/gas/consumption/
  gas:
    item: urban-gas
    monthlyConsumption: 43
    month: may

  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のL/世帯・年が74
  # https://www.env.go.jp/content/000122579.pdf
  # 関東にすると少し範囲が広いので、以下を参考に、東京は21.3L/年とした。
  # https://47todofuken-ranking.com/toyu/#google_vignette
  # 4ヶ月使うとし、21.3 / 4 * 2世帯 ≒ 10.7L/月
  kerosene:
    monthlyConsumption: 10.7
    monthCount: 4

mobilityAnswer:
  # privateCarAnnualMileage # 自家用車はないのでコメントアウト
  # 通勤の情報は以下。
  # https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12111688952
  carType: gasoline
  carPassengers: 4-more
  # carCharging: unknown
  trainWeeklyTravelingTime: 0 # 徒歩生活
  trainAnnualTravelingTime: 12 # 電車で片道3時間、年２ぐらいを想定
  busWeeklyTravelingTime: 0 # 徒歩生活
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
  alcoholFrequency: never
  dairyFoodFrequency: 1-per-day
  beefDishFrequency: 2-3-per-month
  porkDishFrequency: 1-per-week
  chickenDishFrequency: 2-3-per-week
  seafoodDishFrequency: everyday
  softDrinkSnackExpenses: 3k-less
  eatOutExpenses: 5k-less

otherAnswer:
  travelExpenses: 30k-50k
  applianceFurnitureExpenses: 50k-less
  clothesBeautyExpenses: 5k-10k
  hobbyGoodsExpenses: 5k-less
  serviceExpenses: 5k-less
  dailyGoodsExpenses: 5k-less
  leisureSportsExpenses: 5k-10k
  communicationExpenses: 5k-less
---

## はじめに

日本を代表する昭和の専業主婦、磯野サザエんのカーボンフットプリントを推定しました。各種前提条件は、[イソラボ](https://iso-labo.com/labo/sazae-san.html#sazae09)、[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)、[Yahoo! JAPAN 知恵袋](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12111688952)、を参考にしています。なお、プロフィール画像は[世田谷区桜新町のそばにあるサザエさんの銅像](https://www.google.com/maps/place/%E3%82%B5%E3%82%B6%E3%82%A8%E3%81%95%E3%82%93%E9%8A%85%E5%83%8F/@35.6317165,139.6441964,20.04z/data=!4m6!3m5!1s0x6018f47be94aca91:0xe16ce761dab7c4c9!8m2!3d35.6316712!4d139.6442523!16s%2Fg%2F11cjgd8_b6?entry=ttu)になります。[銅像のようなパブリックアートは非商用であれば使って良さそう](https://manga-factory.net/column/4761)ですので活用させて頂きました。

サザエさん時代の昭和のカーボンフットプリントを求めるというよりは、サザエさんが現在社会で同じ生活を送ったら、どのくらいの排出量になるかを推定しています。

## 前提条件

### 住居

世田谷の 5DK 平屋の邸宅に住んでいる、とのことで、見た目は庶民ですが実はセレブだったんですね。この辺りの条件は波平さんと一緒です。ご自宅は1970年代以前の建築で無断熱としています。
また、電気使用量、ガス使用量、灯油使用量は、[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)に基づき、以下のように計算しています。

- **電気使用量**: 関東甲信越の電気使用量は3,767kWh/世帯・年。12ヶ月で割って平均値を算出して、2世帯分相当として、3,767kWh / 12 ヶ月 x 2世帯 ≒ 630kWh/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **ガス使用量**: 都市ガスを使っていると想定。[関西電力 一般家庭のガス平均使用量](https://kepco.jp/gas/consumption)より、4人家族以上のガス平均使用量から43m3/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

- **灯油使用量**: [都道府県別の灯油の消費量ランキング](https://47todofuken-ranking.com/toyu/#google_vignette)参考に、東京の平均灯油使用量は21.3L/年とし、4ヶ月使うとし、21.3L / 4ヶ月 * 2世帯 ≒ 10.7L/月としました。

### 移動

マイカーは所持しておらず、日常はほぼ徒歩圏内のようです。家族旅行の際は電車、もしくはレンタカーを借りて移動したようですね。[都市伝説](https://ghibli-tosidensetu.com/%E3%82%B5%E3%82%B6%E3%82%A8%E3%81%95%E3%82%93%E3%81%AE%E6%9C%80%E7%B5%82%E5%9B%9E%E3%81%AF%E3%83%8F%E3%83%AF%E3%82%A4%E6%97%85%E8%A1%8C%EF%BC%81%E6%84%8F%E5%A4%96%E9%81%8E%E3%81%8E%E3%82%8B%E7%B5%90.html)では最終回にハワイ旅行に行ったとかいかなかったとか。あくまでも都市伝説なので今回は考慮しませんでした。

### 食

フグ田家の家計をやりくりするサザエさん、堅実な生活でマスオさんを支えます。ちなみに、誤解していたのですが、マスオさんは婿養子ではなかったんですね。すっかり苗字は磯野だと勘違いしていました…、フグ田が正解です。１日の活動量は「軽い運動や立ち仕事がある女性、座って過ごすことが多い男性」としています。

### モノとサービス

タラちゃんの育児時に忙しく、モノとサービスへの出費はあまり多くない想定でフットプリントを推定しました。
