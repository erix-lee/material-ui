import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material';
//import { ExampleModule } from '@angular/material-examples';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { ComponentViewerModule } from './component-viewer/component-viewer';

import {
  MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule, MatSlideToggleModule,
  MatSelectModule, MatToolbarModule, MatTabsModule, MatTooltipModule, MatAutocompleteModule,
  MatProgressBarModule
} from '@angular/material';

import {
  CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentFileModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentDataTableModule, CovalentJsonFormatterModule,
  CovalentMessageModule, CovalentVirtualScrollModule
} from '@covalent/core';


import { DocumentationToolsModule } from '../../documentation-tools';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { DocumentationItems } from './shared/documentation-items/documentation-items';
import { SvgViewerModule } from './shared/svg-viewer/svg-viewer';
import { ComponentsOverviewComponent } from './overview/overview.component';
@NgModule({
  imports: [
    //ExampleModule,
    CommonModule, MatNativeDateModule,
    ComponentViewerModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    /** Covalent Modules */
    CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentFileModule,
    CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
    CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentDataTableModule, CovalentJsonFormatterModule,
    CovalentMessageModule, CovalentVirtualScrollModule,
    ToolbarModule,
    SvgViewerModule,
   
    MaterialRoutingModule
  ],
  providers: [DocumentationItems],
  declarations: [
    MaterialComponent,ComponentsOverviewComponent]
})
export class MaterialModule { }
