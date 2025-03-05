interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    errors: string[];
}
export default function Input({ name, type, placeholder, required, errors }: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <input
                className="bg-transparent rounded-full w-full h-10 pl-5 focus:outline-none ring-1 focus:ring-2 ring-inputColor focus:ring-hoverPoint border-none placeholder:text-inputColor"
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
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
