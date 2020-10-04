input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
