function myFunction(e) {
    var x = e.clientX + 10;
    var y = e.clientY+ 10;
    document.getElementById("tooltip-text").style.left = x + "px";
    document.getElementById("tooltip-text").style.top = y + "px";
}


function removeH() {
    const modal = document.getElementById('modalContainer');
  modal.classList.remove('hidden');
};

function addH() {
    const modal = document.getElementById('modalContainer');
  modal.classList.add('hidden');
}


