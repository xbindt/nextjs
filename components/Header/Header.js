import Link from 'next/link'
import "./header.scss"

const Header = () => (
    <div>
        <Link href="/">
          <a className="example">Home</a>
        </Link>
    </div>
)

export default Header
