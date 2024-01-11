import { Outlet, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { useStore } from "./../store/register";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

const Layout = () => {
  const member = useStore((state) => state.member);
  const logoutMember = useStore((state) => state.logoutMember);
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
        {member ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center cursor-pointer">
              <Avatar className="min-h-16 min-w-16 ">
                <AvatarImage className="object-cover" src={member.img} />
              </Avatar>
              <Icon
                path={mdiMenuDown}
                size={1.5}
                className="text-[#2A4B6A] mr-2"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="flex justify-center pt-3">
                <Avatar className="min-h-10 min-w-10">
                  <AvatarImage className="object-cover" src={member.img} />
                </Avatar>
              </div>
              <DropdownMenuLabel>{member.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/signup">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={logoutMember}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/signup">
            <Button className="rounded-3xl text-xl w-[141px] h-12 bg-[#2A4B6A]">
              Sign in
            </Button>
          </Link>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
