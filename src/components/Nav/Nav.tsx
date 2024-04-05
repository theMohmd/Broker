import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="grid border-b h-[80px]">
            <div dir="rtl" className="container flex item-center">
                <p className="flex justify-center items-center font-bold text-5xl text-primary">
                    املاک
                </p>
                <NavLink to="/login">ورود | ثبت‌نام</NavLink>
            </div>
        </div>
    );
};

export default Nav;
