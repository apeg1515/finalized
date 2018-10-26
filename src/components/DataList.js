import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Media,
  Modal,
  ProgressBar,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

import ModaluserEditComponent from "./ModalUserEdit";
import { editUserAction } from "../actions/userActions";

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { show: false };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow(id) {
    this.setState({ show: true });
    this.props.editUser(id);
  }
  render() {
    const { users } = this.props;
    if (!users) {
      return (
        <div>
          <ProgressBar active now={70} />
        </div>
      );
    } else {
      return (
        <div>
          <ListGroup>
            {users.map(user => {
              return (
                <ListGroupItem
                  style={{ marginBottom: "1px" }}
                  key={user.id}
                  onClick={() => this.handleShow(user.id)}
                >
                  <Media>
                    <Media.Left>
                      <img width={54} height={54} src={user.profile_pic_url} />
                    </Media.Left>
                    <Media.Left>
                      <span
                        style={{ verticalAlign: "-webkit-baseline-middle" }}
                      >
                        {user.name}
                      </span>
                    </Media.Left>
                  </Media>
                </ListGroupItem>
              );
            })}
          </ListGroup>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <ModaluserEditComponent close={this.handleClose} />
          </Modal>
        </div>
      );
    }
  }
}

DataList.propTypes = {
  users: PropTypes.array,
  editUser: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      editUser: editUserAction
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(DataList);
