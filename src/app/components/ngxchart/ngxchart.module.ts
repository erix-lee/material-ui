import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxchartComponent, } from './ngxchart.component';
import { Routes, RouterModule } from '@angular/router';


import { FormsModule ,FormControl} from '@angular/forms';


import { SparklineComponent } from './sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ComboChartComponent, ComboSeriesVerticalComponent } from './combo-chart';
import { MatButtonModule,MatSliderModule,MatFormFieldModule ,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatIconModule,MatSelectModule} from '@angular/material';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';


import { DocumentationToolsModule } from '../../documentation-tools';
import {
  CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentFileModule,
  CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentDataTableModule, CovalentJsonFormatterModule,
  CovalentMessageModule, CovalentVirtualScrollModule
} from '@covalent/core';
const routes: Routes = [
  { path: 'ngxchart', component: NgxchartComponent },
];
@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,MatSliderModule,MatFormFieldModule ,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatIconModule,MatButtonModule,MatSelectModule,
    CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentFileModule,
    CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
    CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentDataTableModule, CovalentJsonFormatterModule,
    CovalentMessageModule, CovalentVirtualScrollModule,
    ToolbarModule,CovalentMediaModule,

    RouterModule.forChild(routes)
  ],
  declarations: [NgxchartComponent, SparklineComponent,
    TimelineFilterBarChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent],
  exports: [
    RouterModule
  ], 
})
export class NgxchartModule { }
