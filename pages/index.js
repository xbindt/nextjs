import Layout from '../components/Layout.js'
import react from 'react'

class Index extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.title = 'Homepage';
    }

    render() {
        return(
            <Layout>
           
                <h1>Next.js</h1>
                <h2>a framework to render React on the server</h2>
                <p>We have React, webpack, hot module loading, routing, server side rendering, pre-fetching— and many more goodies which are a pain to setup right out of the box!</p>

                <ul className="slides">
                    <li>
                        <strong>Server Rendering:</strong>
                        <p>You can (optionally) render React components on the server side, before sending the HTML to the client.</p>
                        <p>Dataloading: <code>getInitialProps()</code>loads on the server and on the client.</p>
                    </li>
                    <li><strong>Pages</strong>
                        <ul>
                            <li>
                                <strong>Automatic Routing:</strong>
                                <p>Any URL is mapped to the filesystem. They are mapped to files in the <code>pages</code> folder.
                                </p>
                            </li>
                            <li>
                                <strong>Automatic Code Splitting:</strong>
                                <p>Pages are rendered with just the libraries and JavaScript that they need, not more.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Link:</strong>
                        <p>The <code>Link</code> component is used to link together different pages, supports a <code>prefetch</code> prop which automatically prefetches page resources (including code missing due to code splitting) in the background.</p>
                    </li>
                    <li>
                        <strong>Styled-jsx:</strong>
                        <p>Single File Components: using <a href="https://github.com/zeit/styled-jsx">styled-jsx</a>, completely integrated as built by the same team, it’s trivial to add styles scoped to the component.</p>
                    </li>
                    <li>
                        <strong>Dynamic Components:</strong>
                        <p>You can import JavaScript modules and React Components dynamically (<a href="https://github.com/zeit/next.js#dynamic-import">https://github.com/zeit/next.js#dynamic-import</a>).</p>
                    </li>
                    <li>
                        <strong>Static Exports:</strong>
                        <p>Using the <code>next export</code> command, Next.js allows you to export a fully static site from your app.</p>
                    </li>
                    <li>
                        <strong>Now:</strong>
                        <p>Hosting app</p>
                    </li>
                </ul>


            </Layout>
        );
    }

}

export default Index