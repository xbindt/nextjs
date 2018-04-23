import react from 'react'
import './timetable.scss'

class TimeTable extends React.Component {

    constructor(props) {
        super(props);
    }
    
    transformDate(date){
        const nwDate = new Date(date);
        const minutes =  (nwDate.getMinutes() < 10 ? '0' : '') + nwDate.getMinutes();
        return `${nwDate.getHours()} : ${minutes}`;
    }

    render() {
        return(
            <table className="timetable">
                <thead>
                    <tr>
                        <th>Vertrektijd</th>
                        <th>Eindbestemming</th>
                        <th>Spoor</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.tableData.map((departureTime) => {
                    return(
                        <tr key={departureTime.RitNummer}>
                            <td>
                                {this.transformDate(departureTime.VertrekTijd)}
                                <span className="warning">{departureTime.VertrekVertragingTekst}</span>
                            </td>
                            <td>
                                {departureTime.EindBestemming}<br/>
                                <sub>
                                    <p>{departureTime.RouteTekst}</p>
                                    <p>{departureTime.ReisTip}</p>
                                    <p>{departureTime.Comments}</p>
                                </sub>
                            </td>
                            <td className={`spoorwijziging-${departureTime.VertrekSpoorWijziging}`}>
                                {departureTime.VertrekSpoor}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }

}

export default TimeTable