export class Shape {
    constructor(row, column, cells, color) {
        this.row = row;
        this.column = column;
        this.cells = cells;
        this.color = color;
        this.templateIndex = 0;
    };

    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    const cell = this.cells[this.row + row][this.column + column];
                    cell.color = this.color;
                    cell.draw();
                    cell.isEmpty = false;
                }
            }
        }
    }

    clear() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    const cell = this.cells[this.row + row][this.column + column];
                    cell.color = '#7facf5';
                    cell.draw();
                    cell.isEmpty = true;
                }
            }
        }
    }

    rotate() {
        this.templateIndex++;
        this.template = this.getTemplate(this.templateIndex);
        this.draw();
    }

    getTemplate(index) {
        const tmplIndex = index || this.templateIndex;
        const length = this.getTemplates().length;
        return this.getTemplates()[tmplIndex % length];
    }
}