import React from "react"
import { Card } from "react-bootstrap";

function RateData({
    Service,
    TotalCharges,
}){
    let services =[
        {code:"14", description:"UPS Next Day Air Early"},
        {code:"01", description:"UPS Next Day Air"},
        {code:"13", description:"UPS Next Day Air Saver"},
        {code:"59", description:"UPS 2nd Day Air A.M."},
        {code:"02", description:"UPS 2nd Day Air"},
        {code:"12", description:"UPS 3 Day Select"},
        {code:"03", description:"UPS Ground"}

    ]
    let serviceDescription = ""

    for(let i = 0; i < services.length; i++){
        if(services[i].code === Service.Code){
            serviceDescription = services[i].description
        }
    }

    return(
        <Card>
            <Card.Title>{serviceDescription}</Card.Title>
            <Card.Body>{TotalCharges.MonetaryValue}</Card.Body>
        </Card>
    )
}

export default RateData;