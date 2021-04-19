import {Layout} from './viewNLayout.js'

export class GridLayout extends Layout {
    constructor (rowsNo, columnsNo) {
        super()
        this.rows = rowsNo
        this.columns = columnsNo
        this.marginBetween = 0
        this.margin = 0
    }

    setRowsNColumns(rowsNo, columnsNo) {
        this.rows = rowsNo
        this.columns = columnsNo
    }

    setMarginBetweenViews(margin) {
        this.marginBetween = margin
    }

    setMargin(margin) {
        this.margin = margin
    }

    setAllMargins(margin) {
        this.setMarginBetweenViews(margin)
        this.setMargin(margin)
    }

    draw(props) {
        const getCurrentX = () => props.startX + this.margin
        const getCurrentY = () => props.startY + this.margin

        const marginBetweenCols = (this.columns > 1) ? this.marginBetween : 0
        const marginBetweenRows = (this.rows > 1) ? this.marginBetween : 0

        const celWidth = (props.maxWidth - this.margin - marginBetweenCols)/this.columns
        const celHeight = (props.maxHeight - this.margin - marginBetweenRows)/this.rows
        const maxColumns = this.columns - 1
        const maxRows = this.rows - 1

        let currentX = getCurrentX()
        let currentY = getCurrentY()
        let viewsIndex = 0

        for (let i = 0; i < this.rows; i++) {
            const maxHeight = (i < maxRows) ? currentY + celHeight : currentY + celHeight - this.margin
            for (let j = 0; j < this.columns; j++) {
                if (viewsIndex == this.views.length)
                    return

                const maxWidth = (j < maxColumns) ? currentX + celWidth : currentX + celWidth - this.margin

                this.views[viewsIndex++].draw({
                    startX: currentX, 
                    startY: currentY, 
                    maxWidth: maxWidth, 
                    maxHeight: maxHeight,
                    canvas: props.canvas,
                    options: props.options
                })
                currentX += celWidth;
                if (j < maxColumns)
                    currentX += this.marginBetween
            }
            currentX = getCurrentX()
            currentY += celHeight
            if (i < maxRows)
                currentY += this.marginBetween
        }
    }
}