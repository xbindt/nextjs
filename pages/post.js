import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <div className="content">
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
       </div>
       
        <style jsx global>{`
          .content {
            font-family: 'Arial';
          }

          .content a {
            text-decoration: none;
            color: blue;
          }

          .content a:hover {
            opacity: 0.6;
          }

          .content h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}</style>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post