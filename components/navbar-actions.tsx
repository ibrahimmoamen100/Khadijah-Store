"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Category } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MainNavProps {
  data: Category[];
}

const NavbarActions: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex gap-x-4 sm:ml-0  items-center ml-auto">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2 sm:hidden "
        onClick={() => setShow(true)}
      >
        <Menu size={20} color="white" />
      </Button>
      <motion.div
        className="fixed w-[240px] h-[100vh] bg-white top-0 right-0 z-[5001]"
        initial={{ x: "100%" }}
        animate={{ x: show ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <Button
          className="flex items-center  bg-black px-4 py-2 sm:hidden top-5 right-5 absolute "
          onClick={() => setShow(false)}
        >
          <X size={20} color="white" />
        </Button>
        <div className="flex flex-col justify-center  ga-4 mt-20">
          <Button
            onClick={() => router.push("/cart")}
            className="flex items-center rounded-full text-center  bg-black px-4 py-2"
          >
            <ShoppingBag size={20} color="white" />
            <span className="ml-2 text-sm font-medium text-white">
              {cart.items.length}
            </span>
          </Button>

          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black p-2 text-center  ",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </motion.div>
      <div
        onClick={() => setShow(false)}
        className={`w-[100vw] h-[100vh] bg-black opacity-50 fixed transition top-0 right-0 z-[5000] ${
          show ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default NavbarActions;
