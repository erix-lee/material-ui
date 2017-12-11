/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
/**
 * \@title Select with form field features
 */
export class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl('', [Validators.required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
}
SelectHintErrorExample.decorators = [
    { type: Component, args: [{
                selector: 'select-hint-error-example',
                template: "<mat-form-field><mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required><mat-option>--</mat-option><mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">{{animal.name}}</mat-option></mat-select><mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error><mat-hint>{{animalControl.value?.sound}}</mat-hint></mat-form-field>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/** @nocollapse */
SelectHintErrorExample.ctorParameters = () => [];
function SelectHintErrorExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectHintErrorExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectHintErrorExample.ctorParameters;
    /** @type {?} */
    SelectHintErrorExample.prototype.animalControl;
    /** @type {?} */
    SelectHintErrorExample.prototype.animals;
}
//# sourceMappingURL=select-hint-error-example.js.map