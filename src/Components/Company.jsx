import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Company=({props})=>{
    console.log(props);
    const {
        index,
        company_number,
        title,
        description,
        address_snippet, } = props;

    
    
    return(
        <>  
            <Card.Body key={index}>
                  <Link to={`/companyDetails/${company_number}`} ><Card.Title>{title}</Card.Title></Link>
                  <p><strong>{description}</strong></p><p>{address_snippet}</p>
                </Card.Body>
            
        </>
    )
}
export default Company;

