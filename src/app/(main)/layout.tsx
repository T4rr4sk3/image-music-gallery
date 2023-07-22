import { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
    return(
        <div>
            <h1> Main Layout </h1>

            {children}
        </div>
    )
}