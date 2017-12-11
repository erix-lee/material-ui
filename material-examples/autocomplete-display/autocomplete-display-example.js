/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { startWith } from "rxjs/operators/startWith";
import { map } from "rxjs/operators/map";
export class User {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
    }
}
function User_tsickle_Closure_declarations() {
    /** @type {?} */
    User.prototype.name;
}
/**
 * \@title Display value autocomplete
 */
export class AutocompleteDisplayExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor')
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(/** @type {?} */ ({})), map(user => user && typeof user === 'object' ? user.name : user), map(name => name ? this.filter(name) : this.options.slice()));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    filter(name) {
        return this.options.filter(option => option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    /**
     * @param {?} user
     * @return {?}
     */
    displayFn(user) {
        return user ? user.name : user;
    }
}
AutocompleteDisplayExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-display-example',
                template: "<form class=\"example-form\"><mat-form-field class=\"example-full-width\"><input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"><mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\"><mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">{{ option.name }}</mat-option></mat-autocomplete></mat-form-field></form>",
                styles: [".example-form { min-width: 150px; max-width: 500px; width: 100%; } .example-full-width { width: 100%; } "]
            },] },
];
/** @nocollapse */
AutocompleteDisplayExample.ctorParameters = () => [];
function AutocompleteDisplayExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AutocompleteDisplayExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AutocompleteDisplayExample.ctorParameters;
    /** @type {?} */
    AutocompleteDisplayExample.prototype.myControl;
    /** @type {?} */
    AutocompleteDisplayExample.prototype.options;
    /** @type {?} */
    AutocompleteDisplayExample.prototype.filteredOptions;
}
//# sourceMappingURL=autocomplete-display-example.js.map