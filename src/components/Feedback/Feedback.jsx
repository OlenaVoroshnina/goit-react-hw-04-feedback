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
  let total = good + neutral + bad;
  let positiveFeedbackPercentage = Math.round((good / total) * 100);

  const handleIncrementGood = (option) => {
    if (option === 'good') setGood(prevState => prevState + 1);
    if (option === 'neutral') setNeutral(prevState => prevState + 1);
    if (option === 'bad') setBad(prevState => prevState + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={handleIncrementGood}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

