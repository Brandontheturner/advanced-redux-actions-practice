import { connect } from "react-redux";
import { setSpecialText } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    set: txt => dispatch(setSpecialText(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SpecialTextBox);
