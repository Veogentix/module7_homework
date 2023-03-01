function ElectricDevice(name, power, color, powerSwitch) {
  (this.name = name), 
    (this.power = power), 
    (this.color = color),
    (this.powerSwitchPosition = powerSwitch); 
}

ElectricDevice.prototype.switchPower = function () {
  if (this.powerSwitchPosition == "on") this.powerSwitchPosition = "off";
  else this.powerSwitchPosition = "on";
};
const lamp = new ElectricDevice("Table lamp", 10, "white", "on"); 
lamp.lightColor = "cold light"; 
lamp.changeColor = function () {
  if (this.lightColor == "cold light") this.lightColor = "warm light";
  else this.lightColor = "cold light";
};
const kettle = new ElectricDevice("Electric kettle", 1500, "red", "off");
kettle.kettleVolume = 2;
const fridge = new ElectricDevice("Fridge", 900, "grey", "on");
fridge.fridgeTemperature = -4; 

let myHomeElectricDevices = new Array(lamp, kettle, fridge);

lamp.changeColor();
console.log("Light Color now is: " + lamp.lightColor);

let poweredDevice = lamp;
poweredDevice.switchPower();
console.log(
  poweredDevice.name + " now power " + poweredDevice.powerSwitchPosition
);

let totalPower = 0;
console.log("-------- Current state --------");
for (let eachDevice of myHomeElectricDevices) {
  console.log(eachDevice.name + " now power " + eachDevice.powerSwitchPosition);
  if (eachDevice.powerSwitchPosition == "on") totalPower += eachDevice.power;
}
console.log("Total power now is " + totalPower + " Watt ");

for (let eachDevice of myHomeElectricDevices) {
  console.log("-----------------------------------");
  for (let key in eachDevice) {
    console.log(key + " : " + eachDevice[key]);
  }
}