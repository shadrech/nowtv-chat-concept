import React from "react";
import { connect } from "react-redux";

import AppBody from "../components/AppBody";
import { makeActiveMember, clearActiveMember, fetchData } from "../store/actions";

const Container = props => <AppBody {...props} />;

const mapStateToProps = ({messages, members, activeMember, loading, error}) => ({
    messages,
    members,
    activeMember,
    loading,
    error
  });
  
  export default connect(mapStateToProps, {
    makeActiveMember,
    clearActiveMember,
    fetchData
  })(Container);
