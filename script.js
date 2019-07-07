"use strict";
//Abstraction and encapsulation
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypicalHero = /** @class */ (function () {
    function TypicalHero(name, attackPower, defence, weakness) {
        this.name = name;
        this.attackPower = attackPower;
        this.defence = defence;
        this.weakness = weakness;
    }
    TypicalHero.prototype.showWeakness = function () {
        return this.weakness;
    };
    TypicalHero.prototype.normalAttack = function () {
        return this.attackPower;
    };
    TypicalHero.prototype.ultimateAttack = function (multiplayer) {
        return this.attackPower * multiplayer;
    };
    TypicalHero.prototype.defend = function () {
        return this.defence;
    };
    return TypicalHero;
}());
//Inheritance and polimorphism
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name, attackPower, defence, weakness) {
        return _super.call(this, name, attackPower, defence, weakness) || this;
    }
    Mage.prototype.mageShield = function (multiplayer) {
        return _super.prototype.defend.call(this) * multiplayer;
    };
    Mage.prototype.ultimateAttack = function () {
        return this.attackPower * 6;
    };
    Mage.prototype.findWeakness = function (hero) {
        return hero.showWeakness();
    };
    return Mage;
}(TypicalHero));
