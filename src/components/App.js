import React from "react";
import { connect } from "react-redux";
import { fetchSurvey } from "../actions";
import "../styles/App.scss";
// context store provide
import { SurveyAnswerStore } from "../contexts/SurveyAnswerCotext";

import SurveyBody from "./SurveyBody";

class App extends React.Component {
  state = {
    modal: false,
    modalInfo: {}
  };
  // get servey list when dom loaded
  componentDidMount() {
    this.props.fetchSurvey();
  }

  render() {
    return (
      <div className="App" data-test="appComponent">
        <SurveyAnswerStore>
          <SurveyBody />
        </SurveyAnswerStore>
      </div>
    );
  }
}
const mapStateToProps = ({ surveylist }) => {
  return { surveylist: surveylist };
};

export default connect(
  mapStateToProps,
  { fetchSurvey }
)(App);
