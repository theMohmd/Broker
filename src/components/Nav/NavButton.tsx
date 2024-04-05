import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
type NavButtonProps = {
    children: ReactNode;
    to: string;
};
const NavButton = ({ children, to }: NavButtonProps) => {
    return (
        <NavLink
            style={({ isActive }) => {
                return {
                    color: isActive ? "black" : "",
                };
            }}
            className="flex justify-center items-center p-2 text-sm md:text-xl font-bold text-gray-600 hover:text-black"
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default NavButton;
