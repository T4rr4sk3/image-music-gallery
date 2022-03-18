import { NextPage } from "next";
import BaseLayout1 from "../components/common/BaseLayout1";
import Slideshow from "../components/Slideshow";

const ImageShow : NextPage = () => {
    return(
        <BaseLayout1 bg="rgba(0,0,0,0.65)" minH="100vh">
            <Slideshow />
        </BaseLayout1>
    )
}

export default ImageShow