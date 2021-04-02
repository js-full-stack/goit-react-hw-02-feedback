import Section from './Components/Section/';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const currentButton = event.currentTarget.innerText;

    this.setState(prevState => ({
      [currentButton]: prevState[currentButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, feedback) => acc + feedback,
      0,
    );
    return total;
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
