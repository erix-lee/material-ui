/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
/**
 * \@title Tooltip with custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.position = 'before';
    }
    TooltipPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-position-example',
                    template: "<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\"><span>Show tooltip</span><mat-form-field><mat-select class=\"example-select\" [(ngModel)]=\"position\"><mat-option value=\"before\">Before</mat-option><mat-option value=\"after\">After</mat-option><mat-option value=\"above\">Above</mat-option><mat-option value=\"below\">Below</mat-option><mat-option value=\"left\">Left</mat-option><mat-option value=\"right\">Right</mat-option></mat-select></mat-form-field></div>",
                    styles: [".example-tooltip-host { display: inline-flex; align-items: center; margin: 50px; } .example-select { margin: 0 10px; } "],
                },] },
    ];
    /** @nocollapse */
    TooltipPositionExample.ctorParameters = function () { return []; };
    return TooltipPositionExample;
}());
export { TooltipPositionExample };
function TooltipPositionExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TooltipPositionExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TooltipPositionExample.ctorParameters;
    /** @type {?} */
    TooltipPositionExample.prototype.position;
}
//# sourceMappingURL=tooltip-position-example.js.map