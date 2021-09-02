// const upsAPI = require ('ups-nodejs-sdk');


// const ups = new upsAPI({
//     enviornment: 'sandbox',
//     access_key : process.env.UPSKEY,
//     username: process.env.UPSUSER,
//     password : process.env.UPSPASSWORD,
//     imperial: true
// })

// const upsRate = async (req, res) => {
//     const result = await (new Promise((resolve, reject) => {
//         ups.rates(req.body, (err, result) => {
//             if (err){
//                 reject();
//             }else{
//                 resolve(result)
//             }
//         })
//     }))
//     return(res.json(result))        
// }

async function upsRate(url='', data={}) {
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

upsRate('https://wwwcie.ups.com/ship/v1801/rating/Shop', info)
    .then(data => {
        console.log(data.RateResponse.RatedShipment)
    })

module.exports = {
    upsRate
};