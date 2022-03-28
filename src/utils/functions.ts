//transforma um spacing em string do chakra para um number de pixels
export function SpacingStrToNumber(valorChakra: string){    
    try{
        let n = Number(valorChakra);

        return n*4;

    }catch(e){        
        throw e;

    }
}