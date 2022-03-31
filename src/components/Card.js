import React, { Component } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "../assets/people.png";
import Details from "../components/Details";
import { Link, BrowserRouter } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.sliderSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
    };

    this.state = {
      tutors: [],
      name: "",
      description: "",
      experstise: "",
      text: "",
      clicked: false,
      obj: {},
      active: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateBack = this.updateBack.bind(this);
  }
  componentDidMount() {
    fetch("tutors.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tutors: data });
        // console.log(this.state.tutors);
      })
      .catch(console.log);
  }

  handleChange = (e) => {
    var text_lower = e.target.value.toLowerCase();
    this.setState({ text: text_lower });
  };

  handleClick = (card_id) => {
    console.log(this.state.tutors);

    // console.log(card_id);
    this.setState({ clicked: true });
    // console.log(this.state.clicked);
    // data = this.state.tutors.find((data) => data.id === card_id);
    console.log(
      this.state.tutors.find((obj) => obj.id.toString() == card_id.toString())
    );
    this.setState(
      {
        obj: this.state.tutors.find(
          (obj1) => obj1.id.toString() == card_id.toString()
        ),
      },
      () => {
        console.log(this.state.obj);
      }
    );

    // this.setState({
    //   obj: this.state.tutors.find(
    //     (obj1) => obj1.id.toString() == card_id.toString()
    //   ),
    // });
    // // console.log(typeof this.state.obj);
    // // console.log(card_id);
    // console.log(this.state.obj);
  };

  updateBack = (state) => {
    this.setState({ active: state });
    console.log(this.state.active);
    // <Card />;
  };

  render() {
    return (
      <div>
        <div className="team-boxed">
          <br />
          <div className="topnav_card container-fluid">
            <div>
              <h5 id="navbar_title">Search for your tutor</h5>
            </div>
            <form id="form" role="search">
              <div className="input-group">
                <input
                  type="search"
                  id="query_card"
                  name="q"
                  placeholder="Enter Name, Subject"
                  aria-label="Search through site content"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>

          {this.state.clicked === false && (
            <div className="conatiner-fluid">
              <div className="row people">
                <div className="col item">
                  {this.state.text != null && (
                    <Slider {...this.sliderSettings}>
                      {this.state.tutors
                        .filter((val) => {
                          if (this.state.text === "") {
                            return null;
                          } else if (
                            val.name
                              .toLowerCase()
                              .match(this.state.text.toLowerCase()) ||
                            val.expertise
                              .toString()
                              .toLowerCase()
                              .includes(this.state.text.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((card) => (
                          <div className="card" key={card.id}>
                            <img className="rounded-circle center" src={img} />
                            <h5 className="name">{card.name}</h5>
                            <p className="description">{card.about_me}</p>
                            <p className="title">
                              Expertise: {card.expertise.join(", ")}
                            </p>
                            <Link to="/Details" state={card.id}>
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                              >
                                About Me
                              </button>
                            </Link>
                          </div>
                        ))}
                    </Slider>
                  )}

                  {this.state.text === "" && (
                    <Slider {...this.sliderSettings}>
                      {this.state.tutors.map((card) => (
                        <div className="card" key={card.id}>
                          <img className="rounded-circle center" src={img} />
                          <h5 className="name">{card.name}</h5>
                          <p className="description">{card.about_me}</p>
                          <p className="title">
                            Expertise: {card.expertise.join(", ")}
                          </p>
                          <Link to="/Details" state={card.id}>
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                            >
                              About Me
                            </button>
                          </Link>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
              </div>
            </div>
          )}

          {this.state.clicked ? <Details card_data={this.state.obj} /> : null}
        </div>
      </div>
    );
  }
}

export default Card;
