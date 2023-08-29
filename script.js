
    var num = document.querySelector(".display");
    var btn1 = document.getElementById("btn-1");

    function func() {
        var x = Math.random();
        var int = 100 * x;
         var randomNum = Math.floor(int); 
        num.textContent = randomNum;
    }

    btn1.addEventListener("click", func);


/*Other (logical) approach to calc a random number is 
num*(UL-LL)+1
*/