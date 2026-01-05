

import { Link } from "react-router-dom";

const Button = ({ text, class: className, url, onClick }) => {
  // If url exists → navigation button
  if (url) {
    return (
      <Link to={url} className={`btn ${className}`}>
        {text}
      </Link>
    );
  }

  // Otherwise → action button (logout)
  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

