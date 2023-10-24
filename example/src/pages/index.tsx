import Link from "next/link";

export default function Home() {
    return (
        <main style={{
            minHeight: '100vh',
            backgroundColor: '#111111',
        }}>
            <Link href="/about">
                About
            </Link>
        </main>
    )
}
