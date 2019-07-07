//Abstraction and encapsulation

interface HeroI {
  name: string;
  attackPower: number;
  defence?: number;
  showWeakness(): string;
  normalAttack(): number;
  ultimateAttack(multiplayer: number): number;
  defend?(): number;  
}


class TypicalHero implements HeroI {
  name: string;
  attackPower: number;
  defence: number;
  private weakness: string;

  constructor(name: string, attackPower: number, defence: number, weakness: string) {
    this.name = name;
    this.attackPower = attackPower;
    this.defence = defence;
    this.weakness = weakness;
  }

  showWeakness(): string {
    return this.weakness;
  }

  normalAttack(): number {
    return this.attackPower
  }

  ultimateAttack(multiplayer: number): number {
    return this.attackPower * multiplayer;
  }

  defend(): number {
    return this.defence
  }
}

//Inheritance and polimorphism

class Mage extends TypicalHero {
  constructor(name: string, attackPower: number, defence: number, weakness: string ) {
    super(name, attackPower, defence, weakness)
  }

  mageShield(multiplayer: number): number {
    return super.defend() * multiplayer
  }

  ultimateAttack(): number {
    return this.attackPower * 6
  }

  findWeakness(hero: TypicalHero) {
    return hero.showWeakness();
  }

}


