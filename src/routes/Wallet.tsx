/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Container, Box, Text, Button, IconButton } from '@theme-ui/components'
import { MdArrowUpward } from 'react-icons/md'

export default function Wallet() {
  return (
    <Container variant="container.linearBG" py={5}>
      <Flex
        sx={{
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Flex
          sx={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: ['20em', '30em', '45em'],
            margin: '0 auto',
          }}
        >
          <Box>
            <Text
              sx={{
                fontSize: [3, 5, 6, 7],
                fontWeight: 'normal',
                color: 'background',
                fontFamily: 'numbers',
                textAlign: 'center',
              }}
            >
              $10,000
            </Text>
            <Text
              sx={{
                fontSize: ['6px', 0],
                fontWeight: 'body',
                color: 'background',
                fontFamily: 'subheads',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Total Balance
            </Text>
          </Box>
          <Box
            sx={{
              marginLeft: '30%',
            }}
          >
            <Button
              sx={{
                float: 'right',
              }}
              variant="secondary"
            >
              <MdArrowUpward /> Transfer
            </Button>
          </Box>
        </Flex>
        <div
          sx={{
            my: 3,
            backgroundColor: 'background',
            borderRadius: '10px  10px 0 0',
            minWidth: ['20em', '30em', '40em', '48em'],
          }}
        >
          <Flex
            sx={{
              my: 3,
              justifyContent: 'space-around',
            }}
          >
            <IconButton aria-label="Toggle dark mode">
              <div>
                <img src="assets/64X64.png" alt="" />
              </div>
            </IconButton>
            <Flex
              sx={{
                flexDirection: 'column',
              }}
            >
              <Text>Token</Text>
              <Text>5000 tokens</Text>
            </Flex>
            <Flex
              sx={{
                justifyItems: 'end',
                alignContent: 'end',
                alignItems: 'end',
              }}
            >
              {' '}
              <Text>5000 > </Text>{' '}
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Container>
  )
}
