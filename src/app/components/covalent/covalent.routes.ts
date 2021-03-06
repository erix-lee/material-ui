import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [{
  children: [{
      component:CovalentOverviewComponent,
      path: '',
    }, {
      component: HighlightDemoComponent,
      path: 'syntax-highlighting',
    }, {
      component: StepsDemoComponent,
      path: 'steps',
    }, {
      component: ExpansionPanelDemoComponent,
      path: 'expansion-panel',
    }, {
      component: FileInputDemoComponent,
      path: 'file-input',
    }, {
      component: FileUploadDemoComponent,
      path: 'file-upload',
    }, {
      component: LoadingDemoComponent,
      path: 'loading',
    }, {
      component: MarkdownDemoComponent,
      path: 'markdown',
    }, {
      component: MediaDemoComponent,
      path: 'media',
    }, {
      component: MessageDemoComponent,
      path: 'message',
    }, {
      component: HttpDemoComponent,
      path: 'http',
    }, {
      component: JsonFormatterDemoComponent,
      path: 'json-formatter',
    }, {
      component: ChipsDemoComponent,
      path: 'chips',
    }, {
      component: DialogsDemoComponent,
      path: 'dialogs',
    }, {
      component: SearchDemoComponent,
      path: 'search',
    }, {
      component: DirectivesComponent,
      path: 'directives',
    }, {
      component: PipesComponent,
      path: 'pipes',
    }, {
      component: AnimationsComponent,
      path: 'animations',
    }, {
      component: DataTableDemoComponent,
      path: 'data-table',
    }, {
      component: PagingDemoComponent,
      path: 'paging',
    }, {
      component: NotificationsDemoComponent,
      path: 'notifications',
    }, {
      component: VirtualScrollDemoComponent,
      path: 'virtual-scroll',
    }, {
      component: DynamicFormsDemoComponent,
      path: 'dynamic-forms',
    }, {
      component: CodeEditorDemoComponent,
      path: 'code-editor',
    }, {
      component: TextEditorDemoComponent,
      path: 'text-editor',
    }, {
      component: NgxChartsDemoComponent,
      path: 'ngx-charts',
    }, {
      component: NgxTranslateDemoComponent,
      path: 'ngx-translate',
    },
  ],
  component: CovalentComponent,
  path: 'covalent',
}];

export const covalentRoutes: any = RouterModule.forChild(routes);
