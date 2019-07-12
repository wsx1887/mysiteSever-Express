var Http = require('http');

function testlinkArray(array) {
    let results = [];
    function startRequest(url) {
        return new Promise((resolve, reject) => {
            let req = Http.request('url', { timeout: 3000 }, resolve);
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