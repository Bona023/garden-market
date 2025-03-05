import FormBtn from "@/components/FormBtn";
import Input from "@/components/input";
import Signboard from "@/components/signboard";

export default function SMSLogin() {
    return (
        <div className="flex flex-col gap-8 py-8 px-6">
            <Signboard />
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">SMS Log in</h1>
                <h2 className="text-base">Verify your phone number.</h2>
            </div>
            <form className="flex flex-col gap-3">
                <Input
                    name="phoneNumber"
                    type="number"
                    placeholder="Phone number"
                    required
                    errors={[]}
                />
                <Input
                    name="code"
                    type="number"
                    placeholder="Verification code"
                    required
                    errors={[]}
                />
                <FormBtn text="Verify" />
            </form>
        </div>
    );
}
