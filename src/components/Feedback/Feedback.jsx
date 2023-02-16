import { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from 'components/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let total = 0;
    total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    let total = 0;
    total = good + neutral + bad;
    positiveFeedbackPercentage = Math.round((good / total) * 100);
    return positiveFeedbackPercentage;
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(good, neutral, bad)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// Feedback.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };

// class Feedback extends Component {
//     static defaultProps = {
//         initialGood: 0,
//         initialNeutral: 0,
//         initialBad: 0,
//     };
//     static propTypes = {
//         initialGood: PropTypes.number.isRequired,
//         initialNeutral: PropTypes.number.isRequired,
//         initialBad: PropTypes.number.isRequired,
//     }
//     state = {
//         good: this.props.initialGood,
//         neutral: this.props.initialNeutral,
//         bad: this.props.initialBad,
//     };
//     handleIncrement = (option) =>{
//         this.setState(prevState => ({
//             [option]: prevState[option] + 1,
//         }))
//     };
//     countTotalFeedback = () => {
//         let total = 0;
//         total = this.state.good + this.state.neutral + this.state.bad;
//         return total;
//     }
//     countPositiveFeedbackPercentage = () => {
//         let positiveFeedbackPercentage = 0;
//         let total = 0;
//         total = this.state.good + this.state.neutral + this.state.bad;
//         positiveFeedbackPercentage = Math.round(this.state.good / total * 100);
//         return positiveFeedbackPercentage;
//     }

//     render(){
//         const{good} = this.state;
//         const{neutral} = this.state;
//         const { bad } = this.state;
//         return (
//             <>
//             <Section title="Please leave feedback">
//                 <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}/>
//             </Section>
//             <Section title="Statistics">
//                 {this.countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
//             </Section>
//             </>
//         )
//     }
// };

// export default Feedback;
