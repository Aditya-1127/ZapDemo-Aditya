import React, { Component } from 'react';
import Calendar from 'react-calendar'


const occasion = [
  {
    key: 1, 
    text : 'Johns birthday',
    value : 'Birthday'
  },
  {
    key: 2, 
    text : 'Jims birthday',
    value : 'Birthday'
  },
  {
    key: 3, 
    text : 'Kims Anniversary',
    value : 'Anniversary'
  },
  {
    key: 4, 
    text : 'Marys Birthday',
    value : 'Birthday'
  },
  {
    key: 5, 
    text : 'Gordons Anniversary',
    value : 'Anniversary'
  },
  {
    key: 6, 
    text : 'Tims Birthday',
    value : 'Birthday'
  },  
]
class Services extends Component { 

  render() {
        return (
          <div>
            <Calendar
            />
          </div>
        )
      }
}   


export default Services