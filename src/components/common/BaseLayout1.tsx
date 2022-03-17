import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { ConstStyle } from "./Header/HeaderStyle";

interface BaseLayoutProps{
    children: React.ReactNode
}

export default function BaseLayout1({ children }: BaseLayoutProps){
    return(<>
        <Header />

        <Box w='100%' mt={ConstStyle.headerHeight} py='1' as='main'>
            {children}
        </Box>        
    </>)
}