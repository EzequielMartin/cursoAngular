"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    console.log(miFuncion('Normal'));
    console.log(miFuncionF('Flecha'));
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    console.log(sumarN(1, 3));
    console.log(sumarF(2, 5));
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
