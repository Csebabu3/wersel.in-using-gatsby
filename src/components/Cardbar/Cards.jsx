import React from "react"
import { CiClock2, CiStar } from "react-icons/ci"
import { SlChart } from "react-icons/sl"
import styled, { keyframes } from "styled-components"

function Cards() {
  const slideInFromBottom = keyframes`
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `

  const Div = styled.div`
    animation: ${slideInFromBottom} 1s ease-out;
  `

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
          <div className="col-md-4">
            <Div>
              <div
                className="card p-3 shadow-lg p-3 mb-5 bg-body rounded"
                style={{
                  width: "22rem",
                  borderRadius: "12px",
                  border: "0",
                  outline: "none",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="https://wersel.in/wp-content/uploads/elementor/thumbs/program-code-on-computer-display-in-magnifying-glass-close-up-qm46w7qsph67rqaqe5ykml2cv9dyc8veu4tax42u74.jpg"
                  className="card-img-top img-fluid"
                  alt="Code on computer display"
                />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <p>PYTHON FOR BEGINNERS [AI-101]</p>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹25,000.00
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      15,000.00+
                    </span>
                  </h3>
                  <h5>18% GST</h5>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <div className="d-flex align-items-center mr-3">
                      <SlChart
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">Foundation</span>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <CiClock2
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">100 Hours</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <CiStar
                        style={{ backgroundColor: "yellow", fontSize: "20px" }}
                      />
                      <span className="ml-2">5.0</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4>Data Engineering, Data Analysis</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3">
                  <button className="bg-dark p-2 text-white border-0">
                    View Courses
                  </button>
                  <button className="bg-success p-2 text-white border-0">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <h1>hghj</h1>
      </div>
    </div>
  )
}

export default Cards
