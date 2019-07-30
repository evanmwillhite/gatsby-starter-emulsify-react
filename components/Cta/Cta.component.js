/**
 * @file Cta.component.js
 * Exports a CTA component.
 */

import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import './Cta.css';

import Button from "../Button/Button.component";


/**
 * Component that renders a button with a click handler.
 */
const Cta = props => {
  const { heading, content } = props;

  return (
    <div class="cta">
      <h2>{heading}</h2>
      <Button>{content}</Button>
    </div>
  );
};

Cta.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
};

Cta.defaultProps = {
  heading: '',
  content: '',
};

export default Cta;
