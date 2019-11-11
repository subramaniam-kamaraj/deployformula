import React, {useState} from 'react';
import {Jumbotron, Container, Button, Alert, Input} from 'reactstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const [r, setradius] = useState (0);
  const [formula, setformula] = useState ('');
  const [area, setarea] = useState ('');
  let [dia, setdia] = useState (0);

  const findarea = () => {
    const PI = 3.14;

    setarea (eval (formula));
    setdia ((dia = r / 2));
    console.log (area);
  };

  return (
    <Container>
      <Jumbotron dark="true">
        <h1>Formula Calculator</h1>
        Radius  :
        <Input
          type="number"
          placeholder="eg: 8"
          onChange={event => {
            setradius (event.target.value);
          }}
        />
        Give Your formula  :
        <Input
          type="text"
          placeholder="eg: 2*PI*r*r"
          onChange={event => {
            setformula (event.target.value);
          }}
        /><br />
        <Button color="danger" block onClick={findarea}>
          <center>Calculate</center>
        </Button><br />
        <div>
          <Alert>
            <h2> Answer = {Math.floor (area)} </h2><br />
            <h2>Diameter is {dia}</h2>
          </Alert>
        </div>
      </Jumbotron>
    </Container>
  );
};

export default App;
