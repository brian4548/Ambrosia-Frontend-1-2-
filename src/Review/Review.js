import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Review (){
    return(
        <> 
        <Form>
  {/* <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> */}
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>Stanton's City Bites</option>
      <option>The Burger Joint</option>
      <option>House of Fries</option>
      <option>Rodeo Goat</option>
      <option>Bubba's Texas Burger Shack</option>
      <option>Champ Burger</option>
      <option>Pappas Burger</option>
      <option>The Burger Joint</option>
      
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>title</Form.Label>
    <Form.Control as="textarea" rows={1} />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

<Button as="input" type="submit" value="Submit" />{' '}

        </>
    )
}