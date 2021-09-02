const fetch = require("node-fetch");

// var request = new Request('https://wwwcie.ups.com/ship/v1801/rating/Shop', {
// 	method: 'POST', 
// 	headers: new Headers({
//         'AccessLicenseNumber': 'DDA3F96F08E4BD91',
// 		'Content-Type': 'application/json'
// 	});


info = {
    "RateRequest":{
       "Request":{
          "SubVersion":"1703",
          "TransactionReference":{
             "CustomerContext":" "
          }
       },
       "Shipment":{
          "ShipmentRatingOptions":{
             "UserLevelDiscountIndicator":"TRUE"
          },
          "Shipper":{
             "Name":"Billy Blanks",
             "ShipperNumber":" ",
             "Address":{
                "AddressLine":"366 Robin LN SE",
                "City":"Marietta",
                "StateProvinceCode":"GA",
                "PostalCode":"30067",
                "CountryCode":"US"
             }
          },
          "ShipTo":{
             "Name":"Sarita Lynn",
             "Address":{
                "AddressLine":"355 West San Fernando Street",
                "City":"San Jose",
                "StateProvinceCode":"CA",
                "PostalCode":"95113",
                "CountryCode":"US"
             }
          },
          "ShipFrom":{
             "Name":"Billy Blanks",
             "Address":{
                "AddressLine":"366 Robin LN SE",
                "City":"Marietta",
                "StateProvinceCode":"GA",
                "PostalCode":"30067",
                "CountryCode":"US"
             }
          },
          "Service":{
             "Code":"03",
             "Description":"Ground"
          },
          "ShipmentTotalWeight":{
             "UnitOfMeasurement":{
                "Code":"LBS",
                "Description":"Pounds"
             },
             "Weight":"10"
          },
          "Package":{
             "PackagingType":{
                "Code":"02",
                "Description":"Package"
             },
             "Dimensions":{
                "UnitOfMeasurement":{
                   "Code":"IN"
                },
                "Length":"10",
                "Width":"7",
                "Height":"5"
             },
             "PackageWeight":{
                "UnitOfMeasurement":{
                   "Code":"LBS"
                },
                "Weight":"7"
             }
          }
       }
    }
 }

async function postData(url='', data={}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'AccessLicenseNumber': 'DDA3F96F08E4BD91',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    });
    return response.json();
}

postData('https://wwwcie.ups.com/ship/v1801/rating/Shop', info)
    .then(data => {
        console.log(data.RateResponse.RatedShipment)
    })