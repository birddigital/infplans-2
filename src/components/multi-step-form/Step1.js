import React from 'react'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'

function Step1(props) {
  return (
    <div className="bmi-form-content-container">
      <Container>
        <div className="col-lg-12 text-center">
          <h1>INF Travel Assist Application</h1>
        </div>
        <div className="col-md-6">
          <input
            name="startDate"
            type="date"
            value={props.getState('startDate', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            name="endDate"
            type="date"
            value={props.getState('endDate', '')}
            onChange={props.handleChange}
          />
        </div>
        <div className="col-md-6">
          <select
            name="departure"
            className="form-control select-option"
            value={props.getState('departure', '')}
            onChange={props.handleChange}
          >
            <option value="">Departure</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Argentina">Argentina</option>
            <option value="Aruba">Aruba</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            name="destination"
            className="form-control select-option"
            value={props.getState('destination', '')}
            onChange={props.handleChange}
          >
            <option value="">Destination</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Argentina">Argentina</option>
            <option value="Aruba">Aruba</option>
          </select>
        </div>
        <div className="col-md-12" id="custom-radio-buttons">
          <h5> Additional Traveller Coverage </h5>
          <div class="radio-wrapper">
            <input
              type="radio"
              id="radio1"
              name="coverageradio"
              value={props.getState('coverageradio', 'yes')}
              onChange={props.handleChange}
            />
            <label for="radio1">
              <span class="outer">
                <span class="inner animated"></span>
              </span>
              Yes
            </label>
          </div>
          <div class="radio-wrapper">
            <input
              type="radio"
              id="radio2"
              name="coverageradio"
              value={props.getState('coverageradio', 'no')}
              onChange={props.handleChange}
            />
            <label for="radio2">
              <span class="outer">
                <span class="inner animated"></span>
              </span>
              No
            </label>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Step1
