$(document).ready(function() {
    $('#BD-cakes').click(function () {
        $('html, body').animate({
            scrollTop: $('#birthday-cakes').offset().top
        }, 1600);
    });
});

$(document).ready(function() {
    $('#sho-cakes').click(function () {
        $('html, body').animate({
            scrollTop: $('#shower-cakes').offset().top
        }, 1850);
    });
});

$(document).ready(function() {
    $('#spec-cakes').click(function () {
        $('html, body').animate({
            scrollTop: $('#specialty-cakes').offset().top
        }, 2000);
    });
});

$(document).ready(function() {
    $('#PT-cakes').click(function () {
        $('html, body').animate({
            scrollTop: $('#party-cakes').offset().top
        }, 2500);
    });
});

$(document).ready(function() {
    $('#any-cakes').click(function () {
        $('html, body').animate({
            scrollTop: $('#misc-cakes').offset().top
        }, 3000);
    });
});


let sports = document.getElementById('sports');

sports.addEventListener('click', function(){
    location.href="gallery.html#special"
});

let birthday = document.getElementById('birthday');

birthday.addEventListener('click', function(){
    location.href="gallery.html#birthday-cakes"
});

let wedding = document.getElementById('wedding');

wedding.addEventListener('click', function(){
    location.href="gallery.html#special"
});

let specialty = document.getElementById('specialty');

specialty.addEventListener('click', function(){
    location.href="gallery.html#special"
});

let party = document.getElementById('party');

party.addEventListener('click', function(){
    location.href="gallery.html#party-cakes"
});

let shower = document.getElementById('shower');

shower.addEventListener('click', function(){
    location.href="gallery.html#shower-cakes"
});

