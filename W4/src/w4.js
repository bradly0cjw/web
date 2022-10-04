// change text when text is hover
document.addEventListener('DOMContentLoaded', function () {
    let dragon = document.getElementById('dragon');

    dragon.addEventListener('mouseover', function () {
        this.innerHTML = '天龍國';
    })

    dragon.addEventListener('mouseout', function () {
        this.innerHTML = '台北市';
    })
})
document.addEventListener('DOMContentLoaded', function () {
    let monkey = document.getElementById('monkey');

    monkey.addEventListener('mouseover', function () {
        this.innerHTML = '松山猴園';
    })

    monkey.addEventListener('mouseout', function () {
        this.innerHTML = '松山高中';
    })
})