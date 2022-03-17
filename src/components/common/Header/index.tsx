import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { BsImages, BsHeadphones } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { Poppins, Shadows } from "../../../utils/consts"
import { useBreakpointContext } from "../../contexts/BreakpointContext"
import HeaderSearch from "./HeaderSearch"
import Style, { ConstStyle } from "./HeaderStyle"

export default function Header(){
    
    const logged = false;
    const { isMobile, isWide } = useBreakpointContext();
    const style = (isMobile)? Style.Small.Header : Style.Normal.Header;

    return(
        <Flex position='fixed' as='header' top='0' w='100%' h={ConstStyle.headerHeight} zIndex='100' justifyContent='space-between' alignItems='center' bg='purple.500' px={style.PaddingX}>
            <HStack spacing={style.LogoSpacing}>
                <Box h='fit-content'>
                    <Icon as={BsImages} boxSize={style.IconImgBoxSize} position='absolute' mt={style.IconImgMarginTop} ml={style.IconImgMarginLeft} color='black'/>
                    <Icon as={BsHeadphones} boxSize={style.IconHeadphoneBoxSize} color='gray.300'/>
                </Box>

                <HeaderSearch isMobile={isMobile}/>
            </HStack>

            <HStack spacing={(isWide)?4:2}>
                {!!!isMobile && <Text fontFamily={Shadows} ml='2' fontWeight='bold' color='gray.50' fontSize={isWide?'24px':'16px'}>IMG - Image Music Gallery</Text>}

                {(logged)?
                    <Avatar name='Daniel Pelajo' border='2px solid purple' />
                :
                    <Flex px={style.SignInPaddingX} borderRadius={24} py={style.SignInPaddingY} color='black' bg='white' boxShadow='0px 4px 16px rgba(0, 0, 0, 0.2)'>
                        <Icon as={FaUserCircle} boxSize='24px' />
                        {!!!isMobile && <Text ml='2' fontFamily={Poppins}>Entrar</Text>}
                    </Flex>
                }
            </HStack>
        </Flex>
    )
}