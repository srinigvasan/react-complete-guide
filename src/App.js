import React, { Component } from 'react';
//import Radium ,{ StyleRoot } from 'radium'
import Styled from 'styled-components'
import './App.css';
import Person from './Person/Person'

const StyledButton=Styled.button`
   background-color: green;
   color:white;
   font:inherit;
   border: 1px solid orange;
   padding:8px;
   cursor:pointer;
   &:hover {
      background-color:lightgreen;
      color:black;
   }
  `;

class App extends Component {
  state = {
    persons: [
      { id:1,name: 'srinivasan', age: 30 },
      { id:2,name: 'visal', age: 26 },
      { id:3,name: 'mridula', age: 2 }
    ],
    showpersons: false
  }
   
  switchNameHander = (newNmame) => {
    console.log("I am called")
    //Do not DO THIS !!! this.state.persons[1].name='chella visalam'
    this.setState({
      persons: [
        { name: 'srinivasan', age: 30 },
        { name: newNmame, age: 26 },
        { name: 'mridula', age: 2 }
      ]
    })

  }

  togglePersonHander = () => {
    let doshow = this.state.showpersons;
    this.setState({ showpersons: !doshow })
  }

  namechangehandler = (event,id) => {
    const personIndex=this.state.persons.findIndex((person)=>person.id===id)
    const person={...this.state.persons[personIndex]}
    person.name=event.target.value;
    const persons=[...this.state.persons]
    persons[personIndex]=person;
    this.setState(
      {
        persons: persons
      }

    )
  }

  deletePersonHandler=(index)=>{
    //const persons=this.state.persons.slice();
    const persons=[...this.state.persons];
    persons.splice(index,1)
    this.setState({persons:persons})
  }

  render() {
  
    const style = {
     
    };
    let persons = null;
    if (this.state.showpersons) {
      persons =
        (
          <div>
            {
              this.state.persons.map((person,index)=> {
                return <Person name={person.name} key={person.id} change={(event)=>this.namechangehandler(event,person.id)} click={this.deletePersonHandler.bind(this,index)} age={person.age} />;
              })
            }
          </div>
        );
        style.backgroundColor='red'
        style[':hover']={
         backgroundColor:'salmon',
         color:'black'
        }
    }

    const classes=[];
    if(this.state.persons.length<=2){
    classes.push('red') //classes=['red']
    }
    if(this.state.persons.length<=1){
      classes.push('bold') //classes=['bold']
    }


    return (
      //<StyleRoot>
      <div className="App">
        <h1>Welcome to React</h1>
        <p className={classes.join(' ')}>I am working</p>
        <StyledButton onClick={this.togglePersonHander}>My button</StyledButton>
        {persons}
      </div>
      //</StyleRoot>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m to React'));
    
  }
}

//export default Radium(App);

export default App;