/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EXAMPLE_COMPONENTS } from "./example-module";
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var /**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
ExampleData = /** @class */ (function () {
    function ExampleData(example) {
        // TODO: figure out how do we get these variables.
        this.description = 'Some description for material';
        // TODO: use real example and delete the example/ folder.
        this.examplePath = '/assets/example/';
        this.exampleFiles = ['button-demo.html', 'button-demo.scss', 'button-demo.ts'];
        // TODO: extract these variables from example code.
        this.selectorName = 'button-demo';
        this.indexFilename = 'button-demo';
        this.componentName = 'ButtonDemo';
        if (example && EXAMPLE_COMPONENTS[example]) {
            this.examplePath = "/assets/stackblitz/examples/" + example + "/";
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css']
                .map(function (extension) { return example + "-example." + extension; });
            var /** @type {?} */ exampleFilesSet = new Set(['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; }));
            if (EXAMPLE_COMPONENTS[example].additionalFiles) {
                for (var _i = 0, _a = EXAMPLE_COMPONENTS[example].additionalFiles; _i < _a.length; _i++) {
                    var file = _a[_i];
                    exampleFilesSet.add(file);
                }
            }
            this.exampleFiles = Array.from(exampleFilesSet.values());
            this.selectorName = this.indexFilename = example + "-example";
            var /** @type {?} */ exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            if (EXAMPLE_COMPONENTS[example].title) {
                this.description = EXAMPLE_COMPONENTS[example].title;
            }
            else {
                this.description = exampleName.replace(/[\-]+/g, ' ') + ' Example';
            }
            if (EXAMPLE_COMPONENTS[example].selectorName) {
                this.componentName = EXAMPLE_COMPONENTS[example].selectorName;
            }
            else {
                this.componentName = exampleName.replace(/[\-]+/g, '') + 'Example';
            }
        }
    }
    return ExampleData;
}());
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
export { ExampleData };
function ExampleData_tsickle_Closure_declarations() {
    /** @type {?} */
    ExampleData.prototype.description;
    /** @type {?} */
    ExampleData.prototype.examplePath;
    /** @type {?} */
    ExampleData.prototype.exampleFiles;
    /** @type {?} */
    ExampleData.prototype.selectorName;
    /** @type {?} */
    ExampleData.prototype.indexFilename;
    /** @type {?} */
    ExampleData.prototype.componentName;
}
//# sourceMappingURL=example-data.js.map