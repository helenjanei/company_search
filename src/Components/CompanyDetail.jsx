import React from "react";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Company(props) {
    console.log(props);

    async function search() {
        
    
    var companyNumber = await fetch('https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=' + searchInput, {
  headers: {
  'x-api-key': 'TAsYbq4ReC927KwPFHgWY62oR5FPNuht4q0NTlKN'
      }})
      .then(response => response.json())
      .then(data => { return data.items[0].company_number})

    }

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
export default Company;

