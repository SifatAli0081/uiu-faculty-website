import React from 'react'
import './faculty1.css'; 
const Faculty1 = (props) => {
    const {email,name,designation,education,salary} = props;
  return (
    <div>
        {name}<br/>
        {designation}<br/>
        {education}<br/>
        {email}<br/>
        {salary}
        <hr/>
    </div>
  )
}

export default Faculty1