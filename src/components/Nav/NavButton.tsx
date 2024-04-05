import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
type NavButtonProps = {
    children: ReactNode;
    to: string;
};
const NavButton = ({ children, to }: NavButtonProps) => {
    return (
        <NavLink
            className="flex justify-center items-center p-2 text-xl font-bold"
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default NavButton;
