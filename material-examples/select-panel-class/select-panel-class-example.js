/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewEncapsulation } from "@angular/core";
import { FormControl } from "@angular/forms";
/**
 * \@title Select with custom panel styling
 */
export class SelectPanelClassExample {
    constructor() {
        this.panelColor = new FormControl('red');
    }
}
SelectPanelClassExample.decorators = [
    { type: Component, args: [{
                selector: 'select-panel-class-example',
                template: "<mat-form-field><mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\" panelClass=\"example-panel-{{panelColor.value}}\"><mat-option value=\"red\">Red</mat-option><mat-option value=\"green\">Green</mat-option><mat-option value=\"blue\">Blue</mat-option></mat-select></mat-form-field>",
                styles: [".example-panel-red .mat-select-content { background: rgba(255, 0, 0, 0.5); } .example-panel-green .mat-select-content { background: rgba(0, 255, 0, 0.5); } .example-panel-blue .mat-select-content { background: rgba(0, 0, 255, 0.5); } "],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/** @nocollapse */
SelectPanelClassExample.ctorParameters = () => [];
function SelectPanelClassExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectPanelClassExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectPanelClassExample.ctorParameters;
    /** @type {?} */
    SelectPanelClassExample.prototype.panelColor;
}
//# sourceMappingURL=select-panel-class-example.js.map