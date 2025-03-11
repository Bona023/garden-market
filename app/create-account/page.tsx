import FormBtn from "@/components/FormBtn";
import Input from "@/components/input";
import Signboard from "@/components/signboard";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
    return (
        <div className="flex flex-col justify-center py-14 px-6">
            <Signboard />
            <form className="flex flex-col gap-6 py-8">
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    errors={[]}
                    required
                />
                <Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    errors={[]}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    errors={[]}
                    required
                />
                <Input
                    name="password_confirm"
                    type="password"
                    placeholder="Confirm Password"
                    errors={[]}
                    required
                />
                <FormBtn text="Create Account" />
            </form>
            <div className="w-full h-0.5 bg-lineColor mb-6" />
            <SocialLogin />
        </div>
    );
}
