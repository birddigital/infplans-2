import React from 'react'

function FinalStep(props) {
  return (
    <div style={{ textAlign: 'left' }}>
      <p>
        <b>Start Date:</b> {props.state.startDate}
      </p>
      <p>
        <b>End Date:</b> {props.state.endDate}
      </p>
      <p>
        <b>Departure:</b> {props.state.departure}
      </p>
      <p>
        <b>Destination:</b> {props.state.destination}
      </p>
      <p>
        <b>First Name:</b> {props.state.firstName}
      </p>
      <p>
        <b>Last Name:</b> {props.state.lastName}
      </p>
      <p>
        <b>Birthday:</b> {props.state.birthday}
      </p>
      <p>
        <b>Email:</b> {props.state.email}
      </p>
      <p>
        <b>Contact No:</b> {props.state.contactNo}
      </p>
      <p>
        <b>Gender:</b> {props.state.gender}
      </p>
      <p>
        <b>Passport:</b> {props.state.passport}
      </p>
      <p>
        <b>Email:</b> {props.state.email}
      </p>
      <p>
        <b>Additional traveller coverage:</b> {props.state.coverageradio}
      </p>
      <p>
        <b>Emergency Contact First Name:</b>{' '}
        {props.state.emergencyContactFirstName}
      </p>
      <p>
        <b>Emergency Contact Last Name:</b>{' '}
        {props.state.emergencyContactLastName}
      </p>
      <p>
        <b>Emergency Contact Email:</b> {props.state.emergencyContactEmail}
      </p>
      <p>
        <b>Emergency Contact Contact No:</b> {props.state.emergencyContactPhone}
      </p>
    </div>
  )
}

export default FinalStep
