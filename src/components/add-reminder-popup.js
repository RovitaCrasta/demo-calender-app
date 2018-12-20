import React, { Component } from "react";

// opens a pop-up for adding reminders 
class AddReminderPopup extends Component {
  render() {
    if (this.props.modal && this.props.modal.active) {
      return (
        <div className="reminder-popup">
          <span className="helper" />
          <div>
            <div
              className="popup-close-button"
              onClick={this.props.closePopupHandler}
            >
              X
            </div>
            <label className="reminder-popup-label">Add a reminder</label>
            <form className="reminder-popup-form" onSubmit={this.props.addReminderHandler}>
              <input className="reminder-popup-input"
                type="text"
                className="reminder-popup-input"
                ref={this.props.inputElement}
                placeholder="add a reminder"
                required
              />
              <button className="reminder-popup-button" type="submit">Add</button>
            </form>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default AddReminderPopup;
