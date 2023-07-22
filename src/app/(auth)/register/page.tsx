import Image from "next/image";

export default function Register() {
    return(
        <div className="text-body-text bg-header">
            <h1> REGISTER </h1>

            <Image
              src="/logo.svg"
              alt="IMG Logo"
              width={100}
              height={24}
            />
        </div>
    )
}