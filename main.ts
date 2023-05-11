input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    let ReceivedNumber = 0
    Alarma = 0
    if (ReceivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    }
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let Alarma = 0
radio.setGroup(7)
