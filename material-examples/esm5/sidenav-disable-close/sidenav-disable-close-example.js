/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
/**
 * \@title Sidenav with custom escape and backdrop click behavior
 */
var SidenavDisableCloseExample = /** @class */ (function () {
    function SidenavDisableCloseExample() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    SidenavDisableCloseExample.prototype.close = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    SidenavDisableCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-disable-close-example',
                    template: "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\"><mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose><p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p></mat-sidenav><mat-sidenav-content><p><button mat-button (click)=\"sidenav.open()\">Open</button></p><p>Closed due to: {{reason}}</p></mat-sidenav-content></mat-sidenav-container><div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>",
                    styles: [".example-container { position: absolute; top: 0; bottom: 0; left: 0; right: 0; } "],
                },] },
    ];
    /** @nocollapse */
    SidenavDisableCloseExample.ctorParameters = function () { return []; };
    SidenavDisableCloseExample.propDecorators = {
        "sidenav": [{ type: ViewChild, args: ['sidenav',] },],
    };
    return SidenavDisableCloseExample;
}());
export { SidenavDisableCloseExample };
function SidenavDisableCloseExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidenavDisableCloseExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidenavDisableCloseExample.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidenavDisableCloseExample.propDecorators;
    /** @type {?} */
    SidenavDisableCloseExample.prototype.sidenav;
    /** @type {?} */
    SidenavDisableCloseExample.prototype.reason;
    /** @type {?} */
    SidenavDisableCloseExample.prototype.shouldRun;
}
//# sourceMappingURL=sidenav-disable-close-example.js.map