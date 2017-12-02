import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import {  ComponentViewerModule } from './component-viewer/component-viewer';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,MatNativeDateModule,
    ComponentViewerModule,
    MaterialRoutingModule
  ],
  declarations: [
    MaterialComponent]
})
export class MaterialModule { }
