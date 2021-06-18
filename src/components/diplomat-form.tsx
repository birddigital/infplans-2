import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import {TiArrowSortedDown} from '@react-icons/all-files/ti/TiArrowSortedDown'
import {FaCalendarAlt} from '@react-icons/all-files/fa/FaCalendarAlt'

const DiplomatForm = ({ action, ...props }) => (
  <div id="diplomat-form">
    <form method="POST" action="">
      <Container>
        <div className="col-lg-12">
         <h2 className="text-blue text-center row-title">Enroll in Diplomat America Below</h2>
          <div className="row diplomat-america-container">
            <div className="col-lg-12">
              <h4 className="text-blue text-center">Visitor Application</h4>

              <form>
              <select id="coverage" name="coverage" class="form-control">
                <option value="" selected disabled hidden>Coverage Area</option>
                <option value="coverage">India</option>
                <option value="coverage">Australia</option>
                <option value="coverage">Bangladesh</option>
                <option value="coverage">Canada</option>
                <option value="coverage">Nepal</option>
                <option value="coverage">Pakistan</option>
                <option value="coverage">Sri Lanka</option>
                <option value="coverage">United Kingdom</option>
                <option value="coverage">United States</option>
                <option value="coverage">Afghanistan</option>
                <option value="coverage">Albania</option>
                <option value="coverage">Algeria</option>
                <option value="coverage">American Samoa</option>
                <option value="coverage">Andorra</option>
                <option value="coverage">Angola</option>
                <option value="coverage">Anguilla</option>
                <option value="coverage">Antarctica</option>
                <option value="coverage">Antigua and Barbuda</option>
                <option value="coverage">Argentina</option>
                <option value="coverage">Armenia</option>
                <option value="coverage">Aruba</option>
                <option value="coverage">Austria</option>
                <option value="coverage">Azerbaijan</option>
                <option value="coverage">Bahamas</option>
                <option value="coverage">Bahrain</option>
                <option value="coverage">Barbados</option>
                <option value="coverage">Belarus</option>
                <option value="coverage">Belgium</option>
                <option value="coverage">Belize</option>
                <option value="coverage">Benin</option>
                <option value="coverage">Bermuda</option>
                <option value="coverage">Bhutan</option>
                <option value="coverage">Bolivia</option>
                <option value="coverage">Bosnia and Herzegovina</option>
                <option value="coverage">Botswana</option>
                <option value="coverage">Bouvet Island</option>
                <option value="coverage">Brazil</option>
                <option value="coverage">British Indian Ocean Territory</option>
                <option value="coverage">Brunei Darussalam</option>
                <option value="coverage">Bulgaria</option>
                <option value="coverage">Burkina Faso</option>
                <option value="coverage">Burundi</option>
                <option value="coverage">Cambodia</option>
                <option value="coverage">Cameroon</option>
                <option value="coverage">Cape Verde</option>
                <option value="coverage">Cayman Islands</option>
                <option value="coverage">Central African Republic</option>
                <option value="coverage">Chad</option>
                <option value="coverage">Chile</option>
                <option value="coverage">China</option>
                <option value="coverage">Christmas Island</option>
                <option value="coverage">Cocos (Keeling) Islands</option>
                <option value="coverage">Colombia</option>
                <option value="coverage">Comoros</option>
                <option value="coverage">Congo</option>
                <option value="coverage">Cook Islands</option>
                <option value="coverage">Costa Rica</option>
                <option value="coverage">Croatia (Hrvatska)</option>
                <option value="coverage">Cuba</option>
                <option value="coverage">Cyprus</option>
                <option value="coverage">Czech Republic</option>
                <option value="coverage">Denmark</option>
                <option value="coverage">Djibouti</option>
                <option value="coverage">Dominica</option>
                <option value="coverage">Dominican Republic</option>
                <option value="coverage">East Timor</option>
                <option value="coverage">Ecuador</option>
                <option value="coverage">Egypt</option>
                <option value="coverage">El Salvador</option>
                <option value="coverage">Equatorial Guinea</option>
                <option value="coverage">Eritrea</option>
                <option value="coverage">Estonia</option>
                <option value="coverage">Ethiopia</option>
                <option value="coverage">Falkland Islands (Malvinas)</option>
                <option value="coverage">Faroe Islands</option>
                <option value="coverage">Fiji</option>
                <option value="coverage">Finland</option>
                <option value="coverage">France</option>
                <option value="coverage">France, Metropolitan</option>
                <option value="coverage">French Guiana</option>
                <option value="coverage">French Polynesia</option>
                <option value="coverage">French Southern Territories</option>
                <option value="coverage">Gabon</option>
                <option value="coverage">Gambia</option>
                <option value="coverage">Georgia</option>
                <option value="coverage">Germany</option>
                <option value="coverage">Ghana</option>
                <option value="coverage">Gibraltar</option>
                <option value="coverage">Greece</option>
                <option value="coverage">Greenland</option>
                <option value="coverage">Grenada</option>
                <option value="coverage">Guadeloupe</option>
                <option value="coverage">Guam</option>
                <option value="coverage">Guatemala</option>
                <option value="coverage">Guernsey</option>
                <option value="coverage">Guinea</option>
                <option value="coverage">Guinea-Bissau</option>
                <option value="coverage">Guyana</option>
                <option value="coverage">Haiti</option>
                <option value="coverage">Heard and Mc Donald Islands</option>
                <option value="coverage">Honduras</option>
                <option value="coverage">Hong Kong</option>
                <option value="coverage">Hungary</option>
                <option value="coverage">Iceland</option>
                <option value="coverage">Indonesia</option>
                <option value="coverage">Iran (Islamic Republic of)</option>
                <option value="coverage">Iraq</option>
                <option value="coverage">Ireland</option>
                <option value="coverage">Isle of Man</option>
                <option value="coverage">Israel</option>
                <option value="coverage">Italy</option>
                <option value="coverage">Ivory Coast</option>
                <option value="coverage">Jamaica</option>
                <option value="coverage">Japan</option>
                <option value="coverage">Jersey</option>
                <option value="coverage">Jordan</option>
                <option value="coverage">Kazakhstan</option>
                <option value="coverage">Kenya</option>
                <option value="coverage">Kiribati</option>
                <option value="coverage">Korea, Democratic People's Republic of</option>
                <option value="coverage">Kore, republic of</option>
                <option value="coverage">Kosovo</option>
                <option value="coverage">Kuwait</option>
                <option value="coverage">Kyrgyzstan</option>
                <option value="coverage">Lao People's Democratic Republic</option>
                <option value="coverage">Latvia</option>
                <option value="coverage">Lebanon</option>
                <option value="coverage">Lesotho</option>
                <option value="coverage">Liberia</option>
                <option value="coverage">Libyan Arab Jamahiriya</option>
                <option value="coverage">Liechtenstein</option>
                <option value="coverage">Lithuania</option>
                <option value="coverage">Luxembourg</option>
                <option value="coverage">Macau</option>
                <option value="coverage">Macedonia</option>
                <option value="coverage">Madagascar</option>
                <option value="coverage">Malawi</option>
                <option value="coverage">Malaysia</option>
                <option value="coverage">Maldives</option>
                <option value="coverage">Mali</option>
                <option value="coverage">Malta</option>
                <option value="coverage">Marshall Islands</option>
                <option value="coverage">Martinique</option>
                <option value="coverage">Mauritania</option>
                <option value="coverage">Mauritius</option>
                <option value="coverage">Mayotte</option>
                <option value="coverage">Mexico</option>
                <option value="coverage">Micronesia, Federated States of</option>
                <option value="coverage">Moldovo, Republic of</option>
                <option value="coverage">Monaco</option>
                <option value="coverage">Mongolia</option>
                <option value="coverage">Montenegro</option>
                <option value="coverage">Montserrat</option>
                <option value="coverage">Morocco</option>
                <option value="coverage">Mozambique</option>
                <option value="coverage">Myanmar</option>
                <option value="coverage">Namibia</option>
                <option value="coverage">Nauru</option>
                <option value="coverage">Netherlands</option>
                <option value="coverage">Netherlands Antilles</option>
                <option value="coverage">New Caledonia</option>
                <option value="coverage">New Zealand</option>
                <option value="coverage">Nicaragua</option>
                <option value="coverage">Niger</option>
                <option value="coverage">Nigeria</option>
                <option value="coverage">Niue</option>
                <option value="coverage">Norfolk Island</option>
                <option value="coverage">Northern Mariana Islands</option>
                <option value="coverage">Norway</option>
                <option value="coverage">Oman</option>
                <option value="coverage">Palau</option>
                <option value="coverage">Palau</option>
                <option value="coverage">Palestine</option>
                <option value="coverage">Panama</option>
                <option value="coverage">Papua New Guinea</option>
                <option value="coverage">Paraguay</option>
                <option value="coverage">Peru</option>
                <option value="coverage">Philippines</option>
                <option value="coverage">Pitcairn</option>
                <option value="coverage">Poland</option>
                <option value="coverage">Portugal</option>
                <option value="coverage">Puerto Rico</option>
                <option value="coverage">Qatar</option>
                <option value="coverage">Reunion</option>
                <option value="coverage">Romania</option>
                <option value="coverage">Russian Federation</option>
                <option value="coverage">Rwanda </option>
                <option value="coverage">Saint Kitts and Nevis</option>
                <option value="coverage">Saint Lucia</option>
                <option value="coverage">Saint Vincent and the Grenadines</option>
                <option value="coverage">Samoa</option>
                <option value="coverage">San Marino</option>
                <option value="coverage">Sao Tome and Principe</option>
                <option value="coverage">Saudi Arabia</option>
                <option value="coverage">Senegal</option>
                <option value="coverage">Serbia</option>
                <option value="coverage">Seychelles</option>
                <option value="coverage">Sierra Leone</option>
                <option value="coverage">Singapore</option>
                <option value="coverage">Slovakia</option>
                <option value="coverage">Slovenia</option>
                <option value="coverage">Solomon Islands</option>
                <option value="coverage">Somalia</option>
                <option value="coverage">South Africa</option>
                <option value="coverage">South Georgia South Sandwich Islands</option>
                <option value="coverage">Spain</option>
                <option value="coverage">St. Helena</option>
                <option value="coverage">St. Pierre and Miquelon</option>
                <option value="coverage">Sudan</option>
                <option value="coverage">Suriname</option>
                <option value="coverage">Svalbard and Jan Mayen Islands</option>
                <option value="coverage">Swaziland</option>
                <option value="coverage">Sweden</option>
                <option value="coverage">Switzerland</option>
                <option value="coverage">Syrian Arab Republic</option>
                <option value="coverage">Taiwan</option>
                <option value="coverage">Tajikistan</option>
                <option value="coverage">Tanzania, United Republic of</option>
                <option value="coverage">Thailand</option>
                <option value="coverage">Togo</option>
                <option value="coverage">Tokelau</option>
                <option value="coverage">Tonga</option>
                <option value="coverage">Trinidad and Tobago</option>
                <option value="coverage">Tunisia</option>
                <option value="coverage">Turkey</option>
                <option value="coverage">Turkmenistan</option>
                <option value="coverage">Turks and Caicos Islands</option>
                <option value="coverage">Tuvalu</option>
                <option value="coverage">Ugandu</option>
                <option value="coverage">Ukraine</option>
                <option value="coverage">United Arab Emirates</option>
                <option value="coverage">United States minor outlying islands</option>
                <option value="coverage">Uruguay</option>
                <option value="coverage">Uzbekistan</option>
                <option value="coverage">Vanuatu</option>
                <option value="coverage">Vatican City State</option>
                <option value="coverage">Venezuela</option>
                <option value="coverage">Vietnam</option>
                <option value="coverage">Virgin Islands (British)</option>
                <option value="coverage">Virgin Islands (U.S.)</option>
                <option value="coverage">Wallis and Futuna Islands</option>
                <option value="coverage">Western Sahara</option>
                <option value="coverage">Yemen</option>
                <option value="coverage">Zaire</option>
                <option value="coverage">Zambia</option>
                <option value="coverage">Zimbabwe</option>
                <option value="coverage">US</option>
                <option value="coverage">Outsite US</option>
              </select>

              <div className="calendar">
                <div className="row">
                <div className="col-lg-6">
                <span><FaCalendarAlt size="22"/><input class="form-control" id="date" name="date" placeholder="Coverage Start MM/Dd/Yyyy" type="text" /></span>
                </div>

                <div className="col-lg-6">
                  <input type="date" name="date" placeholder="Coverage End" />
                </div>
              </div>
             </div>
           </form>

            <p className="text-black text-center">Traveller Ages</p>

            <div className="col-lg-12">
             <div className="row">
              <div className="col-lg-6">
              <form>
                <select id="traveller" name="traveller" class="form-control">
                  <option value="traveller">Age 0 - 17</option>
                  <option value="traveller">Age 18 - 29</option>
                  <option value="traveller">Age 30 - 39</option>
                  <option value="traveller">Age 40 - 49</option>
                  <option value="traveller">Age 50 - 59</option>
                  <option value="traveller">Age 60 - 64</option>
                  <option value="traveller">Age 65 - 69</option>
                  <option value="traveller">Age 70 - 79</option>
                  <option value="traveller">Age 80+</option>
                </select>
              </form>
              </div>

                <div className="col-lg-6">
                <button className="visit-btn"> +Add Traveller </button>
                </div>
              </div>
            </div>

              <form>
              <select id="dependents" name="dependents" class="form-control">
                <option value="dependents">0</option>
                <option value="dependents">1</option>
                <option value="dependents">2</option>

              </select>
              </form>

                  <p className="text-black text-center">Plan Selection</p>

          <div className="col-lg-12">
           <div className="row">
            <div className="col-lg-6">
              <form>
                <select id="plan" name="plan" class="form-control">
                  <option value="plan">Diplomat America</option>
                  <option value="plan">Diplomat International</option>
                </select>
              </form>
              </div>

            <div className="col-lg-6">
              <form>
                <select id="maximum" name="maximum" class="form-control">
                  <option value="maximum">Select Policy Maximum</option>
                </select>
              </form>
            </div>
          </div>
        </div>

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
              <form>
                <select id="deductible" name="deductible" class="form-control">
                  <option value="deductible">Select Policy Deductible</option>
                </select>
              </form>
              </div>

            <div className="col-lg-6">
              <form>
                <select id="add" name="add" class="form-control">
                  <option value="add">ADD 25</option>
                  <option value="add">ADD 100</option>
                  <option value="add">ADD 250</option>
                  <option value="add">ADD 500</option>
                  <option value="add">ADD 750</option>
                  <option value="add">ADD 1M</option>
                </select>
              </form>
            </div>
          </div>
        </div>

          <div className="col-lg-12">
            <div className="row">
             <div className="col-lg-6">
              <button className="visit-btn1"> Reset </button>
             </div>

             <div className="col-lg-6">
                <button className="visit-btn2"> Next </button>
             </div>
           </div>
          </div>
        </div>
       </div>
       </div>
    </Container>
    </form>
  </div>
)
export default DiplomatForm
