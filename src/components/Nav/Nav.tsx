import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

const Nav = () => {
    return (
        <div className="grid border-b h-[60px] md:h-[80px]">
            <div dir="rtl" className="container md:gap-2 flex items-center">
                <NavLink to="/" className="flex justify-center items-center ml-auto text-xl font-bold md:text-4xl text-primary">
                    املاک
                </NavLink>
                <NavButton to="post">ایجاد آگهی</NavButton>
                <NavButton to="login">ورود | ثبت‌نام</NavButton>
            </div>
        </div>
    );
};

export default Nav;
