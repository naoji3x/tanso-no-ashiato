import {
  Box,
  BoxProps,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import {
  Chart,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip
} from 'chart.js'
import { kg2ton } from 'lib/round'
import url from 'lib/url'
import { Radar } from 'react-chartjs-2'
import { IconType } from 'react-icons'
import PostTable from './PostTable'

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
)

const ChartTitle = ({
  title,
  iconImage
}: {
  title: string
  iconImage?: string | IconType
}) => (
  <Heading
    key={'heading'}
    textAlign={'center'}
    fontSize={'2xl'}
    fontFamily={'body'}
  >
    <Box display="flex" alignItems="center">
      {iconImage === undefined ? null : typeof iconImage === 'string' ? (
        <Image src={url(iconImage)} alt="image" boxSize={50} mr={4} />
      ) : (
        <Icon as={iconImage} color="green.500" boxSize={45} mr={4} />
      )}
      <Text> {title}</Text>
    </Box>
  </Heading>
)

//

type Props = {
  readonly color: string
  readonly title: string
  readonly baseLabel: string
  readonly targetLabel: string
  readonly labels: readonly string[] | readonly string[][]
  readonly baseData: readonly number[]
  readonly targetData: readonly number[]
  readonly comment: string
  readonly iconImage?: string | IconType
}

const RadarChartCard = ({
  color,
  title,
  baseLabel,
  targetLabel,
  labels,
  baseData,
  targetData,
  comment,
  iconImage,
  ...rest
}: Props & BoxProps) => {
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      r: {
        min: 0,
        pointLabels: {
          font: { size: 14 }
        },
        ticks: {
          font: { size: 14 },
          stepSize: 0.2
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: { font: { size: 16 } }
      },
      title: {
        display: false
      }
    }
  }

  const data = {
    labels: [...labels],
    datasets: [
      {
        label: targetLabel,
        data: targetData.map((d) => kg2ton(d)),
        fill: true,
        backgroundColor: color + '50',
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: color
      },
      {
        label: baseLabel, // '国民平均',
        data: baseData.map((d) => kg2ton(d)),
        fill: true,
        backgroundColor: 'rgba(64, 64, 64, 0.1)',
        borderColor: 'rgba(64, 64, 64, 0.3)',
        pointBackgroundColor: 'rgba(64, 64, 64, 0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 99, 99)'
      }
    ]
  }
  return (
    <Box {...rest} py={2} minW={{ base: '0', sm: 'sm' }} w={'full'}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={'full'}
        h={'auto'}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        padding={4}
      >
        <Center hideFrom={'md'}>
          <ChartTitle title={title} iconImage={iconImage} />
        </Center>

        <Center key={'chart'}>
          <Flex flex={1} bg="white">
            <Box
              w={useBreakpointValue({
                base: '100%',
                md: '300px',
                lg: '400px'
              })}
              height={useBreakpointValue({
                base: '100%',
                md: '300px',
                lg: '400px'
              })}
            >
              <Radar data={data} options={options} height={'100%'} />
            </Box>
          </Flex>
        </Center>
        <Stack
          key={'body'}
          flex={1}
          flexDirection="column"
          justifyContent="center"
          p={1}
          pt={2}
        >
          <Box key={'heading'} hideBelow={'md'}>
            <ChartTitle title={title} iconImage={iconImage} />
          </Box>

          <Text
            key={'text'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {comment}
          </Text>
          <PostTable
            key={'table'}
            baseLabel={baseLabel}
            targetColor={color + '30'}
            targetLabel={targetLabel}
            labels={labels}
            baseData={baseData}
            targetData={targetData}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default RadarChartCard
