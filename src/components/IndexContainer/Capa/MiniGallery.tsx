import { Box, Flex, Icon, Stack, Image } from "@chakra-ui/react"
import { BsFillPlayFill } from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Image1 from '../../../assets/capa-drawing.jpg'
import Image2 from '../../../assets/capa-drawing2.jpg'
import Image3 from '../../../assets/capa-drawing3.jpg'

export default function MiniGallery(){
    const shadow = '-2px 4px 16px rgba(0, 0, 0, .3)'

    return(
        <Stack w='240px' spacing={0} boxShadow={shadow}>
            <Box position='relative'>
                {/* Primeira imagem fake */}
                <Flex opacity={.3} position='absolute' top='5%' left='-6' w='6' h='90%' bgImage={Image2.src} bgPos='left' bgSize='cover' alignItems='center' boxShadow={shadow} />                    
                
                <Box position='relative'>
                    <Icon as={MdKeyboardArrowLeft} boxSize='6' pos='absolute' left='-6' top='45%'/>

                    <Image src={Image1.src} />
                    
                    <Icon as={MdKeyboardArrowRight} boxSize='6' pos='absolute' right='-6' top='45%'/>
                </Box>
                

                {/* Segunda imagem fake */}               
                <Flex opacity={.3} position='absolute' top='5%' right='-6' w='6' h='90%' bgImage={Image3.src} bgPos='right' bgSize='cover' alignItems='center' boxShadow={shadow} />
            </Box>

            <Flex w='100%' h='24px' bg='purple.600' justifyContent='center' alignItems='center'>
                <Icon as={BsFillPlayFill} p='0.5' borderRadius='50%' color='black' border='1px solid black' mr='1.5'/>
                <hr style={{ background:'linear-gradient(to right, white 0%, white 15%, #AAA 15%)', height:'3px', width:'80%', borderRadius:'20px', margin: 0, border: 'none' }} />                
            </Flex>
        </Stack>
    )
}