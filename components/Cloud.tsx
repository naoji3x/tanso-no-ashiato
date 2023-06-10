import { Box, BoxProps, Text } from '@chakra-ui/react'
import { kg2ton } from 'lib/round'

type Props = {
  value?: number
  unit?: string
}

const Cloud = ({ value = 100, ...rest }: Props & BoxProps) => {
  return (
    <Box {...rest}>
      <Box position="relative" fill={'gray.200'} textAlign="center">
        <Box
          position="absolute"
          top="38px"
          left={0}
          right={0}
          bottom={0}
          margin="auto"
        >
          <Text
            fontSize="36px"
            fontWeight="bold"
            textColor={'gray.600'}
            textShadow="0 0 1px white, 0 0 2px white, 0 0 3px white, 0 0 4px gray, 0 0 5px gray, 0 0 6px gray"
          >
            {isNaN(value) ? '?.??' : kg2ton(value).toLocaleString()}
          </Text>
          <Text as="span" fontSize="18px" fontWeight="bold" ml={8}>
            トン
          </Text>
          <Text as="span" fontSize="9px" fontWeight="bold">
            (ton CO2e)
          </Text>
        </Box>
        <svg
          width="248"
          height="140"
          viewBox="0 0 248 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 97.5956C-0.000488281 88.1022 3.17303 78.8834 9.01244 71.4151C14.8518 63.9468 23.0193 58.6611 32.207 56.4044C32.5869 41.3202 38.8223 26.9814 49.5841 16.4448C60.3458 5.90828 74.7826 0.00735663 89.8169 6.01389e-06C98.5325 -0.00398599 107.135 1.97948 114.975 5.80063C122.815 9.62178 129.688 15.1807 135.074 22.0578C139.456 16.4092 145.573 12.3701 152.476 10.5675C159.38 8.76483 166.682 9.29937 173.252 12.0881C179.821 14.8769 185.29 19.764 188.809 25.9909C192.328 32.2179 193.701 39.4365 192.715 46.5267C199.476 45.2991 206.424 45.5766 213.066 47.3395C219.709 49.1025 225.885 52.3078 231.158 56.7291C236.431 61.1505 240.673 66.6799 243.583 72.927C246.493 79.174 248.001 85.9861 248 92.8822C248.002 99.0678 246.79 105.193 244.434 110.909C242.077 116.624 238.622 121.818 234.265 126.193C229.909 130.568 224.736 134.04 219.043 136.409C213.35 138.778 207.248 139.998 201.084 140H42.1573C30.9694 139.975 20.2483 135.496 12.3474 127.546C4.4465 119.596 0.0113525 108.824 0.0154877 97.5956H0Z" />
        </svg>
      </Box>
    </Box>
  )
}

export default Cloud
