import Link from "next/link";
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between px-4 py-10">
            <div className="my-auto flex flex-col items-center gap-2 *:font-medium py-28">
                <div className="text-9xl">🪴</div>
                <h1 className="text-5xl mt-6">Garden Market</h1>
            </div>
            <div className="flex flex-col items-center gap-3 w-full pb-16">
                <Link
                    href="/create-account"
                    className="basicBtn"
                >
                    시작하기
                </Link>
                <div className="pt-8">이미 계정이 있나요?</div>
                <Link
                    href="login"
                    className="basicBtn"
                >
                    로그인
                </Link>
            </div>
        </div>
    );
}
