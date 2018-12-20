import React, { Component } from "react";
import { Link } from "react-router-dom";

// renders month week wise, reminders can be added to each date bt clicking on add button, 
// add button opens a pop to add reminders
class Month extends Component {
  createElements() {
    return this.props.month.map((day) => {
      return (
        <div className="demo-calender-app-date" key={day.id}>
          <span className="demo-calender-app-span">{day.date}</span>
          <span
            className="demo-calender-app-button"
            onClick={id => this.props.openPopupHandler(day)}
          >
            ADD
          </span>
          <ul className="demo-calender-app-reminders">
            {day.reminders &&
              day.reminders.map((reminder, index) => {
                const path = "reminder/" + day.id + "/" + index;
                return (
                  <li key={index}>
                    <Link to={path}>{reminder}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      );
    });
  }
  render() {
    let elements = this.createElements();
    var groups = [];
    var children = [];
    while (elements.length > 0) {
      children.push(elements.shift());
      if (children.length === 7) {
        groups.push(<div className="demo-calender-app-week">{children}</div>);
        children = [];
      }
    }
    if (children.length > 0) {
      groups.push(<div className="demo-calender-app-week">{children}</div>);
    }
    return groups;
  }
}

export default Month;
