import { Box, BoxProps } from "@chakra-ui/react";
import { SpacingStrToNumber } from "../../utils/functions";
import Header from "./Header";
import { ConstStyle } from "./Header/HeaderStyle";

interface BaseLayoutProps extends BoxProps{
    children: React.ReactNode,    
}

export default function BaseLayout1({ children, ...rest }: BaseLayoutProps){
    return(<>
        <Header />

        {/* o tamanho do header é de 16, spacing de valor igual a 64px no chakra-ui (n*4) */}
        <Box w='100%' minH={`calc(100vh - ${SpacingStrToNumber(ConstStyle.headerHeight)}px)`} mt={ConstStyle.headerHeight} py='1' as='main' {...rest}>
            {children}
        </Box>        
    </>)
}