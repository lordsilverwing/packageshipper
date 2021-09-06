import React, { useState } from 'react'
import ShippingAddress from './ShippingAddress'
import { Form, Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";



function PackageInput({
  Shipment: initialShipment = {
    ShipmentRatingOptions: {
      UserLevelDiscountIndicator: "FALSE"
    },
    Shipper: undefined,
    ShipTo: undefined,
    ShipFrom: undefined,
    Service: {
      Code: "",
    },
    ShipmentTotalWeight: {
      UnitOfMeasurement: {
        Code: "LBS",
        Description: "Pounds"
      },
      Weight: ""
    },
    Package: {
      PackagingType: {
        Code: "",
      },
      Dimensions: {
        UnitOfMeasurement: {
          Code: "IN"
        },
        Length: "",
        Width: "",
        Height: ""
      },
      PackageWeight: {
        "UnitOfMeasurement": {
          Code: "LBS"
        },
        Weight: ""
      }
    }
  }
}) {
  const [Shipper, setShipper] = useState(initialShipment.Shipper)
  const [ShipFrom, setShipFrom] = useState(initialShipment.ShipFrom)
  const [ShipTo, setShipTo] = useState(initialShipment.ShipTo)
  const [ServiceCode, setServiceCode] = useState(initialShipment.Service.Code)
  const [PackagingCode, setPackagingCode] = useState(initialShipment.Package.PackagingType.Code)
  const [ShipmentTotalWeight, setShipmentTotalWeight] = useState(initialShipment.ShipmentTotalWeight.Weight)
  const [PackageLength, setPackageLength] = useState(initialShipment.Package.Dimensions.Length)
  const [PackageWidth, setPackageWidth] = useState(initialShipment.Package.Dimensions.Width)
  const [PackageHeight, setPackageHeight] = useState(initialShipment.Package.Dimensions.Height)
  const [PackageWeight, setPackageWeight] = useState(initialShipment.Package.PackageWeight.Weight)
  const [loading, setLoading] = useState(false)
  const [rateData, setRateData] = useState()






  // const setDropoff = (dropoff) => {
  // 	setShipment(j => ({ ...j, ShipTo: { ...j.dropoff, ...dropoff }}));
  // }
  const handleSubmit = async () => {
    setLoading(true)
    const shipment = {
      ShipmentRatingOptions: {
        UserLevelDiscountIndicator: "FALSE"
      },
      Shipper,
      ShipFrom,
      ShipTo,
      Service: {
        Code: ServiceCode
      },
      ShipmentTotalWeight: {
        UnitOfMeasurement: {
          Code: "LBS",
          Description: "Pounds"
        },
        Weight: ShipmentTotalWeight
      },
      Package: {
        PackagingType: {
          Code: PackagingCode,
        },
        Dimensions: {
          UnitOfMeasurement: {
            Code: "IN"
          },
          Length: PackageLength,
          Width: PackageWidth,
          Height: PackageHeight
        },
        PackageWeight: {
          "UnitOfMeasurement": {
            Code: "LBS"
          },
          Weight: PackageWeight
        }
      }
    }
    const res = await fetch('http://localhost:3001/package/rate', {
      method: 'POST',
      cache: 'no-cache',
      mode: 'cors',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(shipment)
    })
    const result = await res.json()
    setRateData(result.response)
    // add result to frontend
    setLoading(false)
  }

  return (
    <div className="PackageInput">
      <Form autoComplete="off">
        <Row>
          <Row>
            <Col>
              <Form.Select value={ServiceCode} onChange={(evt) => setServiceCode(evt.target.value)}>
                <option>Select Service</option>
                <option value="01">Next Day Air</option>
                <option value="02">2nd Day Air</option>
                <option value="03">Ground</option>
                <option value="12">3 Day Select</option>
                <option value="07">Worldwide Express</option>
                <option value="08">Worldwide Expedited</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Shipper</Form.Label>
              <ShippingAddress key="shipper" shippingInfo={Shipper} onChange={setShipper} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Ship From</Form.Label>
              <ShippingAddress key="shipfrom" shippingInfo={ShipFrom} onChange={setShipFrom} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Ship To</Form.Label>
              <ShippingAddress key="shipto" shippingInfo={ShipTo} onChange={setShipTo} />
            </Col>
          </Row>

          <Col>
            <Form.Label>Total Item Weight</Form.Label>
            <Form.Control placeholder="In Pounds" type="text" value={PackageWeight} onChange={(evt) => setPackageWeight(evt.target.value)} />
            <Form.Label>Total Weight of Package</Form.Label>
            <Form.Control placeholder="In Pounds" type="text" value={ShipmentTotalWeight} onChange={(evt) => setShipmentTotalWeight(evt.target.value)} />
          </Col>
          <Col>
            <Form.Label>Package Dimensions</Form.Label>
            <Form.Control placeholder="Length in Inches" type="text" value={PackageLength} onChange={(evt) => setPackageLength(evt.target.value)} />
            <Form.Control placeholder="Width in Inches" type="text" value={PackageWidth} onChange={(evt) => setPackageWidth(evt.target.value)} />
            <Form.Control placeholder="Height in Inches" type="text" value={PackageHeight} onChange={(evt) => setPackageHeight(evt.target.value)} />
          </Col>
          <Col>
            <Form.Select value={PackagingCode} onChange={(evt) => setPackagingCode(evt.target.value)}>
              <option>Select Type of Package</option>
              <option value="00">Unknown</option>
              <option value="01">UPS Letter</option>
              <option value="02">Package</option>
              <option value="03">Tube</option>
              <option value="04">Pak</option>
              <option value="21">Express Box</option>
              <option value="24">25KG Box</option>
              <option value="25">10KG Box</option>
              <option value="30">Pallet</option>
              <option value="2a">Small Express Box</option>
              <option value="2b">Medium Express Box</option>
              <option value="2c">Large Express Box</option>
            </Form.Select>
          </Col>
        </Row>
        <Button disabled={loading} variant="primary" onClick={handleSubmit}>
          Submit
          </Button>
      </Form>
      <div>{!!rateData && <div>Panda</div>}</div>
    </div>
  );
}

export default PackageInput;
