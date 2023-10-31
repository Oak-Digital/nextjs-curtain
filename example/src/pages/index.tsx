import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <main style={{
            minHeight: '100vh',
            backgroundColor: '#111111',
            color: '#ffffff'
        }}>
            <Link href="/about">
                About
            </Link>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                You are on page {router.asPath}
            </div>
        </main>
    )
}
