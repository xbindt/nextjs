import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import react from 'react'

class DepartureTimes extends React.Component {

    constructor() {
        super();
        
        
    }

    transformDate(date){
        const nwDate = new Date(date);
        const minutes =  (nwDate.getMinutes() < 10 ? '0' : '') + nwDate.getMinutes();
        return `${nwDate.getHours()} : ${minutes}`;
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
              {
                /*"RitNummer":"3647",
                "VertrekTijd":"2018-03-01T14:12:00+0100",
                "VertrekVertraging":"PT24M",
                "VertrekVertragingTekst":"+24 min",
                "EindBestemming":"Roosendaal",
                "TreinSoort":"Intercity",
                "RouteTekst":"Tilburg, Breda, Etten-Leur",
                "Vervoerder":"NS",
                "VertrekSpoor":"7a",
                "VertrekSpoorWijziging":true*/
              } 
              <table>
                  <tbody>
                    {this.props.departureTimes.map((departureTime) => {
                        return(
                            <tr key={departureTime.RitNummer}>
                                <td>
                                    {this.transformDate(departureTime.VertrekTijd)}
                                    <span className="warning">{departureTime.VertrekVertragingTekst}</span>
                                </td>
                                <td>
                                    {departureTime.EindBestemming}<br/>
                                    {departureTime.RouteTekst}
                                </td>
                                <td className={`spoorwijziging-${departureTime.VertrekSpoorWijziging}`}>
                                    {departureTime.VertrekSpoor}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </Layout>
        );
    }

}

export default DepartureTimes