import { Box, BoxProps, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsImage, BsImages } from "react-icons/bs";

interface ImagePortraitProps extends BoxProps{
    id: string,
    src: string,
    hasAlbum?: boolean,
}

export default function ImagePortrait({ id, src, hasAlbum = false, ...rest }: ImagePortraitProps){

    const overlay = React.useRef<any>();

    function setOverlay(aparece: boolean){
        if(overlay && overlay.current) {
            if(aparece) (overlay.current as HTMLDivElement).style.opacity = '1';
            else (overlay.current as HTMLDivElement).style.opacity = '0';
        }
    }

    return(
        <Box {...rest} p='0 8px 8px 8px'>
            <Link href="#">
                <Box position="relative" onMouseEnter={() => { setOverlay(true) }} transition=".3s" onMouseLeave={() => { setOverlay(false) }} borderRadius={4}>
                    <Box bg="linear-gradient(to bottom, transparent, black)" w="100%" position="absolute" cursor="pointer" height="100%" opacity={0} ref={overlay} borderRadius="inherit">
                        <Icon as={hasAlbum? BsImages: BsImage} boxSize="24px" position="absolute" right="16px" bottom="12px" color="white" />
                    </Box>

                    <Image borderRadius="inherit" alt='arte' title='arte em imagem' src={src} boxShadow="2px 2px 12px rgba(0, 0, 0, 0.25)"/>
                </Box>
            </Link>
        </Box>
    )
}