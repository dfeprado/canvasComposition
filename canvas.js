export class Canvas {
    constructor(canvas, options) {
        this.ctx = canvas.getContext('2d')
        this.clear = true
        this.setClearAction()
        this.options = (options) ? options : {
            roundCorners: true
        }
    }

    setView(view) {
        this.view = view
    }

    clearOnDraw(clear) {
        this.clear = clear
    }

    setClearAction(action) {
        this.clearAction = (action) ? action : (ctx) => {ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)}
    }

    draw() {
        if (this.clear)
            this.clearAction(this.ctx)

        if (!this.view)
            return

        this.view.draw({
            startX: 0, 
            startY: 0, 
            maxWidth: this.ctx.canvas.width, 
            maxHeight: this.ctx.canvas.height, 
            canvas: this.ctx,
            options: this.options
        })
    }
}