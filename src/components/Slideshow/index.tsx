import { Flex, Icon, IconProps } from "@chakra-ui/react";
import ImageBox from "./ImageBox";
import img from "../../assets/teste1.jpg"
import img2 from "../../assets/teste2.jpg"
import img3 from "../../assets/teste3.jpg"
import { ImageBoxWidthBreakpoints } from "../../utils/consts";
import { createRef, CSSProperties, useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IconType } from "react-icons";

interface baseIconProps extends IconProps{
    as?: IconType
}

export default function Slideshow(){
    const [index, setIndex] = useState(0),
        [translatePixels, setTranslate] = useState(0),
        actualDivRef = createRef<HTMLImageElement>(), 
        previousDivRef = createRef<HTMLDivElement>()
    const imgs = [img2, img, img3] //imagens vão vir como props.    

    const active: CSSProperties = { opacity: 1, }, notActive: CSSProperties = { opacity: 0.5, transform: 'scale(.75)' }    

    const BaseIcon = ({ as, ...rest}: baseIconProps) => { return <Icon position="absolute" as={as} top="35%" alignSelf='center' color="white" boxSize={14} _hover={{ cursor: 'pointer', background: 'black' }} {...rest}/> }

    function goBack(){
        if(index > 0){
            let img = previousDivRef.current //pega a div da imagem anterior
            if(img) //o compilador não entendeu que eu vejo esse if antes de executar o set, portanto tive que colocar no set também.
                setTranslate( prevT => { if(img) return prevT + img.offsetWidth; else return prevT })

            setIndex(prevIndex => { return --prevIndex })            
        }
    }

    function goNext(){
        if(index < imgs.length - 1){
            let img = actualDivRef.current  //pega a div da imagem atual
            if(img) //o compilador não entendeu que eu vejo esse if antes de executar o set, portanto tive que colocar no set também.
                setTranslate( prevT => { if(img) return prevT - img.offsetWidth; else return prevT })            

            setIndex((prevIndex) => { return ++prevIndex })
        }
    }

    useEffect(() => {}, [])

    return(
        <Flex mx='auto' maxW={ImageBoxWidthBreakpoints} w={actualDivRef.current?.offsetWidth} alignItems="center" mt="6">
            <Flex id="slider" transition='transform 500ms ease-in-out' transform={`translateX(${translatePixels}px)`} position="relative">
                {imgs.map((img, i) => { 
                    return <ImageBox
                      img={img}
                      flex="1"
                      style={(index==i ? active: notActive)}
                      minW={actualDivRef.current?.offsetWidth}
                      key={i}
                      hasCreator={index==i}
                      hasTitle={index==i}
                      divRef={i == (index-1) ? previousDivRef :undefined}
                      imgRef={index==i ? actualDivRef: undefined}                   
                    /> 
                })}
            </Flex>

            <BaseIcon left='0' as={MdKeyboardArrowLeft} opacity={index==0? 0.4 : 1} borderRightRadius={8} onClick={goBack} />

            <BaseIcon right='0' as={MdKeyboardArrowRight} opacity={index==imgs.length-1? 0.4 : 1} borderLeftRadius={8} onClick={goNext}/>

            <button style={{position: 'absolute', left: '0', top:'20%', color:'purple', padding: '12px'}} onClick={() => {alert(actualDivRef.current?.offsetWidth)}}>Teste</button>
        </Flex>
    )
}