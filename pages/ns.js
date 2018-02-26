import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Ns =  (props) => (
    <Layout>
       <h1>Ns</h1>
       <div className="content">
       
       <ul>
        {props.stations.map((station) => (
            <li key={station.Code}>{station.Namen.Kort}</li>
        ))}
        </ul>
        
      
        
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

Ns.getInitialProps = async function (context) {
  const res = await fetch(`http://localhost:8080/stations`);
  const data = await res.json();


  return {
    stations: data
  }
}

export default Ns