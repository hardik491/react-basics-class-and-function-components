import React, { Component } from "react";
import "./styles.css";

class Company extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center">
          <span className="seperate-word-grey">ABC</span> Technology
        </h1>

        <br />

        <p className="lead">
          Top product development company with Agile methodology.
          Hire software developers to get complete product development solution
          from the best agile software . ABC Technology is an exclusive hub
          of top dedicated software developers, UI/UX designers, QA experts,
          and product managers with an incredibly rare and hidden talents you
          will ever come across. We let you access the top 1% IT talent from
          independent software developers to the fully managed teams.
        </p>
        <p className="lead">
          Timezone is never a constraint when you are working with ABC 
          Technology. We follow one very simple principle – our developers and 
          your time zone. Hire dedicated software developers from us and make 
          collaboration in a faraway to work according to your time zone, 
          deadline, and milestone.
        </p>
        <p className="lead">
          Whether you are looking for skilled developers in emerging 
          technologies or looking for an extended arms to augment your existing 
          team, we can lend a helping hand in both situations. We are a 
          full-stack software development company with 450+ skilled and 
          experienced software developers whom you can hire at your convenience 
          to address the ongoing business challenges.
        </p>
      </div>
    )
  }

}
export default Company;