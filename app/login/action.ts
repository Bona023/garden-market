"use server";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const checkEmailExists = async (email: string) => {
    const user = await db.user.findUnique({
        where: { email },
        select: { id: true },
    });
    return Boolean(user);
};

const formSchema = z.object({
    email: z.string().email().refine(checkEmailExists, "An account with this email does not exist."),
    password: z.string(),
});

// todo : any 타입 임시 사용중 나중에 고칠 것!!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function EmailLogIn(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };
    const result = await formSchema.spa(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        const user = await db.user.findUnique({
            where: { email: result.data.email },
            select: {
                id: true,
                password: true,
            },
        });
        const pwOk = await bcrypt.compare(result.data.password, user!.password ?? "xxxx");
        if (pwOk) {
            const session = await getSession();
            session.id = user!.id;
            await session.save();
            redirect("/profile");
        } else {
            return {
                fieldErrors: {
                    password: ["Wrong Password"],
                    email: [],
                },
            };
        }
    }
}
