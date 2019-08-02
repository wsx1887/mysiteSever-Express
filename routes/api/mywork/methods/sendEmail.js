let emailTransporter = require('../../../../common/emailTransporter.js');

async function sendEmailArrayAll(array) {
    let promiseArray = [];
    array.forEach(element => {
        promiseArray.push(sendEmailOne(element));
    });
    let resArray = await Promise.all(promiseArray);
    return resArray;
}
async function sendEmailArrayOnebyone(array) {
    //let promiseArray = [];
    for (let i = 0; i < array.length; i++) {
        await sendEmailOne(array[i]);
    }
}
async function sendEmailOne(message) {
    return new Promise((resolve, reject) => {
        emailTransporter.sendMail(message, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}
module.exports = { sendEmailArrayAll, sendEmailArrayOnebyone, sendEmailOne };
