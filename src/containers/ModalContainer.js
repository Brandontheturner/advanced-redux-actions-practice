import { connect } from "react-redux";
import Modal from "../components/Modal";

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(Modal);
