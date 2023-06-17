---
'$schema': ../schemas/post.yaml
title: 草壁 タツオ
firstName: タツオ
lastName: 草壁
age: 30s
gender: male
region: kanto
tagline: 昭和28年、田舎暮らしのお父さんのフットプリントは？
excerpt: 昭和28年の田舎暮らしだけあって、余裕で目標3トンを過達です。奥さんが入院中の中で一人でサツキとメイを育て、複業で家庭を支えるタツオさん、脱炭素の視点でも立派です。
totalComment: 令和に比べると昭和28年のエネルギー消費量は桁違いに少なく、排出量も少ないです。
housingComment: 薪で暮らす生活、電気も最低限の使用量ですので令和の生活水準に比べ、２トン弱少ない排出量です。
mobilityComment: 週2回の東京への出勤が排出量の大宗を占めます。
foodComment: 畑で取れた野菜中心の食生活を満喫しています。
otherComment: ワンオペで子育てで時間的な余裕もなく、趣味やスポーツへの支出は最小限です。
iconImage: /assets/posts/tatsuo-kusakabe/tatsuo-kusakabe.jpg
backgroundImage: /assets/posts/tatsuo-kusakabe/totoro001.jpg
date: '2023-06-17T16:00:00'
contentReferences:
  -  <a href="https://ghibli.jpn.org/trivia/totoro-era/">ジブリのせかい（時代設定）</a>
  -  <a href="https://ghibli.jpn.org/report/totoro/">ジブリのせかい（職業）</a>
  -  <a href="https://www.env.go.jp/content/000122579.pdf">令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）</a>
  -  <a href="https://www.totoro.or.jp/intro/">公益財団法人トトロのふるさと基金</a>
  -  <a href="https://harikirimaruko.net/totoromadori/">はりきりマルコの〇〇な話</a>
  -  <a href="https://www.enecho.meti.go.jp/about/whitepaper/2020html/2-1-4.html">資源エネルギー庁</a>
  -  <a href="https://sho-waretorokennkyuujyo.com/ghiblimesi-tonarinototoro-satsukisbenntou/">昭和レトロ研究所</a>
imageReferences: 
  - プロフィール:<a href="https://www.ghibli.jp/works/totoro/#frame"> &copy; STUDIO GHIBLI Inc.</a>
  - 背景:<a href="https://www.ghibli.jp/works/totoro/#frame"> &copy; STUDIO GHIBLI Inc.</a>
  

housingAnswer:
  housingSize: 5-6-room
  residentCount: 3
  housingInsulation: no-insulation

  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のkWh/世帯・年が3,767kWh
  # 12で割って平均値を出して、2世代分相当として、3,767 / 12 = 314 ≒ 320、この昭和28を想定してこの1/10にしました。
  # https://www.env.go.jp/content/000122579.pdf
  electricity:
    electricityType: conventional
    monthlyConsumption: 32
    month: may #平均は5月とした。

  # ガスは利用なし
  # gas:
  #  item: lpg
  #  monthlyConsumption: 4
  #  month: may

  # 令和３年度家庭部門のCO2排出実態統計調査資料編（確報値）の関東甲信越のL/世帯・年が74
  # https://www.env.go.jp/content/000122579.pdf
  # 4ヶ月使うとして、74 / 4 * 2 = 37、実際には薪を使っているので、この1/10としました。
  kerosene:
    monthlyConsumption: 3.7
    monthCount: 12

mobilityAnswer:
  # privateCarAnnualMileage # 自家用車はないのでコメントアウト
  # 通勤の情報は以下。
  # https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12111688952
  carType: gasoline
  carPassengers: 4-more
  # carCharging: unknown
  trainWeeklyTravelingTime: 6 # 電車は所沢から東京まで、90分として x 2(往復) x 2日 = 6 hr
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
  alcoholFrequency: never
  dairyFoodFrequency: 1-per-day
  beefDishFrequency: 1-less-per-month
  porkDishFrequency: 2-3-per-month
  chickenDishFrequency: 2-3-per-month
  seafoodDishFrequency: 2-3-per-week
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

となりのトトロのサツキとメイのお父さん、草壁タツオさんのカーボンフットプリントを推定しました。トトロの時代設定は諸説ありますが、[昭和28年(1953年)](https://ghibli.jpn.org/trivia/totoro-era/)と想定し、極力、昭和28年時点のエネルギー消費水準の前提でフットプリントを推定しました。[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)を参考にしつつ、昭和28年時点のエネルギー消費水準になるよう補正しています。

また、プロフィール画像、背景画像については、[スタジオジブリ公式ホームページ](https://www.ghibli.jp/works/totoro/#frame)から、「常識の範囲でご自由にお使いください」、となっている画像を活用させていただいております。本サイトでは、

1. 非営利目的で公開していること
2. 出典、コピーライトを明示していること
3. 作品のイメージを損なうような表現ではないこと

上記の範囲で利用させて頂いておりますので、常識の範囲と解釈しました。

## 前提条件

### 住居

[埼玉狭山丘陵](https://www.totoro.or.jp/intro/)の [3LDKの平屋（２階は物置想定）](https://harikirimaruko.net/totoromadori/)がお住まいで、フットプリント計算上は1970年代以前の建築で無断熱としています。また、電気使用量、灯油使用量は、[令和３年度家庭部門の CO2 排出実態統計調査資料編（確報値）](https://www.env.go.jp/content/000122579.pdf)に基づき、以下のように計算しています。

- **電気使用量**: 関東甲信越の電気使用量は3,767kWh/世帯・年。12ヶ月で割って平均値を算出して、1世帯分相当は、3,767kWh / 12 ヶ月 x 1世帯 ≒ 320kWh/月となります。一方で、昭和28年の電気使用量は、現在に比べると非常に少なく（[2018年の家庭の総電力消費量は2,607億kWhに対して、1965年は283億kWh](https://www.enecho.meti.go.jp/about/whitepaper/2020html/2-1-4.html)）、ざっくり1/10の32kWh/月としました。また、対象月は平均値に近いと想定される５月の実績にしています。

- **ガス使用量**: 薪を使っているので0としました。

- **灯油使用量**: 薪を使っているので0ですが、薪からのCO2発生もありますので、灯油換算で、電気と同様1/10の量としました（1/10の根拠は薄いです）。関東甲信越の灯油使用量は74L/世帯・年。4 ヶ月使うとして、74L / 4ヶ月 * 2世帯 = 37L/月、この1/10で3.7L/月としています。また、利用期間は1年なので12ヶ月としています。

### 移動

最初にオート三輪（三菱のみずしま）に乗って引っ越してきますが、自家用車ではないようです。東京の大学で非常勤講師として考古学を教えているとのことで、週2回ほど出勤しているようです。また、副業で在宅で中国語の翻訳をやって生計を立てているとのこと[(参考:ジブリのせかい)](https://ghibli.jpn.org/report/totoro/)。駅までは自転車として、所沢〜東京までは片道1.5時間と想定しました。

### 食

[昭和レトロ研究所](https://sho-waretorokennkyuujyo.com/ghiblimesi-tonarinototoro-satsukisbenntou/)を参考にして、食は野菜と魚が中心で、お肉は滅多に食べない前提にしました。牛肉は月に1日以下、豚肉、鶏肉は月に2〜3日としています。

### モノとサービス

全て一番安い選択肢を選んでいます。

## 考察

今（2023年）から高々70年前ですが、あらためて検証してみると生活スタイルとカーボンフットプリントが大きく変化していることがわかります。それだけ社会が発展したということですが、果たしてその発展した分の幸せが享受できているか、タツオさんの笑顔をみると考えさせられます。
