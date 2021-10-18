/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './TeacherInfo.css'

export default ({nameFirst, nameLast, onlineAvailability, specialization, contactInformation}) => (

<h2 className="contact">
<ul>
{`First Name: ${nameFirst}                 
Last Name: ${nameLast}                      
Online Availability: ${onlineAvailability} 
Specialty: ${specialization}
Contact Information: ${contactInformation}`}</ul></h2>

 );

