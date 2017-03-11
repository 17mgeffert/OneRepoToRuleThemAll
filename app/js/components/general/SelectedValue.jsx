import React, { PropTypes } from 'react';

const SelectedValue = (props) => {
  return (
    <div className="Select-value" title={props.value.label}>
      <span className="Select-value-label">
        {props.children}
      </span>
    </div>
  );
};

SelectedValue.propTypes = {
  value: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SelectedValue;
