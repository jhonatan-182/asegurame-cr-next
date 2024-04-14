import HeaderNavigation from "@/components/header/HeaderNavigation";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <header className="shadow-general bg-white sticky top-0  ">
      <div className="w-[85%] mx-auto flex justify-between items-center h-16">
        <Link href={"/"}>
          <Image
            src={"/images/AsegurameLogo.svg"}
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
