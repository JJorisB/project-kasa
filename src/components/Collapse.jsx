import React, { useState } from "react";
import "./Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h2 onClick={toggle} className="collapse-title">
          {title}
        </h2>
        <div className="chevron">
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} className="icon-chevronup" />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="icon-chevrondown"
            />
          )}
        </div>
      </div>
      <div className="text-collapse-container">
        <div className={isOpen ? "text-collapse" : ""}>
          <p>{isOpen && content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
