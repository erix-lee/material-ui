import {Component, ElementRef, Input, NgModule, OnInit} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'docs-svg-viewer',
  template: '<div class="docs-svg-viewer" aria-hidden="true"></div>',
})
export class SvgViewer implements OnInit {
  @Input() src: string;
  @Input() scaleToContainer: boolean;

  constructor(private elementRef: ElementRef, private http: Http) { }

  ngOnInit() {
    this.fetchAndInlineSvgContent(this.src);
  }

  private inlineSvgContent(template) {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      let svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  }

  private fetchAndInlineSvgContent(path: string): void {

    this.http.get(path).subscribe(svgResponse => {
      this.inlineSvgContent(svgResponse.text());
    });
  }
}

 

@NgModule({
  exports: [SvgViewer],
  declarations: [SvgViewer],
})
export class SvgViewerModule { }
