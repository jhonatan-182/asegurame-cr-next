"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkNavigationProps = {
  url: string;
  text: string;
  styleButton: boolean;
};

export default function LinkNavigation({
  text,
  url,
  styleButton,
}: LinkNavigationProps) {
  const pathName = usePathname();

  return (
    <Link
      href={url}
      className={`${
        styleButton
          ? "bg-primary_2 text-white rounded-full py-2 w-[142px] text-center"
          : ""
      } ${pathName === url && !styleButton ? "text-primary_2" : ""}`}
    >
      {text}
    </Link>
  );
}
