import React from "react"
import {Label, Input} from 'reactstrap';

const TableRow = (props) => {  
  return(
    <tr>
      {props.aboutMe ? 
        <>
          <th scope="row">{props.idx + 23}</th>
          <td>{props.prompt}</td>
          <td>
            <Label check>
              <Input
              ref={props.inputs[props.idx]}
              type="radio" name={`radio${props.idx}`} 
              value={1} 
              required>
              </Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input
              innerRef={props.inputs[props.idx]}
              type="radio" name={`radio${props.idx}`}
              value={2}
              required>
              </Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input
              innerRef={props.inputs[props.idx]}
              type="radio" name={`radio${props.idx}`}
              value={3}
              required>
              </Input>
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
              <Input
              innerRef={props.inputs[props.idx]}
              type="radio" name={`radio${props.idx}`}
              value={1}
              required>
              </Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input
              innerRef={props.inputs[props.idx]}
              type="radio"
              name={`radio${props.idx}`}
              value={2}
              required>
              </Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input
              innerRef={props.inputs[props.idx]}
              type="radio"
              name={`radio${props.idx}`}
              value={3}
              required>
              </Input>
            </Label>
          </td>
          <td>
            <Label check>
              <Input
              innerRef={props.inputs[props.idx]}
              type="radio"
              name={`radio${props.idx}`}
              value={4}
              required>
              </Input>
            </Label>
        </td>      
      </>
      : null}
    </tr>
  )
}

export default TableRow