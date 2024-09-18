import Link from "next/link";
import { BsWhatsapp, BsFacebook, BsTelegram } from "react-icons/bs";

const NavMedia = () => {
  return (
    <>
      <Link
        href="/"
        className="hover:scale-125 transition hover:text-neutral-500"
      >
        <BsWhatsapp className="text-3xl text-main_dark" />
      </Link>
      <Link
        href="/"
        className="hover:scale-125 transition hover:text-neutral-500"
      >
        <BsFacebook className="text-3xl text-main_dark" />
      </Link>
      <Link
        href="/"
        className="hover:scale-125 transition hover:text-neutral-500"
      >
        <BsTelegram className="text-3xl text-main_dark" />
      </Link>
    </>
  );
};

export default NavMedia;
