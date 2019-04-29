import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import TimeTable from '../components/TimeTable/TimeTable.js';
import styled from 'styled-components';

class DepartureTimes extends React.Component {

    constructor() {
        super();
    }

    static async getInitialProps (context) {
        const { station } = context.query
        const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
        const res = await fetch(`${baseUrl}/departures/?station=${station}`);
        const data = await res.json();

        return {
            departureTimes: data.payload.departures
        }
    }



    render() {

        return(
            <Layout>
                <TimeTable tableData={this.props.departureTimes}></TimeTable>
            </Layout>
        );
    }

}

export default DepartureTimes