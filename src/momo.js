const crypto = require('crypto');
const fetch = require('node-fetch');

// parameters
const partnerCode = "MOMO";
const accessKey = "F8BBA842ECF85";
const secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
const requestId = partnerCode + new Date().getTime();
const orderId = requestId;
const orderInfo = "pay with MoMo";
const redirectUrl = "https://momo.vn/return";
const ipnUrl = "https://callback.url/notify";
const amount = "50000";
const requestType = "captureWallet";
const extraData = ""; // pass empty value if your merchant does not have stores

// before sign HMAC SHA256 with format
// accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

// puts raw signature
console.log("--------------------RAW SIGNATURE----------------");
console.log(rawSignature);

// signature
const signature = crypto.createHmac('sha256', secretkey)
    .update(rawSignature)
    .digest('hex');

console.log("--------------------SIGNATURE----------------");
console.log(signature);

// json object send to MoMo endpoint
const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
    lang: 'en',
});

// Create the HTTPS objects
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: requestBody,
};

// Send the request and get the response
console.log("Sending....");
fetch('https://test-payment.momo.vn/v2/gateway/api/create', options)
    .then(res => {
        console.log(`Status: ${res.status}`);
        console.log(`Headers: ${JSON.stringify(res.headers)}`);
        return res.json();
    })
    .then(body => {
        console.log('Body: ');
        console.log(body);
        console.log('payUrl: ');
        console.log(body.payUrl);
    })
    .catch(error => console.error(`Error: ${error}`));
