import Link from 'next/link'
import './header.scss'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link href="/" prefetch><a>Home</a></Link></li>
                <li><Link href="/usefullinks" prefetch><a>Handige links</a></Link></li>
                <li><Link href="/ns"><a>Voorbeeld: NS</a></Link></li>
            </ul>
        </nav>
        <hr/>
    </header>
)

export default Header
