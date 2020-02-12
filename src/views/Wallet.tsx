/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Container, Box, Text, Button } from '@theme-ui/components'
import { MdArrowUpward, MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from 'assets/mini.svg'

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
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bg: 'primary',
                width: 48,
                height: 48,
                borderRadius: 100,
              }}
            >
              <img
                sx={{
                  display: 'block',
                  border: 0,
                }}
                src={logo}
                alt="logo"
              />
            </div>

            <Flex
              sx={{
                flexDirection: 'column',
              }}
            >
              <Text
                sx={{
                  color: 'text',
                  fontFamily: 'body',
                  fontSize: [0, 1, 2],
                  textTransform: 'uppercase',
                }}
              >
                Token
              </Text>
              <Text
                sx={{
                  color: 'text',
                  fontFamily: 'numbers',
                  fontSize: [0, 1, 2],
                  fontWeight: 300,
                }}
              >
                5000 token
              </Text>
            </Flex>
            <Flex
              sx={{
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                sx={{
                  color: 'text',
                  fontFamily: 'numbers',
                  fontSize: [0, 1, 2],
                  fontWeight: 300,
                }}
              >
                <Link
                  sx={{
                    color: 'text',
                    textDecoration: 'none',
                  }}
                  to="/wallet/details"
                >
                  5000 <MdKeyboardArrowRight />
                </Link>
              </Text>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Container>
  )
}
