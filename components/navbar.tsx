import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import logo from "@/images/2.png";
import Image from "next/image";

export const revalidate = 0;
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b relative sticky-top top-0 bg-white">
      <div className="  flex h-auto items-center max-w-7xl py-2 m-auto px-2 sm:px-6 lg:px-8">
        <Link className=" flex  gap-x-2  justify-center items-center" href="/">
          <Image
            src={logo}
            alt="خديجه ستور"
            className="w-36  "
            title="خديجه ستور"
          />
        </Link>
        <div className="flex flex-row justify-around items-center w-full gap-6 relative">
          <MainNav data={categories} />
          <NavbarActions data={categories} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
