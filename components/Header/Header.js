import Link from 'next/link'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link href="/" prefetch><a>Home</a></Link></li>
            </ul>
        </nav>
        <hr/>
    </header>
)

export default Header
