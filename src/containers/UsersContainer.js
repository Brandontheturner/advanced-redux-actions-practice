import { connect } from "react-redux";
import Users from "../components/Users";
import { addUser, removeUser } from "../actions";

const mapStateToProps = state => {
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
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
)(UsersContainer);
