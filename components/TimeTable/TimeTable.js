import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components';

class TimeTable extends React.Component {

    constructor(props) {
        super(props);
    }


    transformToReadableDate(date) {
        const nwDate = new Date(date);
        const minutes =  (nwDate.getMinutes() < 10 ? '0' : '') + nwDate.getMinutes();
        return `${nwDate.getHours()} : ${minutes}`;
    }

    transformToReadableDelay(actual, planned) {
       const delay = Math.ceil((new Date(actual) - new Date(planned))/60000);
       return delay > 0 ? `+ ${delay}` : '';
    }

    render() {

        const Paragraph = styled.p`
            /* ... */
            font-weight: bold;
            font-family: ${props => props.theme.fontFamily};
            color: ${props => props.theme.primary};
        `

        return(
            <div>
                <Paragraph>text</Paragraph>
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
                            <tr key={departureTime.product.number}>
                                <td>
                                    {this.transformToReadableDate(departureTime.plannedDateTime)}
                                    <span className="warning">{this.transformToReadableDelay(departureTime.actualDateTime, departureTime.plannedDateTime)}</span>
                                </td>
                                <td>
                                    {departureTime.direction}<br/>
                                    {
                                        departureTime.messages === undefined ? '' : departureTime.messages.map(
                                            (message, index) => {
                                                return(
                                                    <sup
                                                        key = {index}
                                                        className={classNames('message', {
                                                        'message--info': message.style === 'INFO',
                                                        })}
                                                    >
                                                        {message.message}
                                                    </sup>)
                                            }
                                        )
                                    }
                                </td>
                                <td>
                                    {departureTime.plannedTrack}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TimeTable