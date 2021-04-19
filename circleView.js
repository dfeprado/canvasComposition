import {View} from './viewNLayout.js'

export class CenteredCircleView extends View {
    constructor(filled, radius) {
        super()
        this.filled = filled
        this.radius = radius
    }

    setFilled(filled) {
        this.filled = filled
    }

    setRadius(radius) {
        this.radius = radius
    }

    draw(props) {
        props.canvas.beginPath()
        props.canvas.arc(props.maxWidth/2, props.maxHeight/2, this.radius, 0, Math.PI * 2)

        if (this.filled)
            props.canvas.fill()
        else {
            props.canvas.stroke()
            props.canvas.closePath()
        }
    }
}