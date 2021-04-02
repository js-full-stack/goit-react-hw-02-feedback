import './Statistics.scss';
import propTypes from 'prop-types';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total > 0 ? (
    <ul className="statistics__list">
      <li className="statistics__item">
        <p className="statistics__text">
          Good: <span className="statistics__value">{good}</span>{' '}
        </p>
      </li>
      <li className="statistics__item">
        <p className="statistics__text">
          Neutral: <span className="statistics__value">{neutral}</span>
        </p>{' '}
      </li>
      <li className="statistics__item">
        <p className="statistics__text">
          Bad: <span className="statistics__value"> {bad}</span>
        </p>{' '}
      </li>
      <div className="statistics__results">
        <li className="statistics__item--total">
          <p className="statistics__text">
            Total: <span className="statistics__value"> {total} </span>
          </p>{' '}
        </li>

        <li className=" statistics__item--positiveFeedback">
          <p className="statistics__text">
            Positive Feedback:{' '}
            <span className="statistics__value">
              {total === 0 ? 0 : positivePercentage}%{' '}
            </span>
          </p>
        </li>
      </div>
    </ul>
  ) : (
    <Notification message="No feedback given" />
  );

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
