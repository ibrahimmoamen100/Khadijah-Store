import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b relative sticky-top top-0">
      <div className="  flex h-auto items-center max-w-7xl m-auto px-2 sm:px-6 lg:px-8">
        <Link className=" flex  gap-x-2 " href="/">
          <p className="font-bold text-4xl">خديجه ستور </p>
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
