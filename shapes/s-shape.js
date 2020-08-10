import { Shape } from "./shape.js";

export class S extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'red');
        this.template = [
            [0, 1, 1],
            [1, 1, 0]
        ];
    }

    getTemplates() {
        const template_1 = [
            [0, 1, 1],
            [1, 1, 0]
        ],
        template_2 = [
            [1, 0],
            [1, 1],
            [0, 1]
        ];

        return [template_1, template_2];
    }
}