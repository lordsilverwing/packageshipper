import React, {useState, useEffect} from 'react'
import { Form, Col, Row } from "react-bootstrap";

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
    }, [Name, Street, City, StateProvinceCode, PostalCode, CountryCode])
    

    return (<>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="First and Last" type="text" value={Name} onChange={(evt) => setName(evt.target.value)} />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>Street</Form.Label>
                <Form.Control placeholder="123 Aspent St" type="text" value={Street} onChange={(evt) => setStreet(evt.target.value)} />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City" type="text" value={City} onChange={(evt) => setCity(evt.target.value)} />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control placeholder="State" type="text" value={StateProvinceCode} onChange={(evt) => setStateProvinceCode(evt.target.value)} />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Zipcode</Form.Label>
                <Form.Control placeholder="Zipcode" type="text" value={PostalCode} onChange={(evt) => setPostalCode(evt.target.value)} />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Country</Form.Label>
                <Form.Control placeholder="US" type="text" value={CountryCode} onChange={(evt) => setCountryCode(evt.target.value)} />
            </Form.Group>
            
        </Row>
	</>);

}

export default ShippingAddress;