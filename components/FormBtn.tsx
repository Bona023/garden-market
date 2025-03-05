"use client";
import { useFormStatus } from "react-dom";

interface ButtonProps {
    text: string;
}

export default function FormBtn({ text }: ButtonProps) {
    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            className="basicBtn"
        >
            {pending ? "Loading..." : text}
        </button>
    );
}
