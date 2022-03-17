interface CapaStyleProps{
    Normal: CapaStyle,
    Small: CapaStyle,
}

interface CapaStyle{
    fontSize: string,
    width: string,
    paddingTop: string,
}

export const ConstStyle : CapaStyleProps = {
    Normal:{
        fontSize: '4xl',
        width: '512px',
        paddingTop: '8',
    },

    Small:{
        fontSize: '2xl',
        width: '296px',
        paddingTop: '4',
    }
}