import Header from './Header/Header'
import Footer from './Footer/Footer'
import '../sass/base.scss'

const Layout = (props) => (
  <div>
    <Header />
    <main>
    {props.children}
    </main>
    <Footer />
  </div>
)

export default Layout
