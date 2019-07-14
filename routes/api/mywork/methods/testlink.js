var Http = require('http');
var Https = require('https');
var axios = require('axios');

async function testlinkArray(array) {
    let results = [];
    /*     for(let i=0;i<array.length;i++){
            console.log(array[i]);
            let res=await startRequest(array[i]);
            if (res.statusCode === 200) {
                res.destroy();
                results.push(array[i]);
            } else {
                res.destroy();
            }
        } */

    let promiseArray = [];
    array.forEach(element => {
        if (element.toLowerCase().indexOf("https") >= 0) {
            promiseArray.push(startRequestHttps(element));
        }
        else {
            promiseArray.push(startRequest(element));
        }
    });
    let resArray = await Promise.all(promiseArray);
    for (let res of resArray) {
        //console.log(res.req.agent.protocol);
        if (res.statusCode === 200) {
            results.push(res.req.agent.protocol+"//"+res.req.socket._host + res.req.path);
        }
        res.destroy();
    }

    return results;

    function startRequest(url) {
        return new Promise((resolve, reject) => {
                let req = Http.request(url, { timeout: 3000 }, res => { resolve(res) });
                req.end();
        });
    }
    function startRequestHttps(url) {
        return new Promise(function (resolve, reject) {
                let req = Https.request(url, { timeout: 3000 }, res => { resolve(res) });
                req.end();
        });
    }
    /* function testlink(url, callback) {
        let req = Http.request("url", { timeout: 3000 }, callback);
        console.log(111111);
        req.end();
    }
    console.log(2222222);
    function series(url) {
        if (typeof (url) == 'string') {
            console.log(333333333333);
            testlink(url, res => {
                if (res.statusCode === 200) {
                    console.log(444444);
                    res.destroy();
                    results.push(url);
                } else {
                    res.destroy();
                }
                return series(array.shift());
            });
        }else{
            console.log(555555);
            return results;
        }
    }
    console.log(66666666);
    series(array.shift());
    console.log(777777777); */
}

module.exports = testlinkArray;