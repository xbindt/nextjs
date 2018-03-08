import Link from 'next/link'
import css from "./header.scss"

const Header = () => (
    <div>
        <Link href="/">
          <a className={css.example}>Home</a>
        </Link>
    </div>
)

export default Header
