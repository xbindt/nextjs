import Layout from '../components/Layout.js'
import react from 'react'

class AboutNextjs extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        document.title = 'Over Nextjs';
    }

    render() {
        return(
            <Layout>
                <h1>Over Nextjs</h1>
                
                <h2>Link</h2>
                <p>is kind of a weird component because you use it to wrap an actual <code>&lt;a&gt;</code>. So if you have to add a link for Link to work, why do you need it then? Because it does a bit of magic behind the scenes to help optimize your app a bit further:</p>
                <ul>
                    <li><strong>If you are opening a link inside your current tab</strong>, Link will intercept the request and only fetch the resources needed for that specific page, without downloading a huge chunk of JS again. Since we’re requesting as little data as possible from the server, each page we open is going to load a lot faster.</li>
                    <li><strong>You can add the prefetch prop to load the link in the background</strong>. If you use <code>&lt;Link prefetch /&gt;</code>, it’ll load whatever it’s pointing to, so that when you click the link, the page loads instantly.</li>
                    <li><strong>If you are opening the link in a new tab or window</strong>, it won’t do anything and just fetch a brand new page from the server.</li>
                </ul>
            </Layout>
           
        );
    }

}

export default AboutNextjs