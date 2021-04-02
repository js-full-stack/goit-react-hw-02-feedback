import propTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

Notification.defaultProps = {
  message: null,
};

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
