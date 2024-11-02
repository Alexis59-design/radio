radio.onReceivedNumber(function (receivedNumber) {
    number = receivedNumber
    basic.showNumber(number)
    basic.clearScreen()
})
let number = 0
radio.setGroup(100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(0)
    }
    while (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    while (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
})
