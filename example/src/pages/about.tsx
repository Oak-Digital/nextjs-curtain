import Link from "next/link";
import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    return (
        <main style={{
            minHeight: '100vh',
            backgroundColor: '#11bb11',
        }}>
            <Link href="/">
                Home
            </Link>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                You are on page {router.asPath}
            </div>
        </main>
    )
}
