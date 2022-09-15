import Link from 'next/link'

export default function IndexPage() {
    return (
        <div>
            Hello World.{' '}
            <Link href="/_about">
                <a>About</a>
            </Link>
        </div>
    )
}