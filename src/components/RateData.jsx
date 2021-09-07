import React from "react"
import { Card } from "react-bootstrap";

function RateData({
    Service,
    TotalCharges,
}){

    return(
        <Card className="text-center">
            <Card.Title>{Service.Description}</Card.Title>
            <Card.Body>{TotalCharges.MonetaryValue}</Card.Body>
        </Card>
    )
}

export default RateData;