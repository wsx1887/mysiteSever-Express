let emailTransporter = require('../../../../common/emailTransporter.js');

async function sendEmailArray(array) {
    let promiseArray = [];
    array.forEach(element => {
        promiseArray.push(startSend(element));
    });
    //try {
        let resArray= await Promise.all(promiseArray);
        return resArray;
    //} catch (error) {
        //console.log(error);
        //return error;
    //}
    function startSend(message) {
        return new Promise((resolve, reject) => {
            //console.log(message);
            emailTransporter.sendMail(message, (err, info) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(info);
                }
            })
        });
    }
}
async function sendEmailArray1(array) {
    //let promiseArray = [];
    for(let i=0;i<array.length;i++){
        await startSend(array[i]);
    }

    function startSend(message) {
        return new Promise((resolve, reject) => {
            //console.log(message);
            emailTransporter.sendMail(message, (err, info) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(info);
                }
            })
        });
    }
}

module.exports = sendEmailArray1;
