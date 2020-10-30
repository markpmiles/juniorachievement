import React, { useRef } from "react"
import TableRow from "./TableRow"
import { Table } from 'reactstrap';

const AboutMe = () => {
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()
  const input4 = useRef()

  const handle = (e) => {
    e.preventDefault();




  }

  const prompts = ["I plan to start using a personal budget.", "I intend to start saving money for the future.", "I will think more about financial issues in my future."]

  return(
    <>
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>ABOUT ME...</th>
            <th>Not Likely</th>
            <th>Somewhat Likely</th>
            <th>Very Likely</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt, idx) => (
            <TableRow innerRef={`input${idx + 1}`} prompt={prompt} idx={idx} aboutMe={true} />
          ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default AboutMe