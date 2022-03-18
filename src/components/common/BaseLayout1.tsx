import { Box, BoxProps } from "@chakra-ui/react";
import Header from "./Header";
import { ConstStyle } from "./Header/HeaderStyle";

interface BaseLayoutProps extends BoxProps{
    children: React.ReactNode,    
}

export default function BaseLayout1({ children, ...rest }: BaseLayoutProps){
    return(<>
        <Header />

        <Box w='100%' mt={ConstStyle.headerHeight} py='1' as='main' {...rest}>
            {children}
        </Box>        
    </>)
}