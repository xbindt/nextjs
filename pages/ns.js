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

    componentDidMount() {
        document.title = 'Ns';
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
        let autoCompleteInput = this.autoCompleteInput.value;
        let stationsFiltered = this.props.stations.filter((station) => {
            if(station.Land.toLowerCase() === 'nl'){
                return station.Namen.Lang.toLowerCase().includes(autoCompleteInput.toLowerCase())
                    || station.Synoniemen.join().toLowerCase().includes(autoCompleteInput.toLowerCase());
            }
        });
        this.setState({stationsFiltered: stationsFiltered});

        if(autoCompleteInput.length === 0 ) {
            this.setState({stationsFiltered: []});
        }
    }

    render() {
        return(
            <Layout>
                <h1>NS</h1>
                <h2>Actuele vertrektijden</h2>
                <form>
                    <label htmlFor="station">Station</label>
                    <div>
                        <input id="station" type="text" autoComplete="off" ref={(input) => this.autoCompleteInput = input} placeholder="Typ uw station hier..." onKeyUp={(e) => this.autoComplete(e)} />
                        <ul className="autocomplete-list">
                        {this.state.stationsFiltered.map((station) => {
                            return(
                            <li key={station.Code} >
                                <Link
                                    href={{pathname: '/departuretimes', query: { station: station.Code }}}
                                    as={`/departuretimes/${station.Code}`}>
                                    <a>{station.Namen.Lang}</a>
                                </Link>
                        </li>);
                        })}
                        </ul>
                    </div>
                </form>

            </Layout>
        );
    }

}

export default Ns