import FormBtn from "@/components/FormBtn";
import Input from "@/components/input";
import Signboard from "@/components/signboard";
import SocialLogin from "@/components/social-login";

export default function EmailLogin() {
    return (
        <div className="flex flex-col justify-center py-14 px-6">
            <Signboard />
            <form className="flex flex-col gap-3 py-10">
                <Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    errors={[]}
                    required
                />
                <Input
                    name="pw"
                    type="password"
                    placeholder="Password"
                    errors={[]}
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
