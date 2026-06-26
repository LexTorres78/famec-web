/* main.js — FAMEC */
document.getElementById('year').textContent = new Date().getFullYear();

var burger = document.getElementById('burger');
var nav    = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', function () { nav.classList.toggle('open'); });
}

var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
