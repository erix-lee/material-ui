import { Component, ChangeDetectorRef, OnInit, ElementRef , enableProdMode} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Dir } from '@angular/cdk/bidi';
import { MatIconRegistry } from '@angular/material';
import { TdMediaService, LoadingMode, LoadingType } from '@covalent/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { getSelectedLanguage } from './utilities/translate';
import { getDirection } from './utilities/direction';
import { TdLoadingService } from '@covalent/core';
enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class DocsAppComponent implements OnInit {

  ngOnInit(): void {
    this.router.events
      .subscribe((event) => {

        if (event instanceof NavigationStart) { // 当导航成功结束时执行
          this._loadingService.register('configFullscreen');
        } else if (event instanceof NavigationEnd) { // 当导航成功结束时执行
          let divEle = this.elementRef.nativeElement.querySelector('.td-layout-nav-list-main .td-layout-nav-list-content');//获取

         // console.dir(divEle);
          if (divEle) {

            divEle.scrollTo(0, 0);
          }
          this._loadingService.resolve('configFullscreen');
        }
      });
  }

  routes: Object[] = [{
    icon: 'library_books',
    route: 'docs',
    title: 'Documentation',
  }, {
    icon: 'picture_in_picture',
    route: 'covalent',
    title: 'Components & Addons',
  }, {
    icon: 'picture_in_picture',
    route: 'material',
    title: 'Angular Material',
  }, {
    icon: 'picture_in_picture',
    route: 'ngxtable',
    title: 'Ngx Table',
  }, {
    icon: 'picture_in_picture',
    route: 'ngxchart',
    title: 'Ngx Chart',

  }, {
    icon: 'view_quilt',
    route: 'layouts',
    title: 'Layouts',
  }, {
    icon: 'color_lens',
    route: 'style-guide',
    title: 'Style Guide',
  }, {
    icon: 'extension',
    route: 'design-patterns',
    title: 'Design Patterns',
  }, {
    icon: 'view_carousel',
    route: 'templates',
    title: 'Templates',
  },
  ];

  dir: string;

  constructor(private _loadingService: TdLoadingService, private elementRef: ElementRef, private router: Router, private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    translateService: TranslateService) {
    this._loadingService.create({
      name: 'configFullscreen',
      mode: LoadingMode.Indeterminate,
      type: LoadingType.Linear,
      color: 'accent',
    });
    // Set fallback language
    translateService.setDefaultLang('en');
    // Supported languages
    translateService.addLangs(['en', 'es']);

    // Get selected language and load it
    translateService.use(getSelectedLanguage(translateService));

    // Register svgs
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-stroke',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-stroke.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'angular',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'angular-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'material-outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
    this._iconRegistry.addSvgIconSet(this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mdi.svg'));
    //this._iconRegistry.addSvgIconSetInNamespace('mdi', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mdi.svg'));
    // set direction

    this.dir = getDirection();
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

}
