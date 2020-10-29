import React from "react"
import {Label, Input} from 'reactstrap';

const TableRow = (props) => {
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()
  const input4 = useRef()

  

  return(
    <tr>
      {props.aboutMe ? 
        <>
          <th scope="row">{props.idx + 23}</th>
          <td>{props.prompt}</td>
          <td>
            <Label check>
              <Input type="radio" ref={input1} name={`radio${props.idx}`} value="Not Likely" required></Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input type="radio" ref={input2} name={`radio${props.idx}`} value="Somewhat Likely" required></Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input type="radio" ref={input3} name={`radio${props.idx}`} value="Very Likely" required></Input>
            </Label>
          </td>
        </>
      : null}
      {props.aboutMyFuture ? 
      <>
        <th scope="row">{props.idx + 26}</th>
        <td>{props.prompt}</td>
          <td>
            <Label check>
              <Input type="radio" ref={input1} name={`radio${props.idx}`} value={1} required></Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input type="radio" ref={input2} name={`radio${props.idx}`} value={2} required></Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input type="radio" ref={input3} name={`radio${props.idx}`} value={3} required></Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input type="radio" ref={input4} name={`radio${props.idx}`} value={4} required></Input>
            </Label>
        </td>      
      </>
      : null}
    </tr>
  )
}

export default TableRow