import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import asyncComponent from "./asyncComponent";

import { showAllUsersAction } from "../actions/userActions";
const DataList = asyncComponent(() => import("./DataList"));

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
  }
  componentDidMount() {
    this.eventHandler();
  }
  eventHandler() {
    this.props.getAllUsers();
  }
  render() {
    const { usr } = this.props;
    return (
      <div className="container-fluid">
        <DataList users={usr} />
      </div>
    );
  }
}

DashboardComponent.propTypes = {
  usr: PropTypes.array,
  getAllUsers: PropTypes.func
};

const mapStateToProps = state => ({
  usr: state.userReducer.USERS.users
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllUsers: showAllUsersAction
    },
    dispatch
  );
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

export default Dashboard;
