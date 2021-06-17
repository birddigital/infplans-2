import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img, { FixedObject } from 'gatsby-image'
import Container from 'components/pages/container'
import ContainerFluid from 'components/pages/container-fluid'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import {TiArrowSortedDown} from '@react-icons/all-files/ti/TiArrowSortedDown'
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const HomeForm = ({ action, ...props }) => (
  <div id="home-form">
    <form method="POST" action="">
    <Container>
      <div className="col-lg-3 left-content">
        <div className="row">
          <div className="col-md-6 pr-0">
            <h5>
              Start Date
            </h5>
            <p className="form-content">
              mm/dd/yyyy<span id="arrow-right-span"><BsArrowRight size="22"/></span>
            </p>
          </div>
          <div className="col-md-4 pr-0 pl-0">
            <h5>
              End Date
            </h5>
            <p className="form-content">
              mm/dd/yyyy
            </p>
          </div>
          <div className="col-md-2 text-center pl-0 pr-0">
            <button className="btn-home-form"><TiArrowSortedDown/></button>
          </div>
        </div>
      </div>
      <div className="col-lg-6 center-content">
        <div className="row">
          <div className="col-md-10 pr-0">
            <h5>
              Coverage Area
            </h5>
            <p className="form-content">
              Coverage( for: MEXICO/USA/CANADA, Below : $1,000,000 )
            </p>
          </div>
          <div className="col-md-2 text-right pl-0">
            <button className="btn-home-form"><TiArrowSortedDown /></button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 right-content">
        <div className="row">
          <div className="col-md-10 pr-0">
            <h5>
              Number of People
            </h5>
            <p className="form-content">
              Who needs coverage?
            </p>
          </div>
          <div className="col-md-2 text-center pl-0">
            <button className="btn-home-form"><TiArrowSortedDown/></button>
          </div>
        </div>
      </div>
      <div className="col-lg-12 blue-bg">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input type="email" id="email" name="email" placeholder="Email Address" />
          </div>
          <div className="col-md-3">
            <input type="submit" value="Get a Quote" />
            <p className="text-white quote-p">
              <span id="exclamation-quote">!</span>Quote is inclusive of all fees
            </p>
          </div>
        </div>
      </div>
    </Container>
    </form>
  </div>
)
export default HomeForm
