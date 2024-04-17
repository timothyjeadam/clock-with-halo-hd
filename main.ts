let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
let minutes = 13
let seconds = 0
let hours = 8
haloDisplay.range(0, 1).showColor(kitronik_halo_hd.colors(ZipLedColors.Red))
loops.everyInterval(1000, function () {
    haloDisplay.clear()
    haloDisplay.setZipLedColor(seconds, kitronik_halo_hd.colors(ZipLedColors.Red))
    haloDisplay.setZipLedColor(minutes, kitronik_halo_hd.colors(ZipLedColors.Green))
    haloDisplay.show()
    seconds += 1
    if (seconds == 60) {
        minutes += 1
        seconds = 0
    }
    if (minutes == 60) {
        minutes = 0
        hours += 5
    }
    if (hours == 60) {
        hours = 0
    }
})
basic.forever(function () {
	
})
