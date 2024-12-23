import React from "react"
import "./homepage.css"
import { FaRegCirclePlay } from "react-icons/fa6"

function Homepage() {
  return (
    <div className="container-fluid bg-light">
      <div className="container text-center">
        <div className="row">
          <div
            class="card"
            style={{ width: "18rem", padding: "40px" }}
            className="border-bottom"
          >
            <h2 className="h3">500+</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "18rem", padding: "40px" }}
            className="border-bottom"
          >
            <h2 className="h3">500+</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "18rem", padding: "40px" }}
            className="border-bottom"
          >
            <h2 className="h3">500+</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "18rem", padding: "40px" }}
            className="border-bottom"
          >
            <h2 className="h3">500+</h2>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex">
              <h2 style={{ fontWeight: "bolder" }}>
                Our Courses :<br></br>
                Supercharge<br></br>
                Your AI Journey
              </h2>
              <FaRegCirclePlay
                style={{ fontSize: "70px", marginLeft: "40px" }}
              />
              <h3>Watch Courses Explainer video</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
