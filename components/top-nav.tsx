import Container from "./ui/container";
import { BsTelephoneFill } from "react-icons/bs";
import NavMedia from "./ui/nav-media";

const TopNav = () => {
  return (
    <div className="bg-main_white">
      <Container>
        <div className="flex h-auto py-3 items-center justify-between px-4">
          <div className="flex flex-row gap-2 hover:scale-125 transition hover:text-neutral-600 cursor-pointer">
            <span className="font-semibold text-main_dark">01024911062</span>
            <BsTelephoneFill className="text-2xl text-main_dark" />
          </div>
          <div className="flex flex-row gap-4">
            <NavMedia />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
