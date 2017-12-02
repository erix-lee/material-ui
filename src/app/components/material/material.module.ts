import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material';
import { ExampleModule } from '@angular/material-examples';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { ComponentViewerModule } from './component-viewer/component-viewer';

@NgModule({
  imports: [
    //ExampleModule,
    CommonModule, MatNativeDateModule,
    ComponentViewerModule,
    MaterialRoutingModule
  ],
  declarations: [
    MaterialComponent]
})
export class MaterialModule { }
