---
'$schema': ../schemas/post.yaml
title: 葛城 ミサト
firstName: ミサト
lastName: 葛城
age: 20s
gender: female
region: kanto
tagline: 第３新東京のマンション三人暮らしのフットプリントは？
excerpt: 5トン台ですが、第３新東京にしてはややフットプリントが高め？
totalComment: 食が足を引っ張っています。また、車通勤のため移動のフットプリントが思ったより高めです。
housingComment: 100%再生可能エネルギーでオール電化と想定したので、国民平均より約2t弱低い値になっています。さすが、第３新東京。
mobilityComment: 愛車は電動化したアルピーヌ・A310とのこと。EVではあるものの、製造時のカーボンフットプリントがかさんでいます。
foodComment: ランチはほぼ外食、夜も加持さんと居酒屋で一杯、となるとかなりの出費です。
otherComment: 仕事人間で趣味は少なく、洋服もNERVから制服が支給されるため安上がりです。
iconImage: /assets/posts/misato-katsuragi/misato-katsuragi.png
backgroundImage: /assets/posts/misato-katsuragi/kunal-sahu-ieHfF8tDyn8-unsplash.jpg
date: '2023-06-11T11:00:02'
contentReferences:
  - <a href="https://ja.wikipedia.org/wiki/%E8%91%9B%E5%9F%8E%E3%83%9F%E3%82%B5%E3%83%88">Wikipedia（葛城ミサト）</a>
  - <a href="https://ja.wikipedia.org/wiki/%E7%AC%AC3%E6%96%B0%E6%9D%B1%E4%BA%AC%E5%B8%82">Wikipedia（第３新東京）</a>
  -  <a href="https://www.env.go.jp/content/000122579.pdf">令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）</a>
imageReferences:
  - 背景：<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/ieHfF8tDyn8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/@kunalsahu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kunal Sahu</a>が撮影した写真

housingAnswer:
  housingSize: 4-room
  residentCount: 3
  housingInsulation: 4-level
  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のkWh/世帯・年が3,767kWh
  # 12で割って平均値を出して、3,767 / 12  = 314 ≒ 320 とした。
  # https://www.env.go.jp/content/000122579.pdf
  electricity:
    electricityType: 100-renewable
    monthlyConsumption: 320
    month: may #平均は5月とした。
  # gas:
  #  item: 
  #  monthlyConsumption: 
  #  month: 
  # kerosene:
  #  monthlyConsumption: 500
  #  monthCount: 5

mobilityAnswer:
  # NERVまで往復30kmとして、月20日 x 12ヵ月として、30 x 20 x 12 = 7200km
  # 週末に買い物等で、10kmとして、月5日 x 12ヵ月として、10 x 5 x 12 = 600km
  privateCarAnnualMileage: 7800
  carType: ev
  carPassengers: '1'
  carCharging: charge-almost-at-home
  trainWeeklyTravelingTime: 0
  trainAnnualTravelingTime: 0
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
  alcoholFrequency: everyday
  dairyFoodFrequency: 1-per-day
  beefDishFrequency: 4-5-per-week
  porkDishFrequency: 4-5-per-week
  chickenDishFrequency: 4-5-per-week
  seafoodDishFrequency: 2-3-per-week
  softDrinkSnackExpenses: 10k-15k
  eatOutExpenses: 20k-50k

otherAnswer:
  travelExpenses: 10k-less
  applianceFurnitureExpenses: 100k-200k
  clothesBeautyExpenses: 5k-10k
  hobbyGoodsExpenses: 5k-less
  serviceExpenses: 5k-less
  dailyGoodsExpenses: 5k-less
  leisureSportsExpenses: 5k-less
  communicationExpenses: 10k-20k
---

## はじめに

第３新東京の生活を推定すべく、葛城ミサトさんにモデルになってもらいました。各種前提条件は[Wikipedia](https://ja.wikipedia.org/wiki/%E8%91%9B%E5%9F%8E%E3%83%9F%E3%82%B5%E3%83%88)を参考にしています。また、プロフィール画像については、[『エヴァンゲリオン』シリーズのファン創作物の公開に関するガイドライン](https://www.khara.co.jp/guideline/)に基づき、

1. 個人のファン活動としての創作物を、無償・非商用で公開
2. 全年齢向けSNS一般で公開（[総務省の定義](https://www.soumu.go.jp/main_sosiki/joho_tsusin/security/basic/service/07.html)によるとGitHubもSNSと考えられるため、GitHubで公開）

として、ファン創作物の一環として描きました。

第３新東京はグリーン電力が普及しており、電力は100%再生可能エネルギー、車も基本はEVという前提にしています。その割には3トンを達成できておらず、生活様式の見直しが必要そうです。

## 前提条件

### 住居

3LDKのマンションにシンジ、アスカと３人暮らしです。第３新東京自体が2015年目処着工ですので、断熱性能は断熱等級4級としています。電力は100%再生可能エネルギー、オール電化想定です。

電気使用量は、[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)に基づき、以下のように計算しています。

**電気使用量**: 関東甲信越の電気使用量は3,767kWh/世帯・年。12ヶ月で割って平均値を算出して、1世帯分相当として、3,767kWh / 12 ヶ月 x 1世帯 ≒ 320kWh/月としました。また、対象月は平均値に近いと想定される５月の実績としました。

### 移動

通勤はNERVまで往復30kmと想定して、月20日勤務とし、30km x 20日 x 12か月 = 7,200km。また、週末に買い物等で10m程度移動すると想定して、10km x 月5日程度 x 12ヵ月 = 600km、合わせて7,800kmとしました。愛車は電動化したアルピーヌ・A310。フェラーリ328やガソリンエンジンのアルピーヌ・A310に乗っていることもあったそうですが、ミサトさんにはEVの加速の方が合ってそうですね。

### 食

料理はあまり得意ではなく、ご飯はシンジとアスカと当番制になっているようです。ただし、不規則な勤務のため外食が多く、ランチもほぼ外食と想定としました。夜は加持さんと居酒屋で一杯、となると、かなりの出費です。

### モノとサービス

どうみても仕事人間、且つ、制服等、NERVから色々支給されるとなると、モノとサービスへの出費はかなり抑えられます。
