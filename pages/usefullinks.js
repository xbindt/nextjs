
import Layout from '../components/Layout.js'
import react from 'react'

class UseFullLinks extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.title = 'Handige links';
    }

    render() {
        return(
            <Layout>
                <h1>Handige links</h1>
                <ul>
                    <li>
                        <a href="https://github.com/zeit/next.js" rel="nofollow" target="_blank">Nextjs</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=evaMpdSiZKk" rel="nofollow" target="_blank">(youtube) Guillermo Rauch - Next.js: Universal React Made Easy and Simple - React Conf 2017</a>
                    </li>
                    <li>
                        <a href="https://learnnextjs.com/" rel="nofollow" target="_blank">Learn nextjs</a>
                    </li>
                    <li>
                        <a href="https://github.com/zeit/next.js/tree/master/examples" rel="nofollow" target="_blank">Nextjs examples</a>
                    </li>
                    <li>
                        <a href="https://flaviocopes.com/nextjs/" rel="nofollow" target="_blank">GETTING STARTED WITH NEXT.JS</a>
                    </li>
                    <li>
                        <a href="https://jaketrent.com/post/what-is-nextjs/" rel="nofollow" target="_blank">What is Next.js?</a>
                    </li>
                    <li>
                        <a href="https://jaketrent.com/post/nextjs-getinitialprops-components/" rel="nofollow" target="_blank" >Next.js getInitialProps in All Components</a>
                    </li>
                    <li>
                        <a href="https://github.com/Aerolab/nextjs-pwa" rel="nofollow" target="_blank" >Aerolab: Nextjs PWA</a>
                    </li>
                    <li>
                        <a href="https://github.com/codebusking/next-hnpwa" rel="nofollow" target="_blank" >Codebusking: Nextjs PWA</a>
                    </li>
                    <li>
                        <a href="http://geekhmer.github.io/blog/2017/11/04/create-react-app-vs-nextjs/" rel="nofollow" target="_blank" >Create-React-App vs NextJs</a>
                    </li>
                    <li><a href="https://arunoda.me/blog/ssr-and-server-only-modules" rel="nofollow" target="_blank">SSR and Server Only Modules</a></li>
                    <li><a href="https://zeit.co/now" rel="nofollow" target="_blank">Now: hosting app</a></li>
                </ul>
                <h2>Sites using Nextjs</h2>
                <ul>
                    <li>
                        <a href="https://deliveroo.nl/nl/" rel="nofollow" target="_blank">deliveroo</a><br/>
                        <a href="https://www.youtube.com/watch?v=h6rETZH6Ym0" rel="nofollow" target="_blank">Next.js in production- Jasdeep Lalli, React London 2017</a>
                    </li>
                </ul>
            </Layout>
        );
    }

}

export default UseFullLinks