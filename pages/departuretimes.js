import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import react from 'react'
import Table from '../components/TimeTable/TimeTable.js';

class DepartureTimes extends React.Component {

    constructor() {
        super();
    }

    static async getInitialProps (context) {
        const { station } = context.query
        const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
        const res = await fetch(`${baseUrl}/vertrektijden/?station=${station}`);
        const data = await res.json();

        return {
            departureTimes: data
        }
    }



    render() {
        return(
            <Layout>
                <Table tableData={this.props.departureTimes}></Table>
            </Layout>
        );
    }

}

export default DepartureTimes