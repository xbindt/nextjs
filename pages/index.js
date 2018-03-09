import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import react from 'react'
import Link from 'next/link'

class Ns extends React.Component {

    constructor() {
        super();
        this.state = {
            stationsFiltered: []
        };
    }

    static async getInitialProps (context) {
        const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
        const res = await fetch(`${baseUrl}/stations`);
        const data = await res.json();
        
        return {
            stations: data
        }
    }

    autoComplete(event) {
        event.preventDefault();
        let autoCompleteInput = this.autoCompleteInput.value
        let stationsFiltered = this.props.stations.filter((station) => {
            if(station.Land.toLowerCase() === 'nl'){
                return station.Namen.Lang.toLowerCase().includes(autoCompleteInput.toLowerCase())
                    || station.Synoniemen.join().toLowerCase().includes(autoCompleteInput.toLowerCase());
            }
        });
        this.setState({stationsFiltered: stationsFiltered});
    }

    render() {
        return(
            <Layout>
                
                <form>
                    <input type="text" ref={(input) => this.autoCompleteInput = input} placeholder="Station" onKeyUp={(e) => this.autoComplete(e)} />
                </form>

                <ul>
                {this.state.stationsFiltered.map((station) => {
                    return(
                    <li key={station.Code} >
                        <Link as={`/departuretimes/${station.Code}`} href={`/departuretimes/?station=${station.Code}`}>
                            <a>{station.Namen.Lang}</a>
                        </Link>
                  </li>);
                })}
                </ul>
            </Layout>
        );
    }

}

export default Ns