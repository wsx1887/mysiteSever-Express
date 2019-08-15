function ajax110(url) {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (res) {
            resolve(res);
        };
        oReq.open("get", url, true);
        oReq.send();
    });
}
let  a=(async function (){
    var htmlText = await ajax110("https://code.jquery.com/jquery-3.4.0.js");
    window.htmlText=htmlText;
    console.log("1");
    return htmlText;
})();
console.log("2");
