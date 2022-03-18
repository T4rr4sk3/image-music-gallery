import { Flex } from "@chakra-ui/react";
import ImageBox from "./ImageBox";

import img from "../../assets/teste1.jpg"

export default function Slideshow(){
    return(
        <Flex>
            <ImageBox img={img}/>
        </Flex>
    )
}