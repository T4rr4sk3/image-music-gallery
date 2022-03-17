import { Stack, Text } from "@chakra-ui/react";
import { Shadows } from "../../../utils/consts";
import { useBreakpointContext } from "../../contexts/BreakpointContext";
import { ConstStyle } from "./CapaStyle";
import MiniGallery from "./MiniGallery";

export default function Capa(){

    const { isMobile } = useBreakpointContext();

    const style = (isMobile)? ConstStyle.Small : ConstStyle.Normal

    return(
        <Stack w='100%' justifyContent="center" alignItems='center' pt={style.paddingTop} spacing={6}>
            <Text w={style.width} textAlign='center' fontFamily={Shadows} fontSize={style.fontSize} fontWeight='bold'>
                Compartilhe sua arte e a música inspiracional, onde ambas são correlacionadas nesta galeria.
            </Text>

            <MiniGallery />

            {/* Botar slideshow aqui tipo https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow e deixar dinâmico pra botar vários */}
        </Stack>
    )
}