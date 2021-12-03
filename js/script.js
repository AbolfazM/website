window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

const openingInsta = document.getElementById('insta');
const myinsta = document.getElementById('open_insta');

openingInsta.addEventListener('mouseover', () => {
    myinsta.style.visibility = 'visible';
});

openingInsta.addEventListener('mouseout', () => {
    myinsta.style.visibility = 'hidden';
});

const openingTele = document.getElementById('tele');
const mytele = document.getElementById('open_tele');

openingTele.addEventListener('mouseover', () => {
    mytele.style.visibility = 'visible';
});

openingTele.addEventListener('mouseout', () => {
    mytele.style.visibility = 'hidden';
});