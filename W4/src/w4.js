document.addEventListener('DOMContentLoaded', function () {
    let dragon = document.getElementById('dragon');

    dragon.addEventListener('mouseover', function () {
        this.innerHTML = '天龍國';
    })

    dragon.addEventListener('mouseout', function () {
        this.innerHTML = '台北市';
    })
})