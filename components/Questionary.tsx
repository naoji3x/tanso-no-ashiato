import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  ListItemProps,
  Text
} from '@chakra-ui/react'
import { Domain } from 'cfp-calc'
import { Food, Housing, Mobility, Other } from 'interfaces/post'
import {
  alcoholFrequency,
  applianceFurnitureExpenses,
  carCharging,
  carPassengers,
  carType,
  clothesBeautyExpenses,
  communicationExpenses,
  dailyGoodsExpenses,
  dairyFoodFrequency,
  dishFrequency,
  eatOutExpenses,
  electricityType,
  foodDirectWasteFrequency,
  foodIntake,
  foodLeftoverFrequency,
  gasItem,
  hobbyGoodsExpenses,
  housingInsulation,
  housingSize,
  leisureSportsExpenses,
  month,
  serviceExpenses,
  softDrinkSnackExpenses,
  travelExpenses
} from 'lib/labels'
import url from 'lib/url'
import { PropsWithChildren } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { MdCheckCircle } from 'react-icons/md'

const QuestionItem = ({
  children,
  ...rest
}: PropsWithChildren<ListItemProps>) => {
  return (
    <ListItem {...rest} px={2}>
      <ListIcon as={BsFillQuestionCircleFill} color="green.500" />
      {children}
    </ListItem>
  )
}

const AnswerItem = ({
  children,
  ...rest
}: PropsWithChildren<ListItemProps>) => {
  return (
    <ListItem {...rest} fontWeight={'bold'} mb={4} px={2} py={1}>
      <ListIcon as={MdCheckCircle} color={'red.400'} />
      {children}
    </ListItem>
  )
}

type QuestionaryProps = {
  domain: Domain
  answer: any
  value: any
  question: string
  children: React.ReactNode
}

const QuestionaryItem = ({
  domain,
  answer,
  value,
  question,
  children
}: QuestionaryProps) => {
  const showAnswer = (answer: any, item: any) =>
    answer !== undefined && item !== undefined
  const showQuestion = (answer: any, item: any) =>
    answer === undefined ? true : showAnswer(answer, item)

  return (
    <>
      {showQuestion(answer, value) && <QuestionItem>{question}</QuestionItem>}
      {showAnswer(answer, value) && (
        <AnswerItem bgColor={`${domain}.200`} rounded={'md'}>
          {children}
        </AnswerItem>
      )}
    </>
  )
}

const QuestionaryCategory = ({
  iconImage,
  description
}: {
  iconImage: string
  description: string
}) => {
  return (
    <Heading as={'h3'}>
      <AccordionButton>
        <Image src={url(iconImage)} />
        <Box
          as="span"
          flex="1"
          pl={5}
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          fontWeight={'bold'}
          textAlign={'left'}
        >
          {description}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
  )
}

type Props = {
  readonly housing?: Housing
  readonly mobility?: Mobility
  readonly food?: Food
  readonly other?: Other
}

const Questionary = ({
  housing,
  mobility,
  food,
  other,
  ...rest
}: Props & AccordionProps) => (
  <Accordion {...rest}>
    <AccordionItem>
      <QuestionaryCategory
        iconImage={'/icons/housing.svg'}
        description={'住居に関する質問' + (housing ? 'と回答' : '')}
      />
      <AccordionPanel pb={4}>
        <List spacing={3}>
          <QuestionaryItem
            domain={'housing'}
            answer={housing}
            value={housing?.residentCount}
            question="一緒に暮らしている人数（自身を含む）"
          >
            {housing?.residentCount}人
          </QuestionaryItem>

          <QuestionaryItem
            domain={'housing'}
            answer={housing}
            value={housing?.housingSize}
            question="家の部屋数"
          >
            {housingSize(housing?.housingSize)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'housing'}
            answer={housing}
            value={housing?.housingInsulation}
            question="現在住んでいる住居の建築年（断熱性能）"
          >
            {housingInsulation(housing?.housingInsulation)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'housing'}
            answer={housing}
            value={housing?.electricity}
            question="自宅の電力の種類、1ヶ月の電力使
            用量"
          >
            {electricityType(housing?.electricity?.electricityType)}、
            {housing?.electricity?.monthlyConsumption?.toLocaleString()}{' '}
            kWh/月（対象月:{month(housing?.electricity?.month)}）
          </QuestionaryItem>

          <QuestionaryItem
            domain={'housing'}
            answer={housing}
            value={housing?.gas}
            question="使用しているガスの種類、1ヶ月のガス使用量"
          >
            {gasItem(housing?.gas?.item)}、
            {housing?.gas?.monthlyConsumption?.toLocaleString()} m3/月（対象月:
            {month(housing?.gas?.month)}）
          </QuestionaryItem>

          <QuestionaryItem
            domain={'housing'}
            answer={housing}
            value={housing?.kerosene}
            question="昨シーズンの灯油の使用量"
          >
            {housing?.kerosene?.monthlyConsumption?.toLocaleString()}{' '}
            L/月（使用期間:{housing?.kerosene?.monthCount}ヵ月/年）
          </QuestionaryItem>
        </List>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <QuestionaryCategory
        iconImage={'/icons/mobility.svg'}
        description={'移動に関する質問' + (mobility ? 'と回答' : '')}
      />
      <AccordionPanel pb={4}>
        <List spacing={3}>
          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility?.privateCarAnnualMileage}
            question="自家用車の年間の走行距離（自身が乗車していない分は除く）"
          >
            {mobility?.privateCarAnnualMileage?.toLocaleString()} km/年
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility?.carType}
            question="最も使用する自動車の種類"
          >
            {carType(mobility?.carType)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility?.carPassengers}
            question="自動車に乗るときの平均乗車人数（運転手を含む）"
          >
            {carPassengers(mobility?.carPassengers)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility?.carCharging}
            question="電気自動車・プラグインハイブリッド車の自宅充電の有無"
          >
            {carCharging(mobility?.carCharging)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility}
            question="電車の移動時間（通勤時間等を週間で入力、旅行等は年間で入力）"
          >
            {mobility?.trainWeeklyTravelingTime !== undefined &&
              `${mobility?.trainWeeklyTravelingTime} 時間/週`}
            {mobility?.trainWeeklyTravelingTime !== undefined &&
              mobility?.trainAnnualTravelingTime !== undefined &&
              '、'}
            {mobility?.trainAnnualTravelingTime !== undefined &&
              `${mobility?.trainAnnualTravelingTime} 時間/年`}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility}
            question="バスの移動時間（通勤時間等を週間で入力、旅行等は年間で入力）"
          >
            {mobility?.busWeeklyTravelingTime !== undefined &&
              `${mobility?.busWeeklyTravelingTime} 時間/週`}
            {mobility?.busWeeklyTravelingTime !== undefined &&
              mobility?.busAnnualTravelingTime !== undefined &&
              '、'}
            {mobility?.busAnnualTravelingTime !== undefined &&
              `${mobility?.busAnnualTravelingTime} 時間/年`}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility}
            question="その他の車（タクシー、カーシェアリング等）の移動時間（通勤時間等を週間で入力、旅行等は年間で入力）"
          >
            {mobility?.otherCarWeeklyTravelingTime !== undefined &&
              `${mobility?.otherCarWeeklyTravelingTime} 時間/週`}
            {mobility?.otherCarWeeklyTravelingTime !== undefined &&
              mobility?.otherCarAnnualTravelingTime !== undefined &&
              '、'}
            {mobility?.otherCarAnnualTravelingTime !== undefined &&
              `${mobility?.otherCarAnnualTravelingTime} 時間/年`}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility}
            question="バイクの移動時間の移動時間（通勤時間等を週間で入力、旅行等は年間で入力）"
          >
            {mobility?.motorbikeWeeklyTravelingTime !== undefined &&
              `${mobility?.motorbikeWeeklyTravelingTime} 時間/週`}
            {mobility?.motorbikeWeeklyTravelingTime !== undefined &&
              mobility?.motorbikeAnnualTravelingTime !== undefined &&
              '、'}
            {mobility?.motorbikeAnnualTravelingTime !== undefined &&
              `${mobility?.motorbikeAnnualTravelingTime} 時間/年`}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility}
            question="飛行機の移動時間（年間）"
          >
            {mobility?.airplaneAnnualTravelingTime !== undefined &&
              `${mobility?.airplaneAnnualTravelingTime} 時間/年`}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'mobility'}
            answer={mobility}
            value={mobility}
            question="フェリーの移動時間（年間）"
          >
            {mobility?.ferryAnnualTravelingTime !== undefined &&
              `${mobility?.ferryAnnualTravelingTime} 時間/年`}
          </QuestionaryItem>
        </List>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <QuestionaryCategory
        iconImage={'/icons/food.svg'}
        description={'食に関する質問' + (food ? 'と回答' : '')}
      />
      <AccordionPanel pb={4}>
        <Text mb={3}>※自身が消費している分だけで解答。</Text>
        <List spacing={3}>
          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.foodDirectWasteFrequency}
            question="賞味期限切れなどで未使用の食品や食材を捨ててしまう頻度"
          >
            {foodDirectWasteFrequency(food?.foodDirectWasteFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.foodLeftoverFrequency}
            question="食べ残しの頻度"
          >
            {foodLeftoverFrequency(food?.foodLeftoverFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.foodIntake}
            question="1日の活動量（摂取カロリー量）"
          >
            {foodIntake(food?.foodIntake)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.alcoholFrequency}
            question="お酒の頻度（外食の場合も含む）"
          >
            {alcoholFrequency(food?.alcoholFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.dairyFoodFrequency}
            question="乳製品の摂取頻度"
          >
            {dairyFoodFrequency(food?.dairyFoodFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.beefDishFrequency}
            question="牛肉料理の頻度"
          >
            {dishFrequency(food?.beefDishFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.porkDishFrequency}
            question="豚肉料理の頻度"
          >
            {dishFrequency(food?.porkDishFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.chickenDishFrequency}
            question="鶏肉料理の頻度"
          >
            {dishFrequency(food?.chickenDishFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.seafoodDishFrequency}
            question="魚介料理の頻度"
          >
            {dishFrequency(food?.seafoodDishFrequency)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.softDrinkSnackExpenses}
            question="お酒以外の飲み物、お菓子類の1ヶ月の支出（コーヒー、お茶、炭酸飲料、スイーツ、スナック類など）"
          >
            {softDrinkSnackExpenses(food?.softDrinkSnackExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'food'}
            answer={food}
            value={food?.eatOutExpenses}
            question="1ヶ月の外食費（惣菜、弁当、テイクアウトなどは除く）"
          >
            {eatOutExpenses(food?.eatOutExpenses)}
          </QuestionaryItem>
        </List>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <QuestionaryCategory
        iconImage={'/icons/other.svg'}
        description={'モノとサービスに関する質問' + (other ? 'と回答' : '')}
      />
      <AccordionPanel pb={4}>
        <List spacing={3}>
          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.travelExpenses}
            question="過去１年の旅行の支出（交通費と飲食代は除く、宿泊費、施設利用料、入場料、観覧料など、本人分のみ）"
          >
            {travelExpenses(other?.travelExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.applianceFurnitureExpenses}
            question="家電・家具の支出（世帯での合計金額）"
          >
            {applianceFurnitureExpenses(other?.applianceFurnitureExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.clothesBeautyExpenses}
            question="衣類、かばん、宝飾品、美容関連などの支出（本人分のみ）"
          >
            {clothesBeautyExpenses(other?.clothesBeautyExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.hobbyGoodsExpenses}
            question="趣味（娯楽、書籍、雑誌、スポーツ、ペット、ガーデニング用品、たばこ含む）の支出（本人分のみ）"
          >
            {hobbyGoodsExpenses(other?.hobbyGoodsExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.serviceExpenses}
            question="医療、福祉、教育、塾などの習い事の支出（本人分のみ）"
          >
            {serviceExpenses(other?.serviceExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.dailyGoodsExpenses}
            question="日用品（衛生用品・キッチン用品・文具など）の支出（世帯での合計金額）"
          >
            {dailyGoodsExpenses(other?.dailyGoodsExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.leisureSportsExpenses}
            question="レジャー・スポーツ（交通費と飲食代は除く、施設利用料、入場料、観覧料など）に関わる支出（本人分のみ）"
          >
            {leisureSportsExpenses(other?.leisureSportsExpenses)}
          </QuestionaryItem>

          <QuestionaryItem
            domain={'other'}
            answer={other}
            value={other?.communicationExpenses}
            question="通信費、放送受信料を合わせた支出（世帯での合計金額）"
          >
            {communicationExpenses(other?.communicationExpenses)}
          </QuestionaryItem>
        </List>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)
export default Questionary
