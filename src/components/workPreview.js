import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const WorkPreview = ({ title, path }) => (
  <div>
    <Link to={ path }>
      <h2>{ title }</h2>
    </Link>
  </div>
);

WorkPreview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default WorkPreview;
