import React from 'react';

// renders the names of the week
const Weekdays = props => {
    return props.dayName.map(day => {
        return (
            <span className="demo-calender-app-day" key={day.id}>
                {day.label}
            </span>
        );
    });
};

export default Weekdays;
