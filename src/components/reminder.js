import React, { Component } from 'react';
import { connect } from 'react-redux';;

class Reminder extends Component {
    render() {
        const selectedDate = this.props.month ? this.props.month.filter((day) => {return day.id === parseInt(this.props.match.params.id, 10)}) : '';
        const selectedReminder = selectedDate && selectedDate[0].reminders ? selectedDate[0].reminders.filter((reminder, index) => {return index === parseInt(this.props.match.params.index, 10)}) : '';
        return ( <div className="demo-app-calender-reminder">
                <h1>{selectedDate && selectedDate[0].date}</h1>
                <h2>{selectedReminder[0]}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dayName: state.dayName,
        month: state.month
    }
}

export default connect(mapStateToProps)(Reminder);
