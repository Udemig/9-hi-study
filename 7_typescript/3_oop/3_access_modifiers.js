/*
 * Access Modifiers - Erişim Belirteçleri
 
 * Class elemanalrı ile hassas bilgileri tutucağımız  zazan bu bilgelerin class'ın dışarısından erişiliğp erişlimeyeceğini belirtmek isteyebiliriz.

 * Örneğin kredi kartı bilgilerini tutan bir class olsun bu class'ın tutucağı bilgeleri kod içerisinde her yerde kullanılması önlemek isteyebiliriz sebebi ise güvenlik zaafiyeti oluşturabilecğeinden.

 * 3 adet erişim belirteci vardır.

 * public: hem class dışarısından hemde class'ı miras alan diğer class'larda da erişilebilen değerler ifade etmek için kullanılır

 * protected: sadece class'ın kendisi ve onu exten eden (miras alan) diğer class'lardan erişilebilend değer ifade etmek için kullanılır

 * private: sadece tanımlandığı class içerisnde eirşlebilen değerler ifade etmek için kullanılır
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Public
var Arac = /** @class */ (function () {
    function Arac(yeni_marka) {
        this.marka = yeni_marka;
    }
    Arac.prototype.tanit = function () {
        console.log("Bu araba " + this.marka); // class içerisi
    };
    return Arac;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motor.prototype.calistir = function () {
        console.log(this.marka + " araba çalıştı...."); // miras alan class içerisi
    };
    return Motor;
}(Arac));
var honda = new Arac("Honda");
console.log(honda.marka); // class dışarısından
// Protected
var EvcilHayvan = /** @class */ (function () {
    function EvcilHayvan(yeni_ad) {
        this.ad = yeni_ad; // tanımladnığı class
    }
    return EvcilHayvan;
}());
var Kopek = /** @class */ (function (_super) {
    __extends(Kopek, _super);
    function Kopek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kopek.prototype.havla = function () {
        console.log(this.ad + " havlıyor"); // miras alan class
    };
    return Kopek;
}(EvcilHayvan));
var kopek = new Kopek("Boncuk");
// kopek.ad; // dışarıdan erişişm olmuyor
kopek.havla();
// Private
var OzelPersonel = /** @class */ (function () {
    function OzelPersonel(yeni_isim) {
        this.isim = yeni_isim; // tanımlandığı class'ta erişilir
    }
    return OzelPersonel;
}());
var GumrukPersoneli = /** @class */ (function (_super) {
    __extends(GumrukPersoneli, _super);
    function GumrukPersoneli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GumrukPersoneli.prototype.isminiYaz = function () {
        // this.isim; // miras alnın classta erişilemez
    };
    return GumrukPersoneli;
}(OzelPersonel));
var kisi = new OzelPersonel("Rıfat");
// kisi.isim; // dışarıdan erişelemez
