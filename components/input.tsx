import { InputHTMLAttributes } from "react";
interface InputProps {
    name: string;
    errors?: string[];
}
export default function Input({ name, errors = [], ...rest }: InputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <input
                className="bg-transparent rounded-full w-full h-10 pl-5 focus:outline-none ring-1 focus:ring-2 ring-inputColor focus:ring-hoverPoint border-none placeholder:text-inputColor"
                name={name}
                {...rest}
            />
            {errors.map((error, index) => (
                <span
                    key={index}
                    className="text-warning font-medium"
                >
                    {error}
                </span>
            ))}
        </div>
    );
}
