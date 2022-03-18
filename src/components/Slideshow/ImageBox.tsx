import { Flex, Image, Text, Stack, Avatar, Box, TypographyProps, LayoutProps } from "@chakra-ui/react";
import { Poppins } from "../../utils/consts";

interface ImageBoxProps {
    img: StaticImageData,//ainda vai mudar para o tipo de objeto q contém o src, width, height, id, nome da imagem, etc
}

export default function ImageBox({ img }: ImageBoxProps){

    const textOverflowStyle : TypographyProps = {        
        textOverflow:"ellipsis",
        whiteSpace:"nowrap"
    }
    return(
        <Stack spacing={2} fontFamily={Poppins}>
            <Box maxW={["90%", "492px", "768px", "1044px", "1280px", "1532px"]} position="relative">
                <Image src={img.src} maxH="70vh" />

                <Flex alignItems='center' position="absolute" bottom="2" left="2" borderRadius="full" px="2" py="1.5" bg="rgba(0,0,0,0.78)" maxW="70%">
                    <Avatar name='Daniel Pelajo' size="xs" border='2px solid purple' />

                    <Text ml={2} color="white" overflow="hidden" {...textOverflowStyle}>Daniel Pelajo</Text>
                </Flex>
            </Box>

            <Text color="white" textAlign="center" overflow="hidden" {...textOverflowStyle} fontSize={'xl'}>
                Imagem de teste
            </Text>
        </Stack>
    )
}