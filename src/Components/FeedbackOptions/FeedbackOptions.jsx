import './FeedbackOptions.scss';
import propTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className="feedbackOptions">
      {options.map(option => (
        <button key={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
};

export default FeedbackOptions;
