"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/contants";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const comparePassword = ({ password, password_confirm }: { password: string; password_confirm: string }) => password === password_confirm;

const checkUniqueUsername = async (username: string) => {
    const user = await db.user.findUnique({
        where: { username },
        select: {
            id: true,
        },
    });
    return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: { email },
        select: {
            id: true,
        },
    });
    return !Boolean(user);
};

const formSchema = z
    .object({
        username: z.string().trim().refine(checkUniqueUsername, "This username is already taken."),
        email: z.string().email().refine(checkUniqueEmail, "This email is already taken."),
        password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
        password_confirm: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    })
    .refine(comparePassword, { message: "Both password should be same", path: ["password_confirm"] });

// todo : any 타입 임시 사용중 나중에 고칠 것!!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createAccount(prevState: any, formData: FormData) {
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirm: formData.get("password_confirm"),
    };
    const result = await formSchema.spa(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        const hashedPw = await bcrypt.hash(result.data.password, 12);
        const user = await db.user.create({
            data: {
                username: result.data.username,
                email: result.data.email,
                password: hashedPw,
            },
            select: {
                id: true,
            },
        });
        const session = await getSession();
        session.id = user!.id;
        await session.save();
        redirect("/profile");
    }
}
