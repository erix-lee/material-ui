import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { covalentRoutes } from './covalent.routes';

import { CovalentComponent } from './covalent.component';
import { CovalentOverviewComponent }  from './overview/overview.component';
import { HighlightDemoComponent } from './highlight/highlight.component';
import { StepsDemoComponent } from './steps/steps.component';
import { ExpansionPanelDemoComponent } from './expansion-panel/expansion-panel.component';
import { FileInputDemoComponent } from './file-input/file-input.component';
import { FileUploadDemoComponent } from './file-upload/file-upload.component';
import { LoadingDemoComponent } from './loading/loading.component';
import { MarkdownDemoComponent } from './markdown/markdown.component';
import { MediaDemoComponent } from './media/media.component';
import { MessageDemoComponent } from './message/message.component';
import { HttpDemoComponent } from './http/http.component';
import { JsonFormatterDemoComponent } from './json-formatter/json-formatter.component';
import { ChipsDemoComponent } from './chips/chips.component';
import { DialogsDemoComponent } from './dialogs/dialogs.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AnimationsComponent } from './animations/animations.component';
import { DataTableDemoComponent } from './data-table/data-table.component';
import { PagingDemoComponent } from './paging/paging.component';
import { SearchDemoComponent } from './search/search.component';
import { DynamicFormsDemoComponent } from './dynamic-forms/dynamic-forms.component';
import { CodeEditorDemoComponent } from './code-editor/code-editor.component';
import { TextEditorDemoComponent } from './text-editor/text-editor.component';
import { NotificationsDemoComponent } from './notifications/notifications.component';
import { VirtualScrollDemoComponent } from './virtual-scroll/virtual-scroll.component';
import { NgxChartsDemoComponent } from './ngx-charts/ngx-charts.component';
import { NgxTranslateDemoComponent } from './ngx-translate/ngx-translate.component';

// External Dependencies
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule, MatSlideToggleModule,
         MatSelectModule, MatToolbarModule, MatTabsModule, MatTooltipModule, MatAutocompleteModule,
         MatProgressBarModule } from '@angular/material';

import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentFileModule,
         CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
         CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentDataTableModule, CovalentJsonFormatterModule,
         CovalentMessageModule, CovalentVirtualScrollModule } from '@covalent/core';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CovalentTextEditorModule } from '@covalent/text-editor';

import { DocumentationToolsModule } from '../../documentation-tools';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    CovalentComponent,
    CovalentOverviewComponent,
    HighlightDemoComponent,
    StepsDemoComponent,
    ExpansionPanelDemoComponent,
    FileInputDemoComponent,
    FileUploadDemoComponent,
    LoadingDemoComponent,
    MarkdownDemoComponent,
    MediaDemoComponent,
    MessageDemoComponent,
    HttpDemoComponent,
    JsonFormatterDemoComponent,
    ChipsDemoComponent,
    DialogsDemoComponent,
    DirectivesComponent,
    PipesComponent,
    AnimationsComponent,
    DataTableDemoComponent,
    PagingDemoComponent,
    SearchDemoComponent,
    DynamicFormsDemoComponent,
    CodeEditorDemoComponent,
    TextEditorDemoComponent,
    NotificationsDemoComponent,
    VirtualScrollDemoComponent,
    // External Dependencies
    NgxChartsDemoComponent,
    NgxTranslateDemoComponent,
  ],
  imports: [
    /** Angular Modules */
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
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentFileModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentChipsModule,
    CovalentJsonFormatterModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentMessageModule,
    CovalentVirtualScrollModule,
    CovalentCodeEditorModule,
    CovalentTextEditorModule,
    DocumentationToolsModule,
    NgxChartsModule,
    TranslateModule,
    covalentRoutes,
    ToolbarModule,
  ],
})
export class CovalentModule {}
