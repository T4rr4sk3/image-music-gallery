import { Flex, Icon, Input } from "@chakra-ui/react";
import { FormEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { Poppins } from "../../../utils/consts";
import Style from "./HeaderStyle";

interface HeaderSearchProps{
    isMobile?: boolean,
}

export default function HeaderSearch({ isMobile }: HeaderSearchProps) {
    const idForm = 'searchHeader'
    const style = (isMobile)? Style.Small.Search : Style.Normal.Search

    function Submit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        alert('pesquisou com sucesso.')
    }    

    return(
        <Flex borderRadius='8' bg='white' w={style.width} alignItems='center' h={style.height}>
            <Input
              id='searchInput'
              fontFamily={Poppins}
              fontSize={style.fontSize}
              form={idForm}
              variant='unstyled'
              w='100%'
              placeholder="Pesquise por uma música ou imagem..."
              px={style.paddingX}
              pt='0.5' 
            />

            <Flex
                as='button'
                type='submit'
                form={idForm}
                borderLeft='1px solid gray'
                bg='gray.300'
                borderRightRadius='8'
                h='100%'             
                w='15%'
                justifyContent='center'
                _hover={{ bg: 'gray.400' }}
                alignItems='center'
            >

                <Icon as={FiSearch} boxSize={style.boxSize} />
            </Flex>

            <form id={idForm} style={{display: 'none'}} onSubmit={Submit} />
        </Flex>
    )
}