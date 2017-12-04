import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { DocumentationItems } from './shared/documentation-items/documentation-items';
import { fadeAnimation } from '../../app.animations';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  animations: [fadeAnimation],
})
export class MaterialComponent implements OnInit {

  constructor(public docItems: DocumentationItems, public media: TdMediaService) {

  }

  ngOnInit() {
  }

}
