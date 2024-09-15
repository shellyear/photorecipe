import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image src="/recipe.svg" alt="logo" width={32} height={32} />
            <span className="font-bold text-lg ml-2">PhotoRecipe</span>
        </Link>
    )
}

export default Logo;