import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import { DocumentationItems } from '../shared/documentation-items/documentation-items';

@Component({
  selector: 'components-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
  animations: [slideInDownAnimation],
})
export class ComponentsOverviewComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  constructor(public docItems: DocumentationItems) {

  }

}
