import React from 'react'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'

function Step2(props) {
  return (
    <div className="bmi-form-content-container">
      <Container>
        <div className="col-lg-12 text-center">
          <h1>Visitor Information</h1>
        </div>
        <div className="col-md-6">
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            value={props.getState('firstName', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={props.getState('lastName', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="birthday"
            placeholder="Date Of Birth"
            type="date"
            value={props.getState('birthday', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="gender"
            placeholder="Gender"
            type="text"
            value={props.getState('gender', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="passport"
            placeholder="Passport"
            type="text"
            value={props.getState('passport', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="contactNo"
            placeholder="Contact No."
            type="tel"
            value={props.getState('contactNo', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-12">
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={props.getState('email', '')}
            onChange={props.handleChange}
          />
        </div>
      </Container>
      <Container>
        <div className="col-md-12 text-center">
          <h5 className="mt-4 mb-5"> Emergency Contact </h5>
        </div>
        <div className="col-md-6">
          <input
            name="emergencyContactFirstName"
            placeholder="First Name"
            type="text"
            value={props.getState('emergencyContactFirstName', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="emergencyContactLastName"
            placeholder="Last Name"
            type="text"
            value={props.getState('emergencyContactLastName', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="emergencyContactPhone"
            placeholder="Emergency Contact Phone"
            type="tel"
            value={props.getState('emergencyContactPhone', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="emergencyContactEmail"
            placeholder="Emergency Contact Email"
            type="email"
            value={props.getState('emergencyContactEmail', '')}
            onChange={props.handleChange}
          />
        </div>
      </Container>
    </div>
  )
}

export default Step2
