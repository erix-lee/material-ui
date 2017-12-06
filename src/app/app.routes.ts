import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { SelectivePreloadingStrategyService } from './services';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
  }, {
    component: TemplatesComponent,
    path: 'templates',
    
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/docs/docs.module#DocsModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/ngxchart/ngxchart.module#NgxchartModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/ngxtable/ngxtable.module#NgxtableModule',
    }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/style-guide/style-guide.module#StyleGuideModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/design-patterns/design-patterns.module#DesignPatternsModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/layouts/layouts.module#LayoutsModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/material/material.module#MaterialModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload:falsetrue, }, loadChildren: './components/covalent/components.module#ComponentsModule',
  }
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: SelectivePreloadingStrategyService,
});
