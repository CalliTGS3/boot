radio.onReceivedValue(function (name, value) {
    if (name == "R") {
        Richtung = value
    }
    if (name == "G") {
        Geschwundigkeit = value
    }
    if (name == "F") {
        Fahren = value
    }
})
let Fahren = 0
let Geschwundigkeit = 0
let Richtung = 0
let motor_links = l298.create_motor(DigitalPin.P0, DigitalPin.P1, AnalogPin.C16)
let motor_rechts = l298.create_motor(DigitalPin.P2, DigitalPin.P3, AnalogPin.C17)
radio.setGroup(1)
let DasBoot = l298.create_vehicle(motor_links, motor_rechts)
basic.forever(function () {
    if (Fahren == 1) {
        DasBoot.drive(Geschwundigkeit, Richtung)
    } else {
        DasBoot.stop()
    }
})
