import { Shape } from "./shape.js";

export class Z extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'green');
        this.template = [
            [1, 1, 0],
            [0, 1, 1]
        ];
    }

    getTemplates() {
        const template_1 = [
            [1, 1, 0],
            [0, 1, 1]
        ],
        template_2 = [
            [0, 1],
            [1, 1],
            [1, 0]
        ];

        return [template_1, template_2];
    }
}