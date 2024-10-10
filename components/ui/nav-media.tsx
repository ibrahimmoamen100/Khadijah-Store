import Link from "next/link";
import { BsWhatsapp, BsFacebook, BsTelegram } from "react-icons/bs";

const NavMedia = () => {
  return (
    <>
      <Link
        href="https://chat.whatsapp.com/CKq1Aix2irm5l0HsLwsc2G"
        className="hover:scale-125 transition hover:text-neutral-500"
        target="_blank"
      >
        <BsWhatsapp className="text-3xl text-main_dark" />
      </Link>
      <Link
        href="https://www.facebook.com/groups/838901425069062"
        target="_blank"
        className="hover:scale-125 transition hover:text-neutral-500"
      >
        <BsFacebook className="text-3xl text-main_dark" />
      </Link>
      <Link
        href="/"
        className="hover:scale-125 transition hover:text-neutral-500"
        target="_blank"
      >
        <BsTelegram className="text-3xl text-main_dark" />
      </Link>
    </>
  );
};

export default NavMedia;
