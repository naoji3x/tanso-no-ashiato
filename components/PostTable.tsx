import {
  Box,
  Table,
  TableContainer,
  TableContainerProps,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { kg2ton } from 'lib/round'

type Props = {
  baseLabel: string
  targetColor: string
  targetLabel: string
  readonly labels: readonly string[] | readonly string[][]
  readonly baseData: readonly number[]
  readonly targetData: readonly number[]
}

type Item = {
  index: number
  label: string | string[]
  base: number
  target: number
}

const PostTable = ({
  baseLabel,
  targetColor,
  targetLabel,
  labels,
  baseData,
  targetData,
  ...rest
}: Props & TableContainerProps) => {
  const data: Item[] = []

  for (let i = 0; i < labels.length; i++) {
    data.push({
      index: i,
      label: labels[i],
      base: baseData[i],
      target: targetData[i]
    })
  }

  return (
    <TableContainer {...rest}>
      <Table size={'sm'}>
        <Thead>
          <Tr>
            <Th>項目</Th>
            <Th background={targetColor}>{targetLabel}</Th>
            <Th background={'gray.100'}>{baseLabel}</Th>
            <Th>差異</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.index}>
              <Th>
                {Array.isArray(item.label) && item.label.length > 1
                  ? item.label.map((l, index) => (
                      <Box key={index}>
                        {l}
                        {index !== 0 ? <br /> : ''}
                      </Box>
                    ))
                  : item.label}
              </Th>
              <Td textAlign={'right'} background={targetColor}>
                {kg2ton(item.target).toLocaleString()}
              </Td>
              <Td textAlign={'right'} background={'gray.100'}>
                {kg2ton(item.base).toLocaleString()}
              </Td>
              <Td textAlign={'right'}>
                {kg2ton(item.target - item.base).toLocaleString()}
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>合計</Th>
            <Th textAlign={'right'} background={targetColor}>
              {kg2ton(
                data.reduce((sum, d) => sum + d.target, 0)
              ).toLocaleString()}
            </Th>
            <Th textAlign={'right'} background={'gray.100'}>
              {kg2ton(
                data.reduce((sum, d) => sum + d.base, 0)
              ).toLocaleString()}
            </Th>
            <Th textAlign={'right'}>
              {kg2ton(
                data.reduce((sum, d) => sum + d.target, 0) -
                  data.reduce((sum, d) => sum + d.base, 0)
              ).toLocaleString()}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
export default PostTable
