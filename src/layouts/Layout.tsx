import { Outlet, Link } from "react-router-dom";
import {
  Avatar,
  AvatarFallback /*, AvatarImage */,
} from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";

const Layout = () => {
  return (
    <>
      <div className="min-h-20 bg-white drop-shadow-lg flex justify-around items-center">
        <Link to="/">
          <Avatar className="min-h-16 min-w-16 ">
            <AvatarFallback className="text-sm font-bold text-white bg-black">
              LOGO
            </AvatarFallback>
          </Avatar>
        </Link>
        <Link to="/">
          <div className="text-xl font-semibold text-[#2A4B6A] underline underline-offset-2">
            HOME
          </div>
        </Link>
        <Link to="/signup">
          <Button className="rounded-3xl text-xl w-[141px] h-12 bg-[#2A4B6A]">
            Sign in
          </Button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
