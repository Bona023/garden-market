import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
    id?: number;
}

export async function getSession() {
    const session = await getIronSession<SessionContent>(await cookies(), {
        cookieName: "garden-market",
        password: process.env.COOKIE_PASSWORD!,
    });
    return session;
}
