import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "components/ui/Loader";
type FormFields = {
    name: string;
    email: string;
    password: string;
    password2: string;
};
const SignupForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve)=>setTimeout(resolve,1000))
        console.log(data);
    };
    return (
        <form
            className="flex flex-col border border-primary gap-2 px-5 py-16 bg-white rounded-md"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                {...register("name", {
                    required: "نام کاربری نمی‌تواند خالی باشد",
                })}
                className="Input"
                type="text"
                placeholder="نام کاربری"
            />
            {errors.name && (
                <p className="text-red-700 text-right">{errors.name.message}</p>
            )}
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
                <p className="text-red-700 text-right">
                    {errors.email.message}
                </p>
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
                placeholder="کلمه‌عبور"
            />
            {errors.password && (
                <p className="text-red-700 text-right">
                    {errors.password.message}
                </p>
            )}
            <input
                {...register("password2", {
                    required: "کلمه عبور نمی‌تواند خالی باشد",
                    validate: (value) => {
                        if (value === getValues("password")) return true;
                        else return "کلمه‌های عبور تطابق ندارند";
                    },
                })}
                className="Input"
                type="password"
                placeholder="کلمه‌عبور"
            />
            {errors.password2 && (
                <p className="text-red-700 text-right">
                    {errors.password2.message}
                </p>
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
                    "ثبت‌نام"
                )}
            </button>
        </form>
    );
};

export default SignupForm;
