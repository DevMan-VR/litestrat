import React from 'react'


export const absoluteMousePosition = (e) => {
    var x = e.pageX
    var y = e.pageY

    return console.log(`Mouse Clicked in (${x},${y})`)
}

