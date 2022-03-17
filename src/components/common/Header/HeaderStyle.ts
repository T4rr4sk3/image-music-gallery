//#region interfaces
interface HeaderStyleProps{
    Small: GlobalStyle,
    Normal: GlobalStyle,
} 

interface GlobalStyle{
    Header: HeaderStyle,
    Search: SearchStyle,  
}

interface HeaderStyle{
    IconImgMarginTop: string,
    IconImgMarginLeft: string,
    IconImgBoxSize: string,
    IconHeadphoneBoxSize: string,
    SignInPaddingX: string,
    SignInPaddingY: string,
    PaddingX: string,
    LogoSpacing: string,
}

interface SearchStyle{
    width: string,
    fontSize: string,
    paddingX: string,
    boxSize: string,
    height: string,
}

interface HeaderConstProps{
    headerHeight: string,
}
//#endregion

//#region variables
const Style: HeaderStyleProps = { 
    Small:{
        Header:{            
            IconHeadphoneBoxSize: '10',
            IconImgBoxSize: '4',
            IconImgMarginTop: '5',
            IconImgMarginLeft: '3',
            SignInPaddingX: '1',
            SignInPaddingY: '1',
            PaddingX: '1',
            LogoSpacing: '1',
        },

        Search:{
            width: '268px',
            fontSize: '14',
            paddingX: '1.5',
            boxSize: '20px',
            height: '36px',
        }
    },

    Normal:{
        Header:{
            IconHeadphoneBoxSize: '14',
            IconImgBoxSize: '6',
            IconImgMarginTop: '6',
            IconImgMarginLeft: '4',
            SignInPaddingX: '3',
            SignInPaddingY: '2',
            PaddingX: '4',
            LogoSpacing: '4',
        },

        Search:{
            width: '392px',
            fontSize: '16',
            paddingX: '3',
            boxSize: '24px',
            height: '40px',
        }
    }
}

export const ConstStyle: HeaderConstProps = {
    headerHeight: '16',
}
//#endregion

export default Style;