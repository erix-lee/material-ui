/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
/**
 * \@title Stepper overview
 */
export class StepperOverviewExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-overview-example',
                template: "<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button><mat-horizontal-stepper [linear]=\"isLinear\"><mat-step [stepControl]=\"firstFormGroup\"><form [formGroup]=\"firstFormGroup\"><ng-template matStepLabel>Fill out your name</ng-template><mat-form-field><input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required></mat-form-field><div><button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step [stepControl]=\"secondFormGroup\"><form [formGroup]=\"secondFormGroup\"><ng-template matStepLabel>Fill out your address</ng-template><mat-form-field><input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required></mat-form-field><div><button mat-button matStepperPrevious>Back</button> <button mat-button matStepperNext>Next</button></div></form></mat-step><mat-step><ng-template matStepLabel>Done</ng-template>You are now done.<div><button mat-button matStepperPrevious>Back</button></div></mat-step></mat-horizontal-stepper>",
                styles: ["/** No CSS for this example */ "]
            },] },
];
/** @nocollapse */
StepperOverviewExample.ctorParameters = () => [
    { type: FormBuilder, },
];
function StepperOverviewExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StepperOverviewExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StepperOverviewExample.ctorParameters;
    /** @type {?} */
    StepperOverviewExample.prototype.isLinear;
    /** @type {?} */
    StepperOverviewExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperOverviewExample.prototype.secondFormGroup;
    /** @type {?} */
    StepperOverviewExample.prototype._formBuilder;
}
//# sourceMappingURL=stepper-overview-example.js.map