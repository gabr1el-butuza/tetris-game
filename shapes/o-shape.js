import { Shape } from "./shape.js";

export class O extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'yellow');
        this.template = [
            [1, 1],
            [1, 1]
        ];
    }

    getTemplates() {
        const template_1 = [
            [1, 1],
            [1, 1]
        ];

        return [template_1]
    }
}