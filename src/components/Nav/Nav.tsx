import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

const Nav = () => {
    return (
        <div className="grid border-b h-[80px]">
            <div dir="rtl" className="container flex gap-5 items-center">
                <NavLink to="/" className="flex justify-center items-center ml-auto text-4xl font-bold text-primary">
                    املاک
                </NavLink>
                <NavButton to="post">ایجاد آگهی</NavButton>
                <NavButton to="login">ورود | ثبت‌نام</NavButton>
            </div>
        </div>
    );
};

export default Nav;
