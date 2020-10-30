import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "./AboutMe"
import AboutMyFuture from "./AboutMyFuture"
import AboutMyFacilitators from "./AboutMyFacilitators"

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
      <Route
        path="/aboutmyfacilitators"
        render={()=> (
          <AboutMyFacilitators />
        )}
      />
    </>
  )
}

export default ApplicationViews