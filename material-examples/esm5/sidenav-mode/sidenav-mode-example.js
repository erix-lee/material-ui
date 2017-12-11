/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
/**
 * \@title Sidenav with configurable mode
 */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-mode-example',
                    template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav [mode]=\"mode.value\"><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p><p><mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\"><label>Mode:</label><mat-radio-button value=\"over\">Over</mat-radio-button><mat-radio-button value=\"side\">Side</mat-radio-button><mat-radio-button value=\"push\">Push</mat-radio-button></mat-radio-group></p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } .example-radio-group { display: block; border: 1px solid #555; margin: 20px; padding: 10px; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavModeExample.ctorParameters = function () { return []; };
    return SidenavModeExample;
}());
export { SidenavModeExample };
function SidenavModeExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidenavModeExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidenavModeExample.ctorParameters;
    /** @type {?} */
    SidenavModeExample.prototype.mode;
    /** @type {?} */
    SidenavModeExample.prototype.shouldRun;
}
//# sourceMappingURL=sidenav-mode-example.js.map