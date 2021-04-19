export class View {
    draw(props) {

    }
}

export class Layout extends View {
    constructor () {
        super()
        this.views = []
    }

    push(view) {
        if (this.views.indexOf(view) != -1)
            return
        this.views.push(view)
    }
}