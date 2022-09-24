import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from "react-reveal/Reveal";
import Slider from "../components/Sliderhome";
import Abouthome from "../components/Abouthome";
import Carouselfeature from "../components/Carouselfeature";
import Carouselclient from "../components/Carouselclient";
import Carouselclientb from "../components/Carouselclientb";
import Carouselprojects from "../components/Carouselprojects";
import Carouselteam from "../components/Carouselteam";
import Accomplish from "../components/Accomplish";
import Carouselnews from "../components/Carouselnews";
import Footer from "../components/Footer";
import { Efect, Efect1, Efect2 } from "../styles/effect.styles";

const Home = ({ history }) => {
  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
          <div
            className="row"
            style={{
              position: "absolute",
              top: "15%",
              zIndex: "9",
              left: "5%",
            }}
          >
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3 mr-3">
                  <div
                    className="card mb-2"
                    style={{ width: "9.5rem", background: "#080808bf" }}
                  >
                    <div className="card-body p-3">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text " style={{ fontSize: "12px" }}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content. Some quick
                        example text to build on the card title and make up the
                        bulk of the card's content.\ Some quick example text to
                        build on the card title and make up the bulk of .
                      </p>
                      <button className="btn gold-btn">
                        <span className="shine"></span>
                        <span>Link</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-5">
                      <div
                        className="card mb-2"
                        style={{ width: "9.5rem", background: "#080808bf" }}
                      >
                        <div className="card-body p-3">
                          <h5 className="card-title">Card title</h5>
                          <p
                            className="card-text "
                            style={{ fontSize: "12px" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button className="btn gold-btn">Link </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div
                        className="card mb-2"
                        style={{ width: "9.5rem", background: "#080808bf" }}
                      >
                        <div className="card-body p-3">
                          <h5 className="card-title">Card title</h5>
                          <p
                            className="card-text "
                            style={{ fontSize: "12px" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button className="btn gold-btn">Link </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div
                        className="card mb-2"
                        style={{ width: "9.5rem", background: "#080808bf" }}
                      >
                        <div className="card-body p-3">
                          <h5 className="card-title">Card title</h5>
                          <p
                            className="card-text "
                            style={{ fontSize: "12px" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button className="btn gold-btn">Link </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div
                        className="card mb-2"
                        style={{ width: "9.5rem", background: "#080808bf" }}
                      >
                        <div className="card-body p-3">
                          <h5 className="card-title">Card title</h5>
                          <p
                            className="card-text "
                            style={{ fontSize: "12px" }}
                          >
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button className="btn gold-btn">Link </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Slider />
        </section>
      </Reveal>

      {/* <Reveal effect="fadeInUp">
        <Abouthome/>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Expertnesses</div>
            </div>
            <div className='col-12'>
              <Carouselfeature/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid bggray py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclient/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid bggray'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclientb/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid pb-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Projects</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Team</div>
            </div>
            <div className='col-12'>
              <Carouselteam/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <Accomplish/>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid pt-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Latest News</div>
            </div>
            <div className='col-12'>
              <Carouselnews/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Footer /> */}
    </div>
  );
};

export default withRouter(Home);
