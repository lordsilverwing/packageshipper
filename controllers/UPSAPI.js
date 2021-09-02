const fetch = require('node-fetch');

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
    res.json(results)
}

module.exports = {
    upsRate
};


// "Request":{
//     "SubVersion":"1703",
//     "TransactionReference":{
//        "CustomerContext":" "
//     }
//  },