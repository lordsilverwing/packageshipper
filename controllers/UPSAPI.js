const fetch = require('node-fetch');

    const serviceCodeDescriptionMap ={
        "14" : "UPS Next Day Air Early",
        "01" : "UPS Next Day Air",
        "13" : "UPS Next Day Air Saver",
        "59" : "UPS 2nd Day Air A.M.",
        "02" : "UPS 2nd Day Air",
        "12" : "UPS 3 Day Select",
        "03" : "UPS Ground"
}

const getServiceDescription = (service) => ({
    ...service, 
    Description : serviceCodeDescriptionMap[service.Code]
})

async function upsRate(req, res) {
    const response = await fetch('https://wwwcie.ups.com/ship/v1801/rating/Shop', {
        method: 'POST',
        headers: {
            'AccessLicenseNumber': process.env.UPSKEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            RateRequest : {
                "Request":{
                    "SubVersion":"1703",
                    "TransactionReference":{
                    "CustomerContext":" "
                    }
                },
                Shipment : req.body
            }
        })
        
    });
    const results = await response.json();
    results.RateResponse.RatedShipment = results.RateResponse.RatedShipment.map(r => ({
        ...r,
        Service: getServiceDescription(r.Service) 
        }))
    
    return res.json(results)
}

module.exports = {
    upsRate,
    getServiceDescription
};