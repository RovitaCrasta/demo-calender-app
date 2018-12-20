import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addReminder } from "./actions/demo-calender-app-action";

import Weekdays from "./components/weekdays";
import Month from "./components/month";
import AddReminderPopup from "./components/add-reminder-popup";

// renders when the route is '/', this includes a calender for a month
class App extends Component {
  constructor(props) {
    super(props);
    this.openPopupHandler = this.openPopupHandler.bind(this);
    this.closePopupHandler = this.closePopupHandler.bind(this);
    this.addReminderHandler = this.addReminderHandler.bind(this);
    this.inputElement = React.createRef();
  }
  state = {
    modal: { active: false, day: "" }
  };
  openPopupHandler(day) {
    this.setState({ modal: { active: true, day: day } });
  }
  closePopupHandler() {
    this.setState({ modal: { active: false, day: "" } });
  }
  addReminderHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    const reminderValue = this.inputElement.current.value;
    const dayClone = this.state.modal.day;
    const monthClone = this.props.month;
    const updatedMonth = monthClone.map(day => {
      if (day.id === dayClone.id) {
        dayClone.reminders.push(reminderValue);
        return dayClone;
      } else return day;
    });
    this.props.addReminder(updatedMonth);
    this.inputElement.current.value = "";
  }
  render() {
    return (
      <div className="demo-calender-app-container">
        <div className="demo-calender-app-days">
          {this.props.dayName && <Weekdays dayName={this.props.dayName} />}
        </div>
        <div className="demo-calender-app-month">
          {this.props.month && (
            <Month
              month={this.props.month}
              openPopupHandler={this.openPopupHandler}
            />
          )}
        </div>
        <AddReminderPopup
          modal={this.state.modal}
          inputElement={this.inputElement}
          addReminderHandler={this.addReminderHandler}
          closePopupHandler={this.closePopupHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dayName: state.dayName,
    month: state.month
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addReminder
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
