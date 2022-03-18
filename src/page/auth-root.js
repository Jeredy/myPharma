import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ children, currentAdmin }) => {
  return currentAdmin === null ? <Navigate to="/" replace /> : children;
};

const mapStateToProps = (state) => ({
  currentAdmin: state.admin.currentAdmin,
});

export default connect(mapStateToProps)(AuthRoute);
