import * as React from "react"
import Layout from "../components/Layout"
import styled, { keyframes } from "styled-components"
import "../styles/global.css"
import { FaRegCirclePlay } from "react-icons/fa6"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Categories from "../components/categories/Categories"
import Homepage from "../components/HomePage/Homepage"
import Cards from "../components/Cardbar/Cards"
// import Card from "../components/Card/Card"
//  import { Card } from "react-bootstrap"
// import Cards from "../components/categories/Categories"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(70px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInFromBottoms = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Container = styled.div`
  animation: ${fadeIn} 1s ease-out;
`

const Button = styled.button`
  animation: ${fadeIn} 1s ease-out;
`

const Heading1 = styled.h1`
  animation: ${slideInFromBottom} 1s ease-out;
`

const Paragraph = styled.p`
  animation: ${slideInFromBottoms} 1s ease-out;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Column = styled.div`
  flex: 1;
  min-width: 300px; /* Ensure columns don't get too narrow on smaller screens */
`

const ImageColumn = styled(Column)`
  display: flex;
  align-items: flex-end;
`

const AnimatedImage = styled(Img)`
  animation: ${slideInFromRight} 1s ease-out;
  max-width: 100%;
  height: auto;
`

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ai1.png" }) {
        id
        childImageSharp {
          fixed(width: 460) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="container-fluid bg-dark d-flex justify-content-around align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Column className="text-white" style={{ marginTop: "100px" }}>
                <Paragraph>
                  PRACTICAL PROJECT BASED AI LEARNING EXPERIENCE
                </Paragraph>
                <Heading1>Transform your</Heading1>
                <Heading1>Future Career with</Heading1>
                <Heading1>AI Skills</Heading1>
                <Paragraph>
                  Wersel Workdesk offers project-based AI courses that <br />
                  empower you to innovate, earn certification, and build a<br />
                  future-proof career.
                </Paragraph>
                <div className="d-flex">
                  <Button className="btn">Register Now</Button>
                  <FaRegCirclePlay
                    style={{ fontSize: "70px", marginLeft: "40px" }}
                  />
                </div>
              </Column>
            </div>
            <div className="col-md-6 image-container">
              <AnimatedImage
                fixed={data.image.childImageSharp.fixed}
                alt="Wersel Logo"
                className="bottom-image"
                style={{ marginBottom: "100px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="container">
          <div
            className="row d-flex justify-content-center"
            style={{ textAlign: "left" }}
          >
            <div className="col-md-6">
              <h2 className="h2">Project Based Learning</h2>
              <p>
                Wersel Courses understand the importance of applying theoretical
                <br />
                knowledge to real-world scenarios. That’s why we incorporate
                <br />
                <b>Wersel Projects</b> – a cornerstone of our{" "}
                <b>
                  practical project-based<br></br> learning approach.
                </b>
              </p>
              <img
                src="https://wersel.in/wp-content/uploads/2024/04/group-of-young-female-and-male-college-students-on-2023-11-27-05-14-42-utc-scaled-1-1024x683.jpg"
                alt="AI Image"
                className="img-fluid"
                style={{ width: "500px" }}
              />
            </div>
            <div className="col-md-6">
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <Homepage />
      <Cards />
    </Layout>
  )
}

export default IndexPage
