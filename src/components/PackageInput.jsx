import React, { useState } from 'react';
import ShippingAddress from './ShippingAddress';
import RateData from './RateData';
import {sample1, sample2, sample3} from './SampleData/samples'
import { FaUps } from "react-icons/fa";
import { Form, Col, Row, Button, Tabs, Tab, Card} from "react-bootstrap";



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
  const [apiError, setApiError] = useState()

  const handleTest = (value) => {
    setLoading(true)
    setShipper(value.Shipper)
    setShipFrom(value.Shipper)
    setShipTo(value.ShipTo)
    setServiceCode(value.Service.Code)
    setPackagingCode(value.Package.PackagingType.Code)
    setShipmentTotalWeight(value.ShipmentTotalWeight.Weight)
    setPackageLength(value.Package.Dimensions.Length)
    setPackageWidth(value.Package.Dimensions.Width)
    setPackageHeight(value.Package.Dimensions.Height)
    setPackageWeight(value.Package.PackageWeight.Weight)
    setLoading(false)
  }

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
    setApiError("")
    const result = await res.json()
    
    if(!!result.RateResponse){
      setRateData(result.RateResponse.RatedShipment)
    }else if (!!result.response.errors){
      setApiError(result.response.errors[0].message)
    }
    
    setLoading(false)
  }

  return (
    <>
    <Card>
      <Card.Title><FaUps size={"42"}/> UPS Shipping Rate Calucator</Card.Title>
      <Card.Body>
        <Form autoComplete="off">
          <Row>
            <Tabs defaultActiveKey="shipper">
              <Tab eventKey="shipper" title="Shipper">
                <Row>
                  <Col>
                    <ShippingAddress key="shipper" shippingInfo={Shipper} onChange={setShipper} />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="shipfrom" title="Ship From"> 
                <Row>
                  <Col>
                    <Form.Label>Ship From (Ignore if Same as Shipper)</Form.Label>
                    <ShippingAddress key="shipfrom" shippingInfo={ShipFrom} onChange={setShipFrom} />
                  </Col>
                </Row>
              </Tab>
            <Tab eventKey="shipto" title="Ship To">
              <Row>
                <Col>
                  <ShippingAddress key="shipto" shippingInfo={ShipTo} onChange={setShipTo} />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="packageInfo" title="Package Info">
              <Row>
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
                  <div>Package Type</div>
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
                <Col>
                  <div>Service Type</div>
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
                </Col>
              </Row>

              </Tab>
            </Tabs>
          </Row>
          <br />
          <Button disabled={loading} variant="primary" onClick={handleSubmit}>Submit</Button>
        </Form>

        </Card.Body>
      </Card>
      <Button disabled={loading} variant="warning" value={sample1} onClick={() => handleTest(sample1)}>Test 1</Button>
      <Button disabled={loading} variant="danger" value={sample2} onClick={() => handleTest(sample2)}>Test 2</Button>
      <Button disabled={loading} variant="info" value={sample3} onClick={() => handleTest(sample3)}>Test 3</Button>
      <div>
        {!!apiError && <div>{apiError}</div>}
        </div>
      <Row xs={2} md={4}>
        {!!rateData && rateData.map((value, index) => <Col key={`spa-${index}`}><div ><RateData {...value}/></div></Col> )
        }
      </Row>
    </>
  );
}

export default PackageInput;
