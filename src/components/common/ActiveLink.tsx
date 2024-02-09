"use client";

import cn from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

type ActiveLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement> & { activeClassName?: string };

export default function ActiveLink({
  href,
  className,
  activeClassName,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(className, pathname === href ? activeClassName : "")}
      {...props}
    />
  );
}
