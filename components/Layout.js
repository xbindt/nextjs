import Header from './Header/Header'
import Footer from './Footer/Footer'
import { ThemeProvider } from 'styled-components'
import { theme1, GlobalStyles } from '../theme/globalStyle'
//import '../sass/base.scss'

const Layout = (props) => (
  <div>
    <Header />
    
    <ThemeProvider theme={theme1} >
    
    <main>
      {props.children}
    </main>
    </ThemeProvider>
    <GlobalStyles />
    <Footer />
  </div>
)

export default Layout
