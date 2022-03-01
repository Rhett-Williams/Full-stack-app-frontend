
import { Box, Container, Button, Spacer, Text, Flex, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import '../CSS/landingpage.css'
import Pricing from './productcard.js'

function Block1() {
    return (
<div>
            <Box class="landingpage" h="700px" bgGradient='linear(to-r, green.200, blue.500)'>
                <Container class="landingcontainer">

                    <Flex class="wrapper">
                        <Box p='4'>
                            <img src="https://ucarecdn.com/7304a42f-950d-42d2-a0af-ef8372a561de/" class="img-fluid" alt="lplogo"/>
                        </Box>
                        <Spacer />
                        <Box p='4'>
                            <Text fontSize='50px' color='white'>
                            Business
                            </Text>
                            <Text fontSize='20px' color='white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            </Text>
                        </Box>
                        </Flex>
                        <Button ml='50%' colorScheme='teal' variant='solid' >
                            Buy Now
                        </Button>

                </Container>
            </Box>
            <Box class="lpb2" w="100%" h="1000px">
            <Container class="landingcontainer" w="100%">
                <Pricing />
                <Slider aria-label='slider-ex-4' defaultValue={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='tomato' />
                    </SliderTrack>
                    <SliderThumb boxSize={6}>
                        <Box color='tomato' />
                    </SliderThumb>
                    </Slider>
                </Container>
            </Box>
            </div>
    )
}

export default Block1;