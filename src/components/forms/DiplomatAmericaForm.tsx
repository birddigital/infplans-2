import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

const DiplomatAmericaForm = ({ action, ...props }) => (
  <div id="diplomat-america-form-container">
    <div className="embed-container">
      <iframe src="http://localhost:8001/forms/insurance-application" id="diplomat-america-form"></iframe>
    </div>
  </div>
)
export default DiplomatAmericaForm
