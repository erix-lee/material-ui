/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FocusMonitor } from "@angular/cdk/a11y";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Component, ElementRef, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatFormFieldControl } from "@angular/material";
import { Subject } from "rxjs/Subject";
/**
 * Data structure for holding telephone number.
 */
export class MyTel {
    /**
     * @param {?} area
     * @param {?} exchange
     * @param {?} subscriber
     */
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
function MyTel_tsickle_Closure_declarations() {
    /** @type {?} */
    MyTel.prototype.area;
    /** @type {?} */
    MyTel.prototype.exchange;
    /** @type {?} */
    MyTel.prototype.subscriber;
}
/**
 * Custom `MatFormFieldControl` for telephone number input.
 */
export class MyTelInput {
    /**
     * @param {?} fb
     * @param {?} fm
     * @param {?} elRef
     */
    constructor(fb, fm, elRef) {
        this.fm = fm;
        this.elRef = elRef;
        this.stateChanges = new Subject();
        this.focused = false;
        this.ngControl = null;
        this.errorState = false;
        this.controlType = 'my-tel-input';
        this.id = `my-tel-input-${MyTelInput.nextId++}`;
        this.describedBy = '';
        this._required = false;
        this._disabled = false;
        this.parts = fb.group({
            'area': '',
            'exchange': '',
            'subscriber': '',
        });
        fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    /**
     * @return {?}
     */
    get empty() {
        let /** @type {?} */ n = this.parts.value;
        return !n.area && !n.exchange && !n.subscriber;
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @param {?} plh
     * @return {?}
     */
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} dis
     * @return {?}
     */
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get value() {
        let /** @type {?} */ n = this.parts.value;
        if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
            return new MyTel(n.area, n.exchange, n.subscriber);
        }
        return null;
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    set value(tel) {
        tel = tel || new MyTel('', '', '');
        this.parts.setValue({ area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber });
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if ((/** @type {?} */ (event.target)).tagName.toLowerCase() != 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }
}
MyTelInput.nextId = 0;
MyTelInput.decorators = [
    { type: Component, args: [{
                selector: 'my-tel-input',
                template: "<div [formGroup]=\"parts\"><input class=\"area\" formControlName=\"area\" size=\"3\"> <span>&ndash;</span> <input class=\"exchange\" formControlName=\"exchange\" size=\"3\"> <span>&ndash;</span> <input class=\"subscriber\" formControlName=\"subscriber\" size=\"4\"></div>",
                styles: ["div { display: flex; } input { border: none; background: none; padding: 0; outline: none; font: inherit; text-align: center; } span { opacity: 0; transition: opacity 200ms; } :host.floating span { opacity: 1; } "],
                providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                host: {
                    '[class.floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                    '[attr.aria-describedby]': 'describedBy',
                }
            },] },
];
/** @nocollapse */
MyTelInput.ctorParameters = () => [
    { type: FormBuilder, },
    { type: FocusMonitor, },
    { type: ElementRef, },
];
MyTelInput.propDecorators = {
    "placeholder": [{ type: Input },],
    "required": [{ type: Input },],
    "disabled": [{ type: Input },],
    "value": [{ type: Input },],
};
function MyTelInput_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MyTelInput.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MyTelInput.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MyTelInput.propDecorators;
    /** @type {?} */
    MyTelInput.nextId;
    /** @type {?} */
    MyTelInput.prototype.parts;
    /** @type {?} */
    MyTelInput.prototype.stateChanges;
    /** @type {?} */
    MyTelInput.prototype.focused;
    /** @type {?} */
    MyTelInput.prototype.ngControl;
    /** @type {?} */
    MyTelInput.prototype.errorState;
    /** @type {?} */
    MyTelInput.prototype.controlType;
    /** @type {?} */
    MyTelInput.prototype.id;
    /** @type {?} */
    MyTelInput.prototype.describedBy;
    /** @type {?} */
    MyTelInput.prototype._placeholder;
    /** @type {?} */
    MyTelInput.prototype._required;
    /** @type {?} */
    MyTelInput.prototype._disabled;
    /** @type {?} */
    MyTelInput.prototype.fm;
    /** @type {?} */
    MyTelInput.prototype.elRef;
}
/**
 * \@title Form field with custom telephone number input control.
 */
export class FormFieldCustomControlExample {
}
FormFieldCustomControlExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-custom-control-example',
                template: `
    <mat-form-field>
      <my-tel-input placeholder="Phone number" required></my-tel-input>
      <mat-icon matSuffix>phone</mat-icon>
      <mat-hint>Include area code</mat-hint>
    </mat-form-field>
  `
            },] },
];
/** @nocollapse */
FormFieldCustomControlExample.ctorParameters = () => [];
function FormFieldCustomControlExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormFieldCustomControlExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormFieldCustomControlExample.ctorParameters;
}
//# sourceMappingURL=form-field-custom-control-example.js.map