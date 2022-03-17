import { Grid } from "@chakra-ui/react";

interface GridImagesProps{
    columns?: number,
    children?: React.ReactNode,
}

export default function GridImages({ columns, children }: GridImagesProps){
    return(
        <Grid templateColumns={`repeat(${columns}, 1fr)`} templateRows="auto" gap='4'>
            {children}    
        </Grid>
    )
}