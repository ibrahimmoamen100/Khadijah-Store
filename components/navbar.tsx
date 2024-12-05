import Link from "next/link";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import { categories } from "@/data";

export const revalidate = 0;
const Navbar = async () => {
  return (
    <div className="border-b relative sticky-top top-0 bg-white">
      <div className="  flex h-auto items-center max-w-7xl py-2 m-auto px-2 sm:px-6 lg:px-8">
        <Link className=" flex  gap-x-2  justify-center items-center" href="/">
          <Image
            src="/images/logo40.png"
            alt="متجر المرج "
            className=" "
            title="متجر المرج "
            width={120}
            height={120}
          />
        </Link>
        <div className="flex flex-row justify-around items-center w-full gap-6 md:mr-8 mr-2 relative">
          <MainNav data={categories} />
          <NavbarActions data={categories} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
