import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import carsActions from './../store/actions/cars.actions';
import '../css/Modals.css'

class AddCar extends Component {

  car = {};

  onChange = (e) => {
    this.car[e.target.name] = e.target.value;
  }

  FieldGroup = ({ id, label, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

  handleSubmit = () => {
    this.props.onAddCar(this.car)
  }

  render() {
    const formInstance = (
      <Modal.Body>
        <form className="ModalsLeft">
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Vehicle Type"
            name="vType"
            onChange={this.onChange}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Make"
            name="make"
            onChange={this.onChange}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Model"
            name="model"
            onChange={this.onChange}
          />
        </form>
        <form className="ModalsRight">
          <this.FieldGroup
            id="formControlsText"
            type="number"
            placeholder="Year"
            name="year"
            onChange={this.onChange}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="License Plate"
            name="license_number"
            onChange={this.onChange}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Mac Address"
            name="mac_address"
            onChange={this.onChange}
          />
        </form>
        <Button className="cancel" onClick={this.props.onClose}>Cancel</Button>
        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
      </Modal.Body>
    );

    return (
      <Modal
        className="Modals"
        show={this.props.showAddVehicle}
        onHide={this.props.onClose}
      >
        <h1>Add</h1>
        {formInstance}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showAddVehicle: state.cars.showAddVehicle,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => { dispatch(carsActions.onClose); },
  onAddCar: (car) => { dispatch(carsActions.addCar(car)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
