import { connect } from "react-redux";
import { setTemp } from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";

const mapDispatchToProps = dispatch => {
  return {
    set: num => dispatch(ChangeTemperature(num))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChangeTemperature);
