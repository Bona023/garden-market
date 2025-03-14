"use client";
import FormBtn from "@/components/FormBtn";
import Input from "@/components/input";
import Signboard from "@/components/signboard";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { EmailLogIn } from "./action";

export default function EmailLogin() {
    const [state, dispatch] = useFormState(EmailLogIn, null);
    return (
        <div className="flex flex-col justify-center py-14 px-6">
            <Signboard />
            <form
                action={dispatch}
                className="flex flex-col gap-3 py-10"
            >
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
                    errors={state?.fieldErrors.password}
                    required
                />
                <div className="h-4"></div>
                <FormBtn text="Log In" />
            </form>
            <div className="w-full h-0.5 bg-lineColor mb-6" />
            <SocialLogin />
        </div>
    );
}
