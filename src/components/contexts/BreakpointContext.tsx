import React, { createContext, useContext } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

interface BreakpointReturn{
    isMobile: boolean,
    isWide: boolean,
}

const BreakpointContext = createContext({} as BreakpointReturn);

export function BreakpointContextProvider({ children }: { children: React.ReactNode}){

    const isMobile = useBreakpointValue({ base: true, md: false})    
    const isWide = useBreakpointValue({base: false, xl: true})

    const obj: BreakpointReturn = {
        isMobile: isMobile || false,
        isWide: isWide || true,
    }

    return (
        <BreakpointContext.Provider value={obj}>
            {children}
        </BreakpointContext.Provider>
    )
}

export const useBreakpointContext = () => useContext(BreakpointContext);