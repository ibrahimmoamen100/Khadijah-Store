import Container from "./ui/container";
import { BsTelephoneFill } from "react-icons/bs";
import NavMedia from "./ui/nav-media";

const TopNav = () => {
  return (
    <div className="bg-[#dcddd8]">
      <Container>
        <div className="flex h-auto py-3 items-center justify-between px-4">
          <div className="flex flex-row gap-2 hover:scale-125 transition hover:text-neutral-600 cursor-pointer">
            <BsTelephoneFill className="text-2xl" />

            <span>201024911062</span>
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
