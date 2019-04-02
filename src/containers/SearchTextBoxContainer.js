import { connect } from "react-redux";
import { setSearchText } from "../actions";
import SearchTextBox from "../components/SearchTextBox";

const mapDispatchToProps = dispatch => {
  return {
    set: text => dispatch(setSearchText(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchTextBox);
