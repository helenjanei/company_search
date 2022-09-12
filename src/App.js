
import  'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap'
import { useState} from 'react'
import Company from './Components/Company'

function App() {
const [searchInput, setSearchInput] = useState("");
const [companies, setCompanies ] = useState([]);

async function search() {
console.log(searchInput)


  var returnedCompanies = await fetch('https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=' + searchInput, {
    headers: {
    'x-api-key': ''
        }})
        .then(response => response.json())
        .then(data => { 
          console.log(data);
          setCompanies(data.items);
          });
}
console.log(companies)
  return (
    <>
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl placeholder='Search for company' type='input' onKeyPress={event => {
            if (event.key === "Enter") {
             search();
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={search} >
            Search
          </Button>
        </InputGroup>
      </Container>
      
      <Container>
        <Row className="mx-2 row row-cols-4">
          {companies.map( (company, index) => {
            console.log(company);
            return (
              <>
              <Card key={index}>
              <Company  key={index} {...company}/> 
              <Card.Body key={index}>
                  <Card.Title>{company.title}</Card.Title>
                  <p><strong>{company.description}</strong></p><p>{company.address_snippet}</p>
                </Card.Body>
              </Card>
              </>
            )
          })}
        </Row>
      </Container>
    </div>
    </>
  );
}

export default App;

