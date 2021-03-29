import './Feedback.scss';
import { Component } from 'react';
import Statistics from '../Statistics/';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <>
        <section className="feedback__section">
          <p className="feedback__label">Please, Leave feedback</p>
          <ul className="feedback__list">
            <li className="feedback__item">
              <button
                onClick={this.handleIncrementGood}
                className="feedback__button"
              >
                Good
              </button>
            </li>
            <li className="feedback__item">
              <button
                onClick={this.handleIncrementNeutral}
                className="feedback__button"
              >
                Neutral
              </button>
            </li>
            <li className="feedback__item">
              <button
                onClick={this.handleIncrementBad}
                className="feedback__button"
              >
                Bad
              </button>
            </li>
          </ul>
        </section>
        <Statistics />
      </>
    );
  }
}

export default Feedback;
