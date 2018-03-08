import Header from './Header/Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  backgroundColor: '#e6e6e9'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout