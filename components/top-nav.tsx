import Link from "next/link";
import Container from "./ui/container";
import {
  BsWhatsapp,
  BsFacebook,
  BsTelegram,
  BsTelephoneFill,
} from "react-icons/bs";

const TopNav = () => {
  return (
    <div className="bg-neutral-200">
      <Container>
        <div className="flex h-10 items-center justify-between px-4">
          <div className="flex flex-row gap-2 hover:scale-125 transition hover:text-neutral-600 cursor-pointer">
            <BsTelephoneFill className="text-2xl" />

            <span>201024911062</span>
          </div>
          <div className="flex flex-row gap-4">
            <Link
              href="/"
              className="hover:scale-125 transition hover:text-neutral-500"
            >
              <BsWhatsapp className="text-2xl" />
            </Link>
            <Link
              href="/"
              className="hover:scale-125 transition hover:text-neutral-500"
            >
              <BsFacebook className="text-2xl" />
            </Link>
            <Link
              href="/"
              className="hover:scale-125 transition hover:text-neutral-500"
            >
              <BsTelegram className="text-2xl" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
