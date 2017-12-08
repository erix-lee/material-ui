import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material.component';
import {   ComponentApi,
  ComponentExamples,
  ComponentOverview,
  ComponentViewer } from './component-viewer/component-viewer';
import { ComponentsOverviewComponent } from './overview/overview.component';

const routes: Routes =[
      { path: 'material', component: MaterialComponent,
      children: [
        {
          component: ComponentsOverviewComponent,
          path: '',
        },
        {
          path: ':section/:id',
          component: ComponentViewer,
          children: [
            {path: '', redirectTo: 'api', pathMatch: 'full'},
            {path: 'overview', component: ComponentOverview, pathMatch: 'full'},
            {path: 'api', component: ComponentApi, pathMatch: 'full'},
            {path: 'examples', component: ComponentExamples, pathMatch: 'full'},
            {path: '**', redirectTo: 'overview'},
          ],
        },
        {path: '**', redirectTo: ''},
      ]
     },
     
      
  
]

// [{ path: '', component: MaterialComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class MaterialRoutingModule { }
