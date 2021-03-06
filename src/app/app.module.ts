import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TdLoadingService } from '@covalent/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// register 'es' locale
registerLocaleData(localeEs);

import { DocsAppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { appRoutes, appRoutingProviders } from './app.routes';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatTabsModule,
         MatToolbarModule, MatGridListModule, MatTooltipModule } from '@angular/material';
         
import { CovalentLayoutModule, CovalentExpansionPanelModule, CovalentNotificationsModule, CovalentMenuModule,
         CovalentMediaModule,CovalentLoadingModule } from '@covalent/core';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { ToolbarModule } from './components/toolbar/toolbar.module';

import { GitHubService, InternalDocsService, SelectivePreloadingStrategyService } from './services';
import { getSelectedLanguage, createTranslateLoader } from './utilities/translate';

@NgModule({
  declarations: [
    DocsAppComponent,
    HomeComponent,
    TemplatesComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatTooltipModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentLoadingModule,
    CovalentExpansionPanelModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentMediaModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    ToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    GitHubService,
    TdLoadingService,
    InternalDocsService, 
    {

      provide: LOCALE_ID, useFactory: getSelectedLanguage, deps: [TranslateService],
    },
  
    SelectivePreloadingStrategyService,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
