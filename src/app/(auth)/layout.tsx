import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
    return(
        <div>
            <h1> Layout Authentication </h1>
            
            {children}
        </div>
    )
}