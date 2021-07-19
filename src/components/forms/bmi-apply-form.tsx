import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

const BmiApplyForm = ({ action, ...props }) => (
  <div id="bmi-apply-form-container">
    <div className="embed-container">
      <iframe src="http://localhost:8001/forms/bmi-travel-plan-application.php" id="bmi-apply-form" scrolling="no"></iframe>
    </div>
  </div>
)
export default BmiApplyForm
