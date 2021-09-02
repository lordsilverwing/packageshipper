import React, {useState, useEffect} from 'react'
import { Form, Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";

function ShippingAddress({
    shippingInfo: initialShippingInfo = {
        Name: "",
        Address:{
            AddressLine:"",
                Street:"",
                City:"",
                StateProvinceCode:"",
                PostalCode:"",
                CountryCode:"US"
        }
    },
    onChange = () => {}
},

) 
{
 
    const [Name, setName] = useState(initialShippingInfo.Name)
    const [Address, setAddress] = useState(initialShippingInfo.Address)
    const [Street, setStreet] = useState(initialShippingInfo.Address.Street)
    const [City, setCity] = useState(initialShippingInfo.Address.City)
    const [StateProvinceCode, setStateProvinceCode] = useState(initialShippingInfo.Address.StateProvinceCode)
    const [PostalCode, setPostalCode] = useState(initialShippingInfo.Address.PostalCode)
    const [CountryCode, setCountryCode] = useState(initialShippingInfo.Address.CountryCode)

    useEffect(()=>{
        onChange({
            Name,
            Address : {
                Street,
                City,
                StateProvinceCode,
                PostalCode,
                CountryCode
            }
        })
    }, [Name, Address])
    

    return (<>
		<Form autoComplete="off">
        <Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Name</Form.Label>
					<Form.Control placeholder="First and Last" type="text" value={Name} onChange={(evt) => setName(evt.target.value)} />
				</Form.Group>
			</Form.Row>
            <Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Street</Form.Label>
					<Form.Control placeholder="123 Aspent St" type="text" value={Address.AddressLine} onChange={(evt) => setStreet(evt.target.value)} />
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>City</Form.Label>
					<Form.Control placeholder="City" type="text" value={Address.City} onChange={(evt) => setCity(evt.target.value)} />
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>State</Form.Label>
					<Form.Control placeholder="State:CA" type="text" value={Address.StateProvinceCode} onChange={(evt) => setStateProvinceCode(evt.target.value)} />
				</Form.Group>
                <Form.Group as={Col}>
					<Form.Label>Country</Form.Label>
					<Form.Control placeholder="US" type="text" value={Address.PostalCode} onChange={(evt) => setPostalCode(evt.target.value)} />
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>Zip</Form.Label>
					<Form.Control placeholder="Zip" type="text" value={Address.CountryCode} onChange={(evt) => setCountryCode(evt.target.value)} />
				</Form.Group>
                
			</Form.Row>
		</Form>
	</>);

}

export default ShippingAddress;