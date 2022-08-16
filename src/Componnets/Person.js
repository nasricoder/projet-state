import React from "react";

class Person extends React.Component{
constructor(){
    super()
    this.state={
        count : 0,
        Person : {
            fullname : ' NASRI AMIR',
            bio : [ '2022: DIGITAL MARKETEUR,  2023: DEVELOPPEUR GO MY CODE SCHOOL'   ],
            profession : 'WEB DEVELOPPPEUR' ,
    }
}
}
componentDidMount (){
    this.myInterval = setInterval (() => {
      this.setState ( a=> ( {

        count : this.state.count +1
      }))
        
    } ,1000 )
             
  }
render(){
    return(
        <>
        <h1> {this.state.Person.fullname } </h1>
        <h2> {this.state.count} </h2>
        <ul>
                {
                    this.state.Person.bio.map ((el,i,t) => <h2 key={i}>{el}</h2>)
                }
            </ul>
            <h3> {this.state.Person.profession} </h3>
            <img src="/1.jpg" alt="not found" />

        </>
    )
} }

export default Person;