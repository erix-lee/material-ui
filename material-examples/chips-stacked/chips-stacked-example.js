/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
/**
 * \@title Stacked chips
 */
export class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-stacked-example',
                template: "<mat-chip-list class=\"mat-chip-list-stacked\"><mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">{{chip.name}}</mat-chip></mat-chip-list>",
                styles: ["mat-chip { max-width: 200px; } "],
            },] },
];
/** @nocollapse */
ChipsStackedExample.ctorParameters = () => [];
function ChipsStackedExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ChipsStackedExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ChipsStackedExample.ctorParameters;
    /** @type {?} */
    ChipsStackedExample.prototype.color;
    /** @type {?} */
    ChipsStackedExample.prototype.availableColors;
}
//# sourceMappingURL=chips-stacked-example.js.map