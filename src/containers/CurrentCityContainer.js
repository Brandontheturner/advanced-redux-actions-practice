import { connect } from "react-redux";
import CurrentCity from "../components/CurrentCity";

const mapStateToProps = dispatch => {
  return {
    text: state.CurrentCity
  };
};

export default connect(
  mapStateToProps,
  null
)(CurrentCity);
