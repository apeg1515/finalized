import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import {
  Modal,
  Image,
  Button,
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  HelpBlock
} from "react-bootstrap";
import submitEditUserAction from "../actions/userActions";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.bio) {
    errors.bio = "Required";
  }
  return errors;
};

const renderField = ({ label, type, input, cs }) => {
  return (
    <div>
      <FormGroup>
        <HelpBlock>{label}</HelpBlock>
        <FormControl
          type={type}
          componentClass={cs}
          defaultValue={input.value}
          OnChange={input.onChange}
        />
      </FormGroup>
    </div>
  );
};

renderField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  cs: PropTypes.string
};
const renderImage = ({ label, input }) => {
  return (
    <div>
      <HelpBlock>Image</HelpBlock>
      <Image height={200} width={180} src={input.value} thumbnail />
    </div>
  );
};

renderImage.propTypes = {
  label: PropTypes.string,
  input: PropTypes.string
};

//const ModalImage = ({ usr }) => (<Image src={} />);
const ModalUserEdit = props => {
  const { user, close, handleSubmit, handleFormSubmit } = props;
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user}
        <Grid>
          <Row>
            <Col xs={5} md={8}>
              <form
                onSubmit={handleSubmit(data => {
                  handleFormSubmit(data);
                  close();
                })}
              >
                <Field
                  label="Name"
                  name="name"
                  component={renderField}
                  type="text"
                />
                <Field
                  label="Bio"
                  name="bio"
                  component={renderField}
                  cs="textarea"
                />
                <Field
                  label="url"
                  name="profile_pic_url"
                  component={renderField}
                  type="text"
                />
              </form>
            </Col>
            <Col xs={4} md={6}>
              <Field component={renderImage} name="profile_pic_url" />
            </Col>
          </Row>
        </Grid>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" bsStyle="primary">
          Submit
        </Button>
        <Button bsStyle="danger" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
};

ModalUserEdit.propTypes = {
  close: PropTypes.func,
  user: PropTypes.object,
  handleSubmit: PropTypes.func
};

const ModalUsrEdit = reduxForm({
  form: "editUser",
  destroyOnUnmount: false,
  enableReinitialize: true
})(ModalUserEdit);

const mapStateToProps = state => ({
  initialValues: state.userReducer.USERS.user
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleFormSubmit: submitEditUserAction
    },
    dispatch
  );
};
const ModalUserEditComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalUsrEdit);

export default ModalUserEditComponent;
