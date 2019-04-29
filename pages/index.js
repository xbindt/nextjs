import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Container} from 'next/app'
class Index extends React.Component {

    constructor() {
        super();
        this.state = {
            stationsFiltered: []
        };
    }

    componentDidMount() {

    }

    static async getInitialProps (context) {
        const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
        const res = await fetch(`${baseUrl}/stations`);
        const data = await res.json();

        return {
            stations: data.payload
        }
    }

    autoComplete(event) {
        event.preventDefault();
        let autoCompleteInput = this.autoCompleteInput.value;
        let stationsFiltered = this.props.stations.filter((station) => {
            if(station.land.toLowerCase() === 'nl'){
                return station.namen.lang.toLowerCase().includes(autoCompleteInput.toLowerCase())
                    || station.synoniemen.join().toLowerCase().includes(autoCompleteInput.toLowerCase());
            }
        });
        this.setState({stationsFiltered: stationsFiltered});

        if(autoCompleteInput.length === 0 ) {
            this.setState({stationsFiltered: []});
        }
    }

    render() {
        return(
        <Container>
            <Head>
                <title>Ns app</title>
            </Head>
            <Layout>
                <h1>NS</h1>
                <h2>Actuele vertrektijden</h2>
                <form>
                    <label htmlFor="station">Station</label>
                    <div>
                        <input id="station" type="text" autoComplete="off" ref={(input) => this.autoCompleteInput = input} placeholder="Typ uw station hier..." onKeyUp={(e) => this.autoComplete(e)} />
                        <ul className="autocomplete-list">
                        {
                            this.state.stationsFiltered.map((station) => {
                            return (
                            <li key={station.code} >
                                <Link
                                    href={{pathname: '/departuretimes', query: { station: station.code }}}
                                    as={`/departuretimes/${station.code}`}>
                                    <a>{station.namen.lang}</a>
                                </Link>
                            </li>
                            );
                        }
                        )}
                        </ul>
                    </div>
                </form>
            </Layout>
            </Container>);
    }

}

export default Index