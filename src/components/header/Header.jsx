import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaRupeeSign } from "react-icons/fa"
import { PiHandbagSimpleFill } from "react-icons/pi"
import "./header.css"
import Badge from "@mui/material/Badge"
import MailIcon from "@mui/icons-material/Mail"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { BsHandbagFill } from "react-icons/bs"
import Stack from "@mui/material/Stack"
import { IoPersonSharp } from "react-icons/io5"

function Header() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "wersel.png" }) {
        id
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Navbar expand="lg" className="">
      <Container className="d-flex justify-content-evenly">
        <Navbar.Brand href="#home" className="navbar-brand ms-5">
          <Img fixed={data.image.childImageSharp.fixed} alt="Wersel Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link href="#home" className="nav-link">
              HOME
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              ABOUT
            </Nav.Link>
            <NavDropdown title="COURSES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="nav-link">
              CONTACT
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              BLOGS
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="nav-link demo d-flex align-items-center gap-3"
            >
              <FaRupeeSign />
              <span className="d-none d-md-inline">0.00</span>{" "}
              <Stack
                spacing={4}
                direction="row"
                sx={{ color: "action.active" }}
                className="mt-1"
              >
                <Badge color="secondary" badgeContent={9}>
                  <BsHandbagFill />
                </Badge>
              </Stack>
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              <IoPersonSharp style={{ fontSize: "25px", marginTop: "-7px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
