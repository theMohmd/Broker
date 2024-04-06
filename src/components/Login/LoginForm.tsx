import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "components/ui/Loader";
type FormFields = {
    email: string;
    password: string;
};
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
    };
    return (
        <form
            className="flex flex-col gap-2 py-16 px-5 bg-white rounded-md border border-primary"
            onSubmit={handleSubmit(onSubmit)}
            action=""
        >
            <input
                {...register("email", {
                    required: "ایمیل نمی‌تواند خالی باشد",
                    pattern: {
                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                        message: "ایمیل معتبر نیست",
                    },
                })}
                className="Input"
                type="text"
                placeholder="ایمیل"
            />
            {errors.email && (
                <p className="text-red-700 text-right">{errors.email.message}</p>
            )}
            <input
                {...register("password", {
                    required: "کلمه عبور نمی‌تواند خالی باشد",

                    minLength: {
                        value: 8,
                        message: "کلمه عبور حداقل باید ۸ کاراکتر داشته باشد",
                    },
                })}
                className="Input"
                type="password"
                placeholder="کلمه عبور"
            />
            {errors.password && (
                <p className="text-red-700 text-right">{errors.password.message}</p>
            )}
            <button
                type="submit"
                className="flex justify-center p-2 text-xl text-white rounded-md bg-primary"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <div className="flex items-center w-10 h-7">
                        <Loader />
                    </div>
                ) : (
                    "ورود"
                )}
            </button>
        </form>
    );
};

export default LoginForm;
