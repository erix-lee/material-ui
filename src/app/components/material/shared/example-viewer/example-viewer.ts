import {Component, Input} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ComponentPortal} from '@angular/cdk/portal';
import 'rxjs/add/operator/first';

import {CopierService} from '../copier/copier.service';


@Component({
  selector: 'example-viewer',
  templateUrl: './example-viewer.html',
  styleUrls: ['./example-viewer.scss']
})
export class ExampleViewer {
  /** Component portal for the currently displayed example. */
  selectedPortal: ComponentPortal<any>;

  /** String key of the currently displayed example. */
  _example: string;



  /** Whether the source for the example is being displayed. */
  showSource = false;

  constructor(
    private snackbar: MatSnackBar,
    private copier: CopierService) { }

  get example() {
    return this._example;
  }

  @Input()
  set example(example: string) {

  }

  toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  exampleFileUrl(extension: string) {
    return `/assets/examples/${this.example}-example-${extension.toLowerCase()}.html`;
  }

  copySource(text: string) {
    if (this.copier.copyText(text)) {
      this.snackbar.open('Code copied', '', {duration: 2500});
    } else {
      this.snackbar.open('Copy failed. Please try again!', '', {duration: 2500});
    }
  }
}
