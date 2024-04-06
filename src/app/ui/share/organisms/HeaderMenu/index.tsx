import Image from "next/image";
import HeaderNavigation from "@/app/ui/header/HeaderNavigation";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <header className="shadow-general bg-white sticky top-0  ">
      <div className="w-[85%] mx-auto flex justify-between items-center h-16">
        <Link href={"/"}>
          <Image
            src={"/AsegurameLogo.svg"}
            width={170}
            height={50}
            alt="Logo Asegurame"
            priority
          />
        </Link>

        <HeaderNavigation />
      </div>
    </header>
  );
}
