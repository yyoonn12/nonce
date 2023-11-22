function addBulletAni() {
        var c = document.getElementById("bullet");
        console.log(c);
        c.className += " ani";
}


function deleteC() {
        setTimeout(function(){
                var c = document.getElementById("bullet");
                c.classList.remove('ani');      
        }, 1000);
}

function addFrogAni() {
        var c = document.getElementById("frog");
        console.log(c);
        c.className += " ani";

        var s = document.getElementById("steel");
        console.log(c);
        s.className += " ani";
}


function deleteF() {
        setTimeout(function(){
                var c = document.getElementById("frog");
                c.classList.remove('ani');      
        }, 5000);

        setTimeout(function(){
                var s = document.getElementById("steel");
                s.classList.remove('ani');      
        }, 5000);
}
