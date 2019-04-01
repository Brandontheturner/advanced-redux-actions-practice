import { connect } from "react-redux";
import Counter from "../components/Counter";
import { addUser, removeUser } from "../actions";

const mapStateToProps = state => {
  return {
    count: state.currentCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set: txt => dispatch(setSpecialText(txt))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
