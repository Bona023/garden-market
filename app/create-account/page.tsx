"use client";
import FormBtn from "@/components/FormBtn";
import Input from "@/components/input";
import Signboard from "@/components/signboard";
import SocialLogin from "@/components/social-login";
import { PASSWORD_MIN_LENGTH } from "@/lib/contants";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function CreateAccount() {
    const [state, dispatch] = useFormState(createAccount, null);
    return (
        <div className="flex flex-col justify-center py-14 px-6">
            <Signboard />
            <form
                action={dispatch}
                className="flex flex-col gap-6 py-8"
            >
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    errors={state?.fieldErrors.username}
                    required
                />
                <Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    errors={state?.fieldErrors.email}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    minLength={PASSWORD_MIN_LENGTH}
                    errors={state?.fieldErrors.password}
                    required
                />
                <Input
                    name="password_confirm"
                    type="password"
                    placeholder="Confirm Password"
                    minLength={PASSWORD_MIN_LENGTH}
                    errors={state?.fieldErrors.password_confirm}
                    required
                />
                <FormBtn text="Create Account" />
            </form>
            <div className="w-full h-0.5 bg-lineColor mb-6" />
            <SocialLogin />
        </div>
    );
}
