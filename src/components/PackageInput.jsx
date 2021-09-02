import React from 'react'
import ShippingAddress from './ShippingAddress'
import { Form, Col, Button, InputGroup, FormControl } from "react-bootstrap";


function PackageInput({
  Shipment = intialShipment = {
    ShipmentRatingOptions:{
      UserLevelDiscountIndicator: FALSE
   },
   Shipper: {},
   ShipTo: {},
   ShipFrom: {},
   Service:{
    Code:"03",
    Description:"Ground"
  },
  ShipmentTotalWeight:{
    UnitOfMeasurement:{
       Code:"LBS",
       Description:"Pounds"
    },
    Weight: ""
  },
  Package:{
    PackagingType:{
       Code:"",
      Description:""
    },
    Dimensions:{
       UnitOfMeasurement:{
          Code:"IN"
       },
       Length:"",
      Width:"",
       Height:""
    },
    PackageWeight:{
        "UnitOfMeasurement":{
            Code:"LBS"
        },
        Weight:""
      }
    }
  }
}) {
  const [Shipment, setShipment] = useState(initialShipment);
  const [ShipFrom, setShipFrom] = useState(Shipment.ShipFrom)



	const setDropoff = (dropoff) => {
		setShipment(j => ({ ...j, ShipTo: { ...j.dropoff, ...dropoff }}));
	}

  
  return (
      <div className="PackageInput">
        <Form>
				<Row>
					<Col>
						<h3>Shipping Info</h3>
						<Form.Label>Ship From</Form.Label>
						<ShippingAddress key="shipfrom" shipfrom={Shipment.ShipFrom} onChange={setShipFrom} />
					</Col>
				</Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </div>
    );
  }
  
  export default PackageInput;



//   {
//     "RateRequest":{
//        "Request":{
//           "SubVersion":"1703",
//           "TransactionReference":{
//              "CustomerContext":" "
//           }
//        },
//        "Shipment":{
//           "ShipmentRatingOptions":{
//              "UserLevelDiscountIndicator":"FALSE"
//           },
//           "Shipper":{
//              "Name":"Billy Blanks",
//              "ShipperNumber":" ",
//              "Address":{
//                 "AddressLine":"366 Robin LN SE",
//                 "City":"Marietta",
//                 "StateProvinceCode":"GA",
//                 "PostalCode":"30067",
//                 "CountryCode":"US"
//              }
//           },
//           "ShipTo":{
//              "Name":"Sarita Lynn",
//              "Address":{
//                 "AddressLine":"355 West San Fernando Street",
//                 "City":"San Jose",
//                 "StateProvinceCode":"CA",
//                 "PostalCode":"95113",
//                 "CountryCode":"US"
//              }
//           },
//           "ShipFrom":{
//              "Name":"Billy Blanks",
//              "Address":{
//                 "AddressLine":"366 Robin LN SE",
//                 "City":"Marietta",
//                 "StateProvinceCode":"GA",
//                 "PostalCode":"30067",
//                 "CountryCode":"US"
//              }
//           },
//           "Service":{
//              "Code":"03",
//              "Description":"Ground"
//           },
//           "ShipmentTotalWeight":{
//              "UnitOfMeasurement":{
//                 "Code":"LBS",
//                 "Description":"Pounds"
//              },
//              "Weight":"10"
//           },
//           "Package":{
//              "PackagingType":{
//                 "Code":"02",
//                 "Description":"Package"
//              },
//              "Dimensions":{
//                 "UnitOfMeasurement":{
//                    "Code":"IN"
//                 },
//                 "Length":"10",
//                 "Width":"7",
//                 "Height":"5"
//              },
//              "PackageWeight":{
//                 "UnitOfMeasurement":{
//                    "Code":"LBS"
//                 },
//                 "Weight":"7"
//              }
//           }
//        }
//     }
//  }