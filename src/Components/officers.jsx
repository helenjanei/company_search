import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Officers=({props})=>{
    console.log(props);
    const {
        index,
        company_number,
        title,
        address_snippet,
    company_status, 
company_type,
date_of_creation, 
 } = props;
const date = date_of_creation;
const date_of_incorporation = date.toString();

    return(
        <>  
            <Card.Body key={index}>
                  <Card.Title>{title}</Card.Title>
                  <p>Company number<strong>{company_number}</strong></p>
                  <p>Registered office address</p>
                  <p><strong>{address_snippet}</strong></p>
                  <p>Company status</p>
                  <p><strong>{company_status}</strong></p>
                  <p>Company type</p>
                  <p><strong>{company_type}</strong></p>
                  <p>Incorporated on</p>
                  <p><strong>{date_of_incorporation}</strong></p>
                  


                  <Link to={`/officers/${company_number}`} ></Link>
                </Card.Body>
            
        </>
    )
}
export default Officers;

