/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { startWith } from "rxjs/operators/startWith";
import { map } from "rxjs/operators/map";
/**
 * \@title Filter autocomplete
 */
export class AutocompleteFilterExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(val => this.filter(val)));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    filter(val) {
        return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
}
AutocompleteFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-filter-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{ option }}</mat-option></mat-autocomplete></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
            },] },
];
/** @nocollapse */
AutocompleteFilterExample.ctorParameters = () => [];
function AutocompleteFilterExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AutocompleteFilterExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AutocompleteFilterExample.ctorParameters;
    /** @type {?} */
    AutocompleteFilterExample.prototype.myControl;
    /** @type {?} */
    AutocompleteFilterExample.prototype.options;
    /** @type {?} */
    AutocompleteFilterExample.prototype.filteredOptions;
}
//# sourceMappingURL=autocomplete-filter-example.js.map