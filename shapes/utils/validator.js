export class Validator {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
    }

    checkNext(shapeRaw, shapeColumn, nextTemplate) {
        const shapeTemplate =  nextTemplate || this.shape.template;
        for (let row = 0; row < shapeTemplate.length; row++) {
            for (let column = 0; column < shapeTemplate[row].length; column++) {
                let cell =
                    this.cells[row + shapeRaw]
                    && this.cells[row + shapeRaw][column + shapeColumn];

                if(!cell) {
                    return true; // nextNotAvailable
                }

                let isEmpty = cell.isEmpty;

                if(shapeTemplate[row][column] === 1 && !isEmpty) {
                    return true;
                }
            }
        }

        return false;
    }
}