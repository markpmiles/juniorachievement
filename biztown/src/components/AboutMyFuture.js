import React from "react"
import TableRow from "./TableRow"
import {Table } from 'reactstrap';

const AboutMyFuture = () => {

  const prompts = ["I will set goals for my future.", "I feel in control over how my future will turn out.", "Doing well at school is important to me.", "I expect to graduate from high school.", "I plan to attend at least two years in college.", "I think I will probably graduate from college.", "I believe I can create my own future."]

  return(
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>ABOUT MY FUTURE...</th>
          <th>Disagree</th>
          <th>Slightly Disagree</th>
          <th>Slightly Agree</th>
          <th>Agree</th>
        </tr>
      </thead>
      <tbody>
          {prompts.map((prompt, idx) => (
            <TableRow prompt={prompt} idx={idx} aboutMyFuture={true}/>
          ))}    
      </tbody>
    </Table>
  )
}

export default AboutMyFuture