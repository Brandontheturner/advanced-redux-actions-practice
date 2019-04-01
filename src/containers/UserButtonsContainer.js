import { connect } from "react-redux";
import { addUser, removeUser } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    set: txt => dispatch(setSpecialText(txt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SpecialTextBox);
