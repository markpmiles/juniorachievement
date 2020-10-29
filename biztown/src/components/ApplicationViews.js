import React from "react";
import { Route, Redirect } from "react-router-dom";
import AboutMe from "./AboutMe"
import AboutMyFuture from "./AboutMyFuture"

const ApplicationViews = () => {

  return(
    <>
      <Route
        path="/aboutme"
        render={()=> (
          <AboutMe />
        )}
      />
      <Route
        path="/aboutmyfuture"
        render={()=> (
          <AboutMyFuture />
        )}
      />
    </>
  )
}

export default ApplicationViews