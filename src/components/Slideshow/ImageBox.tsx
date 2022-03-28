import { Flex, Image, Text, Stack, Avatar, Box, TypographyProps, BoxProps } from "@chakra-ui/react";
import { LegacyRef } from "react";
import { Poppins } from "../../utils/consts";

interface ImageBoxProps extends BoxProps {
    img: StaticImageData,//ainda vai mudar para o tipo de objeto q contém o src, width, height, id, nome da imagem, etc
    hasTitle?: boolean,
    hasCreator?: boolean,
    imgRef?: LegacyRef<HTMLImageElement>,
    divRef?: LegacyRef<HTMLDivElement>,
}

export default function ImageBox({ img, hasTitle = true, hasCreator = true, imgRef, divRef, ...rest }: ImageBoxProps){

    const textOverflowStyle : TypographyProps = {        
        textOverflow:"ellipsis",
        whiteSpace:"nowrap"
    }

    return(
        <Stack spacing={2} fontFamily={Poppins} ref={divRef} userSelect='none'>
            <Box maxW={["90%", "492px", "768px", "1044px", "1280px", "1532px"]} position="relative" transition='transform 400ms ease 400ms, opacity 400ms linear 400ms' {...rest}>
                <Image src={img.src} maxH="70vh" ref={imgRef} maxW={["90%", "492px", "768px", "1044px", "1280px", "1532px"]} />

                {hasCreator && <Flex alignItems='center' position="absolute" bottom="2" left="2" borderRadius="full" p="1.5" pr="2" bg="rgba(0,0,0,0.78)" maxW="70%">
                    <Avatar name='Daniel Pelajo' size="xs" border='2px solid purple' />

                    <Text ml={2} color="white" overflow="hidden" {...textOverflowStyle}>Daniel Pelajo</Text>
                </Flex>}
            </Box>

            <Text color="white" noOfLines={2} textAlign="center" userSelect='text' overflow="hidden" opacity={hasTitle? 1:0} {...textOverflowStyle} fontSize={'xl'}>
                Teste de texto
            </Text>
        </Stack>
    )
}