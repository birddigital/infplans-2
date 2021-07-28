import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import IframeResizer from 'iframe-resizer-react'

const DiplomatAmericaForm = ({ action, ...props }) => (
  <div id="diplomat-america-form-container">
    <IframeResizer
      log
      src="https://adrienb3.sg-host.com/forms/insurance-application"
      style={{ width: '1px', minWidth: '100%', border: 'none'}}
      heightCalculationMethod= "lowestElement"
    />
  </div>
)
export default DiplomatAmericaForm
