class ElectricAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
    
    plugIn() {
      this.pluggedIn = true;
      console.log(`${this.name} Включен в розетку.`);
    }
    
    unplug() {
      this.pluggedIn = false;
      console.log(`${this.name} Выключен из розетки.`);
    }
  }
  
  class DeskLamp extends ElectricAppliance {
    constructor(name, power, brightness) {
      super(name, power);
      this.brightness = brightness;
    }
    
    adjustBrightness(newBrightness) {
      this.brightness = newBrightness;
      console.log(`${this.name} Яркость лампы изменена на ${this.brightness}.`);
    }
  }
  
  class Computer extends ElectricAppliance {
    constructor(name, power, brand) {
      super(name, power);
      this.brand = brand;
    }
    
    bootUp() {
      console.log(`${this.brand} компьютер запущен.`);
    }
  }
  
  // Создание экземпляров приборов
  const myDeskLamp = new DeskLamp("Настольная лампа", 20, 50);
  const myComputer = new Computer("Компьютер", 500, "Apple");
  
  // Включаем приборы
  myDeskLamp.plugIn();
  myComputer.plugIn();
  
  // Подсчет суммарной потребляемой мощности всех включенных приборов
  let totalPower = myDeskLamp.pluggedIn ? myDeskLamp.power : 0;
  totalPower += myComputer.pluggedIn ? myComputer.power : 0;
  
  console.log('Суммарная потребляемая мощность всех приборов: ' + totalPower + 'W');  