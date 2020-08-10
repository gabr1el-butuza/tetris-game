import { Shape } from './shape.js';

export class J extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'pink');
        this.template = [
            [0, 1],
            [0, 1],
            [1, 1]
        ];
    }

    getTemplates() {
        const template_1 = [
            [0, 1],
            [0, 1],
            [1, 1]
        ],
        template_2 = [
            [1, 0, 0],
            [1, 1, 1]
        ],
        template_3 = [
            [1, 1],
            [1, 0],
            [1, 0]
        ],
        template_4 = [
            [1, 1, 1],
            [0, 0, 1]
        ];

        return [template_1, template_2, template_3, template_4];
    }
}