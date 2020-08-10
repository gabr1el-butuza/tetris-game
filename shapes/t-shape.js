import { Shape } from './shape.js';

export class T extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'magenta');
        this.template = [
            [1, 1, 1],
            [0, 1, 0]
        ];
    }

    getTemplates() {
        const template_1 = [
            [1, 1, 1],
            [0, 1, 0]
        ],
        template_2 = [
            [0, 1],
            [1, 1],
            [0, 1]
        ],
        template_3 = [
            [0, 1, 0],
            [1, 1, 1]
        ],
        template_4 = [
            [1, 0],
            [1, 1],
            [1, 0]
        ];

        return [template_1, template_2, template_3, template_4];
    }
}