import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Form from "../Form/Form";
import Schedule from "./Schedule/Schedule";
import "./Date.scss";

class MyApp extends Component {
  state = {
    date: new Date(),
    Selected: false,
  };

  onChange = (date) => this.setState({ date: date });
  onSelect = () => {
    this.setState({ Selected: true });
  };
  closeText = () => {
    this.setState({ Selected: false });
    if (this.props.closeDate) {
      this.props.closeDate();
    }
  };

  render() {
    //console.log("in", this.props.showDate);
    return (
      // <div id="myModal" className="modal">
      //   <div className="modal-content">
      //     <span onClick={this.props.hideDate()} className="close">
      //       &times;
      //     </span>

      <div id="date_div">
        <DateTimePicker
          //format="yyyy MM dd HH mm ss"
          onChange={this.onChange}
          value={this.state.date}
          minDate={new Date()}
        />
        <button class="dateSelect" onClick={this.onSelect}>Select</button>
        {this.state.Selected == true ? (
          <Schedule
            date={this.state.date}
            selected={this.state.Selected}
            info={this.props.info}
            callDash={this.callDash}
            closeText={this.closeText}
            tweetToUpdate={this.props.tweetToUpdate}
          ></Schedule>
        ) : null}
      </div>
      //   </div>
      // </div>
    );
  }
  callDash = () => {
    this.props.forceQueue();
  };
}
export default MyApp;
