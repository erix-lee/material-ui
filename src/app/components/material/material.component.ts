import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import {DocumentationItems} from './shared/documentation-items/documentation-items';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor( public docItems: DocumentationItems,public media: TdMediaService) {

  }

  ngOnInit() {
  }

}
