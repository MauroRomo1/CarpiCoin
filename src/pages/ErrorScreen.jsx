import React from "react";

import carpiError from "../img/footer-logo/capri-error.png";

const ErrorScreen = () => {
  return (
    <div className="container text-center my-3">
      <div className="row">
        <div className="col">
          <h1 className="titulo">Page Not Found</h1>
          <img className="img-fluid" src={carpiError} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
