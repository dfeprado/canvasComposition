import { View, Layout } from './viewNLayout.js'

export class XView extends View {
    draw(props) {
        props.canvas.strokeRect(props.startX, props.startY, props.maxWidth - props.startX, props.maxHeight - props.startY)

        props.canvas.beginPath()

        props.canvas.moveTo(props.startX, props.startY)
        props.canvas.lineTo(props.maxWidth, props.maxHeight)
        
        props.canvas.moveTo(props.maxWidth, props.startY)
        props.canvas.lineTo(props.startX, props.maxHeight)

        props.canvas.stroke()
        props.canvas.closePath()
    }
}

export class XViewLayout extends Layout {
    constructor() {
        super()
        this.baseView = new XView()
    }

    draw(props) {
        this.baseView.draw(props)

        for (const view of this.views) {
            view.draw(props)
        }
    }
}