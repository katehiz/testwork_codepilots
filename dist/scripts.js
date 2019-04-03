function animateCols() {
    let cols = document.querySelectorAll('.columns-bg__item');
    cols.forEach( function (col) {
        col.classList.add('animated');
    });
}

window.onload = function () {
    animateCols();
};