/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
/**
 * \@title Select with multiple selection
 */
export class SelectMultipleExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectMultipleExample.decorators = [
    { type: Component, args: [{
                selector: 'select-multiple-example',
                template: "<mat-form-field><mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple=\"multiple\"><mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option></mat-select></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
SelectMultipleExample.ctorParameters = () => [];
function SelectMultipleExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectMultipleExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectMultipleExample.ctorParameters;
    /** @type {?} */
    SelectMultipleExample.prototype.toppings;
    /** @type {?} */
    SelectMultipleExample.prototype.toppingList;
}
//# sourceMappingURL=select-multiple-example.js.map