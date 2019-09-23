(function(){
    var shopCart={
        getName(){
            let nameString='';
            let alist=document.querySelectorAll('.seller-mod__name___37vL8');
            alist.forEach(e=>nameString+=`${e.innerHTML}\n`);
            return nameString;
        },
        getDate(){
            let nameString='';
            let alist=document.querySelectorAll('.bought-wrapper-mod__create-time___yNWVS');
            alist.forEach(e=>nameString+=`${e.innerHTML}\n`);
            return nameString;
        }
    }

})();