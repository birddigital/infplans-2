import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import Logo from '../../../content/images/multi-step-logo.png'

const initialformData = Object.freeze({
  start_date: '',
  end_date: '',
  departure: '',
  destination: '',
  additional_coverage: '',
  agree_terms: '',
  visitors_first_name: '',
  visitors_last_name: '',
  visitors_email: '',
  birthday: '',
  gender: '',
  passport: '',
  visitors_contact_number: '',
  emergency_first_name: '',
  emergency_last_name: '',
  emergency_contact_number: '',
  emergency_email: '',
  address: '',
  city: '',
  state: '',
  postal_code: '',
  card_holder_name: '',
  card_number: '',
  card_expiry_month: '',
  card_expiry_year: '',
  card_security_code: '',
  currentStep: '',
});

function MasterForm () {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setformData] = useState(initialformData);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [depature, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [additionalCoverage, setAdditionalCoverage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState('');

  const [visitorsFirstName, setVisitorsFirstName] = useState('');
  const [visitorsLastName, setVisitorsLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [passport, setPassport] = useState('');
  const [visitorsContactNumber, setVisitorsContactNumber] = useState('');
  const [visitorsEmail, setVisitorsEmail] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiryMonth, setCardExpiryMonth] = useState('');
  const [cardExpiryYear, setCardExpiryYear] = useState('');
  const [cardSecurityCode, setCardSecurityCode] = useState('');

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    console.log(formData);
  }

  const handleSubmit = (e) => {
    event.preventDefault()
  }

  const _next = () => {
    setCurrentStep(currentStep+1);
  }

  const _prev = () => {
    setCurrentStep(currentStep-1);
  }

  /*
  * the functions for our button
  */
  function previousButton() {
    if(currentStep !==1){
      return (
        <button
          id="btn-multistep-prev"
          type="button" onClick={_prev}>
          Previous
        </button>
      )
    }
    return null;
  }

  function nextButton() {
    if(currentStep <4){
      return (
        <button
          id="btn-multistep-next"
          type="button" onClick={_next}>
          Next
        </button>
      )
    }
    return null;
  }

  function Step1(props) {
    if (currentStep !== 1) {
      return null
    }
      return(
        <div className="bmi-form-content-container">
          <Container>
            <div className="col-lg-12 text-center">
              <h5>INF Travel Assist Application</h5>
            </div>
            <div className="col-md-6">
              <input
                name="startDate"
                type="date"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                name="endDate"
                type="date"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <select
                name="departure"
                className="form-control select-option"
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                <label for="radio2">
                  <span class="outer">
                    <span class="inner animated"></span>
                  </span>
                  No
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input
                    type="checkbox"
                    name="agree_terms"
                    className="form-check-input"
                    onChange={handleChange}
                  />
                  Please Read and Agree to conditions of the Travel Assist Program before applying.
                </label>
              </div>
            </div>
          </Container>
        </div>
      );
  }

  function Step2(props) {
    if (currentStep !== 2) {
      return null
    }
    return(
      <div className="bmi-form-content-container">
        <Container>
          <div className="col-lg-12 text-center">
            <h5>Visitor Information</h5>
          </div>
          <div className="col-md-6">
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="birthday"
              placeholder="Date Of Birth"
              type="date"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="gender"
              placeholder="Gender"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="passport"
              placeholder="Passport"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="contactNo"
              placeholder="Contact No."
              type="tel"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="emergencyContactLastName"
              placeholder="Last Name"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="emergencyContactPhone"
              placeholder="Emergency Contact Phone"
              type="tel"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="emergencyContactEmail"
              placeholder="Emergency Contact Email"
              type="email"
              onChange={handleChange}
            />
          </div>
        </Container>
      </div>
    );
  }

  function Step3(props) {
    if (currentStep !== 3) {
      return null
    }
    return(
      <div className="bmi-form-content-container">
        <Container>
          <div className="col-lg-4 text-center">
            <div className="plans-tier-container">
              <p>
                INF BMI ULTRA PLUS
              </p>
              <h3>
                $126.14
              </h3>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="plans-tier-container">
              <p>
                INF BMI VIP
              </p>
              <h3>
                $208.88
              </h3>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="plans-tier-container">
              <p>
                INF BMI VIP PLUS
              </p>
              <h3>
                $253.54
              </h3>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <h5 className="mt-4 mb-5">Address</h5>
          </div>
          <div className="col-md-6">
            <input
              name="address"
              placeholder="Address"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="city"
              placeholder="City"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="state"
              placeholder="State"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="postal code"
              placeholder="Postal Code"
              type="number"
              onChange={handleChange}
            />
          </div>
        </Container>
        <Container>
          <div className="col-md-12 text-center">
            <h5 className="mt-4 mb-5"> Card Information </h5>
          </div>
          <div className="col-md-12">
            <input
              name="card holder name"
              placeholder="Card Holder Name"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="card number"
              placeholder="Card number"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="card expiry month"
              placeholder="Card Expiry Month"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="card expiry year"
              placeholder="Card Expiry Year"
              type="number"
              min="2021"
              max="2100"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              name="card security code"
              placeholder="Card Security Code"
              type="number"
              onChange={handleChange}
            />
          </div>
        </Container>
      </div>
    );
  }

  function Step4(props) {
    if (currentStep !== 4) {
      return null
    }
      return(
        <div className="bmi-form-content-container">
          <Container>
            <div className="col-lg-12 text-center">
              <h5>
                Success!
              </h5>
              <p>
                Thank you for submitting your application for enrollment in the INF BMI Plan. Your information will be verified and if everything is in order, we will process and issue your certificate. Until you receive your certificate, coverage is not bound. If there are any issues we will contact you within 24 hours.Thank you for your support and confidence in INF Programs.
              </p>
              <img src={Logo} />
            </div>
          </Container>
        </div>
      );
  }

  return (
      <div className="bmi-apply-form-container">
        <p>Step {currentStep} </p>
        <form onSubmit={handleSubmit}>
          {/*
            render the form steps and pass required props in
          */}
            {Step1()}
            {Step2()}
            {Step3()}
            {Step4()}
            <div className="col-lg-12 mt-4 text-center">
              {previousButton()}
              {nextButton()}
            </div>
        </form>
      </div>
    );
}

export default MasterForm;
