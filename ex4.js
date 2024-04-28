// Родительская функция
function ElectricDevice(name, power) {
this.name = name;
this.power = power;
this.pluggedIn = false;
}

// Методы для включения/выключения прибора из розетки
ElectricDevice.prototype.plugIn = function() {
this.pluggedIn = true;
console.log(this.name + ' включен в розетку');
}

ElectricDevice.prototype.unplug = function() {
this.pluggedIn = false;
console.log(this.name + ' выключен из розетки');
}

// Первый конкретный прибор
function Lamp(name, power, brightness) {
ElectricDevice.call(this, name, power);
this.brightness = brightness;
}

// Наследование прототипа родительской функции
Lamp.prototype = Object.create(ElectricDevice.prototype);
Lamp.prototype.constructor = Lamp;

// Метод для изменения яркости лампы
Lamp.prototype.changeBrightness = function(newBrightness) {
this.brightness = newBrightness;
console.log('Яркость лампы изменена на ' + this.brightness);
}

// Второй конкретный прибор
function Computer(name, power, type) {
ElectricDevice.call(this, name, power);
this.type = type;
}

// Наследование прототипа родительской функции
Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

// Метод для запуска компьютера
Computer.prototype.start = function() {
console.log('Компьютер ' + this.name + ' запущен');
}

// Создание экземпляров приборов
var deskLamp = new Lamp('Настольная лампа', 20, 'Яркая');
var officeComputer = new Computer('Офисный компьютер', 300, 'Настольный');

// Подключение приборов к розетке
deskLamp.plugIn();
officeComputer.plugIn();

// Пересчет суммарной потребляемой мощности
var totalPower = deskLamp.power + officeComputer.power;
console.log('Суммарная потребляемая мощность всех приборов: ' + totalPower + ' Вт');