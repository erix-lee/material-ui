

import { NgxtableComponent } from './ngxtable.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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

// -- Basic
import { BasicFixedComponent } from './basic/basic-fixed.component';
import { BasicAutoComponent } from './basic/basic-auto.component';
import { VirtualScrollComponent } from './basic/virtual.component';
import { InlineEditComponent } from './basic/inline.component';
import { HorzVertScrolling } from './basic/scrolling.component';
import { MultipleTablesComponent } from './basic/multiple.component';
import { FullScreenComponent } from './basic/fullscreen.component';
import { RowDetailsComponent } from './basic/row-detail.component';
import { ResponsiveComponent } from './basic/responsive.component';
import { FilterBarComponent } from './basic/filter.component';
import { TabsDemoComponent } from './basic/tabs.component';
import { LiveDataComponent } from './basic/live.component';
import { RxDemoComponent } from './basic/rx.component';
import { ContextMenuDemoComponent } from './basic/contextmenu.component';
import { RowCssComponent } from './basic/css.component';
import { DynamicHeightComponent } from './basic/dynamic-height.component';
import { FooterDemoComponent } from './basic/footer.component';
import { RowGroupingComponent } from './basic/row-grouping.component';

// -- Themes
import { BootstrapThemeComponent } from './basic/bootstrap.component';
import { DarkThemeComponent } from './basic/dark-theme.component';

// -- Paging
import { ClientPagingComponent } from './paging/paging-client.component';
import { ServerPagingComponent } from './paging/paging-server.component';
import { ServerScrollingComponent } from './paging/scrolling-server.component';
import { VirtualPagingComponent } from './paging/paging-virtual.component';

// -- Sorting
import { SortingComparatorComponent } from './sorting/sorting-comparator.component';
import { DefaultSortingComponent } from './sorting/sorting-default.component';
import { ServerSortingComponent } from './sorting/sorting-server.component';
import { ClientSortingComponent } from './sorting/sorting-client.component';

// -- Templates
import { InlineTemplatesComponent } from './templates/template-dom.component';
import { TemplateRefTemplatesComponent } from './templates/template-obj.component';

// -- Selection
import { CellSelectionComponent } from './selection/selection-cell.component';
import { MultiSelectionComponent } from './selection/selection-multi.component';
import { SingleSelectionComponent } from './selection/selection-single.component';
import { MultiDisableSelectionComponent } from './selection/selection-disabled.component';
import { CheckboxSelectionComponent } from './selection/selection-chkbox.component';
import { MultiClickSelectionComponent } from './selection/selection-multi-click.component';
import { CustomCheckboxSelectionComponent } from './selection/selection-chkbox-template.component';

// -- Columns
import { ColumnToggleComponent } from './columns/column-toggle.component';
import { ColumnStandardComponent } from './columns/column-standard.component';
import { ColumnForceComponent } from './columns/column-force.component';
import { ColumnFlexComponent } from './columns/column-flex.component';
import { ColumnPinningComponent } from './columns/pinning.component';


const routes: Routes = [
  {
    path: 'ngxtable', component: NgxtableComponent,

    children: [
      {
        component: BasicAutoComponent,
        path: '',
      },


      { component: BasicFixedComponent, path: 'basic-fixed' },
      { component: FullScreenComponent, path: 'full-screen' },
      { component: InlineEditComponent, path: 'inline-edit' },
      { component: VirtualScrollComponent, path: 'virtual-scroll' },
      { component: HorzVertScrolling, path: 'horz-vert-scrolling' },
      { component: MultipleTablesComponent, path: 'multiple-tables' },
      { component: RowDetailsComponent, path: 'row-details' },
      { component: ResponsiveComponent, path: 'responsive' },
      { component: FilterBarComponent, path: 'filter' },
      { component: TabsDemoComponent, path: 'hidden' },
      { component: LiveDataComponent, path: 'live' },
      { component: RxDemoComponent, path: 'rx' },
      { component: ContextMenuDemoComponent, path: 'contextmenu' },
      { component: RowCssComponent, path: 'css' },
      { component: DynamicHeightComponent, path: 'dynamic' },
      { component: FooterDemoComponent, path: 'footer' },


      { component: RowGroupingComponent, path: 'row-grouping' },
      { component: ClientPagingComponent, path: 'client-paging' },
      { component: ServerPagingComponent, path: 'server-paging' },
      { component: ServerScrollingComponent, path: 'server-scrolling' },
      { component: VirtualPagingComponent, path: 'virtual-paging' },

      { component: ClientSortingComponent, path: 'client-sorting' },
      { component: DefaultSortingComponent, path: 'default-sorting' },
      { component: ServerSortingComponent, path: 'server-sorting' },
      { component: SortingComparatorComponent, path: 'comparator-sorting' },

      { component: CellSelectionComponent, path: 'cell-selection' },
      { component: SingleSelectionComponent, path: 'single-selection' },
      { component: MultiSelectionComponent, path: 'multi-selection' },
      { component: MultiDisableSelectionComponent, path: 'multi-disable-selection' },
      { component: CheckboxSelectionComponent, path: 'chkbox-selection' },
      { component: CustomCheckboxSelectionComponent, path: 'chkbox-selection-template' },
      { component: MultiClickSelectionComponent, path: 'multi-click-selection' },


      { component: TemplateRefTemplatesComponent, path: 'templateref' },
      { component: InlineTemplatesComponent, path: 'inline' },

      { component: ColumnFlexComponent, path: 'flex' },
      { component: ColumnToggleComponent, path: 'toggle' },
      { component: ColumnStandardComponent, path: 'fixed' },
      { component: ColumnForceComponent, path: 'force' },
      { component: ColumnPinningComponent, path: 'pinning' },]
  }];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    /** Material Modules */
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

    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NgxtableComponent,
    BasicAutoComponent,
    BasicFixedComponent,
    FullScreenComponent,
    InlineEditComponent,
    VirtualScrollComponent,
    HorzVertScrolling,
    MultipleTablesComponent,
    RowDetailsComponent,
    ResponsiveComponent,
    ClientPagingComponent,
    ServerPagingComponent,
    ServerScrollingComponent,
    ClientSortingComponent,
    DefaultSortingComponent,
    ServerSortingComponent,
    SortingComparatorComponent,
    CellSelectionComponent,
    MultiSelectionComponent,
    InlineTemplatesComponent,
    TemplateRefTemplatesComponent,
    ColumnFlexComponent,
    ColumnToggleComponent,
    ColumnStandardComponent,
    ColumnForceComponent,
    ColumnPinningComponent,
    FilterBarComponent,
    VirtualPagingComponent,
    DarkThemeComponent,
    TabsDemoComponent,
    SingleSelectionComponent,
    LiveDataComponent,
    MultiDisableSelectionComponent,
    RxDemoComponent,
    ContextMenuDemoComponent,
    CheckboxSelectionComponent,
    CustomCheckboxSelectionComponent,
    MultiClickSelectionComponent,
    RowCssComponent,
    DynamicHeightComponent,
    FooterDemoComponent,
    RowGroupingComponent,
    BootstrapThemeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class NgxtableModule { }
