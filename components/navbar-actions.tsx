"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { BsArrowDownShort } from "react-icons/bs";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Category } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavMedia from "./ui/nav-media";

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
  const [showDropdown, setShowDropdown] = useState(false);

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
      <Button
        onClick={() => router.push("/cart")}
        className="hidden items-center rounded-full text-center justify-center text-white sm:flex  bg-main_dark px-4 py-2"
      >
        <span className="ml-2 text-sm font-medium  text-white  rounded-full mx-2">
          {cart.items.length}
        </span>
        <ShoppingBag size={20} color="white" className="text-main_dark" />
      </Button>
      <motion.div
        className="fixed w-[240px] h-[100vh] bg-white top-0 right-0 z-[5001] flex flex-col justify-between items-center overflow-y-scroll overflow-x-hidden"
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
        <div className="p-3 flex flex-col justify-start ga-4 mt-20 w-full h-full">
          <Button
            onClick={() => router.push("/cart")}
            className="flex items-center  rounded-full text-center justify-between text-white  bg-black px-4 py-2 mb-10"
          >
            <div className="flex self-end">
              <ShoppingBag size={20} color="white" />
              <span className="ml-2 text-sm font-medium  text-white  rounded-full mx-2">
                {cart.items.length}
              </span>
            </div>

            <span className="ml-2 text-sm font-light  text-white  rounded-full mx-2">
              {" "}
              مشترياتك
            </span>
          </Button>
          <Link
            onClick={() => setShow(false)}
            href="/cart"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gray-700    flex items-center rounded-full text-center justify-center text-black  bg-transparent border mb-2 border-gray-600 px-4 py-2 "
            )}
          >
            الخدمات والاحكام
          </Link>

          <Button
            onClick={() => setShowDropdown(!showDropdown)}
            className={cn(
              "text-sm font-medium transition-colors hover:text-gray-700   flex items-center rounded-full text-center justify-center text-black  bg-transparent border mb-2 border-gray-600 px-4 py-2 "
            )}
          >
            <BsArrowDownShort
              className={`text-base text-black transition ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
            المنتجات
          </Button>
          <motion.div
            className="flex flex-col bg-slate-200 rounded-lg overflow-hidden relative"
            initial={{ height: -20, padding: "0px" }}
            animate={{
              height: showDropdown ? "auto" : 0,
              padding: showDropdown ? "10px" : 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {routes.map((route) => (
              <Button
                key={route.href}
                onClick={() => setShow(false)}
                className="flex items-center rounded-full text-center justify-center text-xs text-white  bg-transparent border mb-2 border-gray-600 px-4 py-2"
              >
                <Link
                  href={route.href}
                  className={cn(
                    "text-xs font-medium transition-colors hover:text-black  text-center  ",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </motion.div>
          <Link
            onClick={() => setShow(false)}
            href="/cart"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gray-700   flex items-center rounded-full text-center justify-center text-black  bg-transparent border mt-2 border-gray-600 px-4 py-2 "
            )}
          >
            نظام التقسيط
          </Link>
        </div>

        <div className="sticky bottom-0 flex justify-center items-center flex-row gap-5 w-full bg-slate-200  p-8 overflow-hidden ">
          <NavMedia />
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
