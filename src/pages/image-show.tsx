import { NextPage } from "next";
import BaseLayout1 from "../components/common/BaseLayout1";
import Slideshow from "../components/Slideshow";

const ImageShow : NextPage = () => {
    return(
        <BaseLayout1 bg="gray.800" overflowX="hidden">
            <Slideshow />
        </BaseLayout1>
    )
}

export default ImageShow