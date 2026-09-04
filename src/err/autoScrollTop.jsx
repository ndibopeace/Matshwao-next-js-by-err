"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// this component automatically scrolls to the top of the page on route change
//
export default function AutoScrollTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
