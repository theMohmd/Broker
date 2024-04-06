import { SubmitHandler, useForm } from "react-hook-form";
type FormFields = {
    email: string;
    password: string;
};
const LoginForm = () => {
    const { register, handleSubmit } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    };
    return (
        <form
            className="flex flex-col border border-primary gap-2 px-5 py-16 bg-white rounded-md"
            onSubmit={handleSubmit(onSubmit)}
            action=""
            dir="rtl"
        >
            <input
                {...register("email")}
                className="Input"
                type="text"
                placeholder="ایمیل"
            />
            <input
                {...register("password")}
                className="Input"
                type="text"
                placeholder="رمز‌عبور"
            />
            <button
                type="submit"
                className="p-2 text-white rounded-md bg-primary"
            >
                ورود
            </button>
        </form>
    );
};

export default LoginForm;
