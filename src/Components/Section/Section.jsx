import './Section.scss';
import propTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <section className="section-feedback">
      {title !== null ? (
        <h2 className="section-feedback__title">{title}</h2>
      ) : null}
      {children}
    </section>
  );
};
Section.defaultProps = {
  title: null,
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};

export default Section;
