import React from 'react';
//import Radium from 'radium'
import './Person.css'
const person = (props) => {
const style={
    // '@media(min-width:500px)':{
    //     width:'450px'
    // }
};
return (
<div className="Person" style={style}>
<p onClick={props.click}>I am a {props.name} and I am  {props.age} old</p>
<p>{props.children}</p>
<input type="text" onChange={props.change} defaultValue={props.name}></input>
</div>
);
}


//export default Radium(person);

export default person;