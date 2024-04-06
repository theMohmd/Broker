import { useState } from "react";
import LoginForm from "src/components/Login/LoginForm";

const Login = () => {
    const [mode, setmode] = useState<"login" | "signup">("login");
    return (
        <div className="flex justify-center pt-10 h-full p-5">
            <div className="flex flex-col justify-center w-full h-full max-w-[600px] max-h-[600px]">
                <div className="flex justify-center gap-5 ">
                    <button onClick={() => setmode("signup")}>
                        <p
                            className={`mb-2 text-2xl text-center ${
                                mode === "signup"
                                    ? "text-primary font-bold"
                                    : "text-neutral-400"
                            }  `}
                        >
                            ثبت‌نام
                        </p>
                    </button>

                    <button onClick={() => setmode("login")}>
                        <p
                            className={`mb-2 text-2xl text-center ${
                                mode === "login"
                                    ? "text-primary font-bold"
                                    : "text-neutral-400"
                            }  `}
                        >
                            ورود
                        </p>
                    </button>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
