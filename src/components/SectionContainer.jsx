import React from "react";
import PropTypes from "prop-types";

export default function SectionContainer(props) {
  const {
    isGrey,
    className,
    hasTitleUnderLine,
    title,
    children,
    isFooter
  } = props;
  return (
    <section
      className={`container-fluid pb-4 ${isGrey ? "bg-grey" : null} ${
        className ? className : ""
      }`}
    >
      {title ? (
        <div className={`${hasTitleUnderLine ? "py-5" : "pt-5"}`}>
          <h3 className="font-size-5 text-center">{title}</h3>
          {hasTitleUnderLine ? (
            <div className="titleUnderLine text-center mx-auto bg-primary mt-4"></div>
          ) : null}
        </div>
      ) : null}
      {
        <div className="row justify-content-center">
          <div className="row col-10">{children}</div>
        </div>
      }
    </section>
  );
}

SectionContainer.propTypes = {
  title: PropTypes.string,
  isGrey: PropTypes.bool,
  hasTitleUnderLine: PropTypes.bool,
  isFooter: PropTypes.bool,
  classNams: PropTypes.string
};

SectionContainer.defaultProps = {
  hasTitleUnderLine: true,
  isGrey: false,
  isFooter: false
};
