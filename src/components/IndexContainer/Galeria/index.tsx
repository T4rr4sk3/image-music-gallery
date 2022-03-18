import { Box, BoxProps, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Poppins, WidthBreakpoints } from "../../../utils/consts";
import React, { useEffect, useMemo, useState } from "react";
import img1 from '../../../assets/teste1.jpg'
import img2 from '../../../assets/teste2.jpg'
import img3 from '../../../assets/teste3.jpg'
import img4 from '../../../assets/teste4.jpg'
import img5 from '../../../assets/teste5.jpg'
import img6 from '../../../assets/teste7.jpg'
import img7 from '../../../assets/teste6.jpg'
import img8 from '../../../assets/teste9.jpg'
import img9 from  '../../../assets/teste8.jpg'
import img10 from '../../../assets/teste10.jpg'
import ImagePortrait from "./ImagePortrait";

export default function Galeria(){
    const numCols = useBreakpointValue({base: 1, sm: 1, md: 2, lg: 3, xl: 4, '2xl': 5, '3xl': 6})    
    const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ] //simulando o retorno de uma api com o array de imagens
    const ref = React.useRef<any>(null);
    const memoizedPutImages = useMemo(()=> { return putImages() }, [ref.current, numCols])    
    const [DivStyle, setDivStyle] = useState({} as React.CSSProperties)

    useEffect(() => { setDivStyle({
        columnGap: 0,
        WebkitColumnGap: 0,
        MozColumnGap: 0,
        rowGap: 0,        
        columnCount: numCols,
        WebkitColumnCount: numCols,
        MozColumnCount: numCols,
      })}, [numCols])

    function putImages(){
        let imgs : JSX.Element[] = [];
        
        if(numCols && ref && ref.current){            
            let div = ref.current,            
            width = div.offsetWidth/numCols;
            
            for(let i = 0; i < images.length; i++){                                                    

                let style: BoxProps = {                     
                    w: `${width}px`,
                    role: 'listitem',
                    display: 'inline-block'
                }

                imgs.push(<ImagePortrait id={''+i} src={images[i].src} key={i} {...style} hasAlbum={i==2 || i==6 || i == 9}/> )//hasAlbum usado só para teste de visualização
            }            
        }        

        return imgs;
    }    

    return(
        <Stack py='6' px='4'>            
            <Flex w="100%" alignItems="center" flexDir="column" py="4">        

                <Text fontSize='4xl' mb="4" textTransform='uppercase' fontFamily={Poppins}>Últimas adicionadas</Text>
            
                <Box
                  id="image-portraits"
                  w={WidthBreakpoints}
                  style={DivStyle}
                  role="list"
                  height="max-content"
                  ref={ref}>
                    {memoizedPutImages}                    
                </Box>
            </Flex>
        </Stack>
    )
}

