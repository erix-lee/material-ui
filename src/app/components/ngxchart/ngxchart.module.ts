import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxchartComponent, } from './ngxchart.component';
import { Routes, RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';


import { SparklineComponent } from './sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ComboChartComponent, ComboSeriesVerticalComponent } from './combo-chart';
import { MatSliderModule,MatFormFieldModule ,MatDatepickerModule,MatInputModule,MatNativeDateModule} from '@angular/material';
const routes: Routes = [
  { path: 'ngxchart', component: NgxchartComponent },
];
@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,MatSliderModule,MatFormFieldModule ,MatDatepickerModule,MatInputModule,MatNativeDateModule,
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
