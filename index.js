import {Canvas} from './canvas.js'
import {GridLayout} from './gridLayout.js'
import {MachineLayout} from './machineLayout.js'

function createCanvasManager(canvasElement) {
    const grid = new GridLayout(2, 2)
    grid.setMargin(5)
    grid.setMarginBetweenViews(10)
    grid.push(new MachineLayout())
    grid.push(new MachineLayout())
    grid.push(new MachineLayout())
    grid.push(new MachineLayout())

    const canvasManager = new Canvas(canvasElement)
    canvasManager.setClearAction((ctx) => {
        const fillStyle = ctx.fillStyle
        ctx.fillStyle = '#282e4d'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = fillStyle
    })
    canvasManager.setView(grid)

    return () => {
        canvasManager.draw()
        window.requestAnimationFrame(reDraw)
    }
}

export function main() {
    window.onload = () => {
        const canvas = document.querySelector('canvas')
        window.onresize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        window.onresize()
    
        createCanvasManager(canvas)();
    }
}