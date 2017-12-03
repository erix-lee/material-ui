import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { fadeAnimation } from '../../app.animations';
@Component({
  selector: 'app-ngxtable',
 
  encapsulation: ViewEncapsulation.None,
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  templateUrl: './ngxtable.component.html',
  styleUrls: ['./ngxtable.component.scss'],
  animations: [fadeAnimation],
})
export class NgxtableComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  state: string;
  demos: Object[] = [{
    name: 'Basic',
    child: [
      {
        description: '', icon: 'picture_in_picture', route: '.', title: 'Basic Auto'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'virtual-scroll', title: '10k Rows'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'full-screen', title: 'Full Screen'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'inline-edit', title: 'Inline Editing'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'horz-vert-scrolling', title: 'Horz/Vert Scrolling'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'multiple-tables', title: 'Multiple Tables'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'filter', title: 'Filtering'
      },
      {
        description: 'has bug', icon: 'picture_in_picture', route: 'hidden', title: 'Hidden On Load'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'live', title: 'Live Data'
      },
      {
        description: '[bug]', icon: 'picture_in_picture', route: 'rx', title: 'RxJS'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'contextmenu', title: 'Context Menu'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'css', title: 'CSS Classes'
      },
      {
        description: '', icon: 'picture_in_picture', route: 'footer', title: 'Footer Template'
      },
    ]
  },

  {
    name: 'Rows',
    child: [

      {
        description: 'row-grouping', icon: 'picture_in_picture', route: 'row-grouping', title: 'Row Grouping'
      },

      {
        description: 'basic-fixed', icon: 'picture_in_picture', route: 'basic-fixed', title: 'Fixed Row Height'
      },
      {
        description: 'dynamic', icon: 'picture_in_picture', route: 'dynamic', title: 'Dynamic Row Height'
      },
      {
        description: 'row-details', icon: 'picture_in_picture', route: 'row-details', title: 'Row Detail'
      },
      {
        description: 'responsive', icon: 'picture_in_picture', route: 'responsive', title: 'Responsive'
      },
    ]
  },

  {
    name: 'Paging',
    child: [

      {
        description: 'client-paging', icon: 'picture_in_picture', route: 'client-paging', title: 'Client-side'
      },
      {
        description: 'server-paging', icon: 'picture_in_picture', route: 'server-paging', title: 'Server-side'
      },
      {
        description: 'server-scrolling', icon: 'picture_in_picture', route: 'server-scrolling', title: 'Scrolling server-side'
      },
      {
        description: 'virtual-paging [bug]', icon: 'picture_in_picture', route: 'virtual-paging', title: 'Virtual server-side'
      },
    ]
  },

  {
    name: 'Sorting',
    child: [
 
        {
          description: 'client-sorting', icon: 'picture_in_picture', route: 'client-sorting', title: 'Client-side'
        },
        {
          description: 'default-sorting', icon: 'picture_in_picture', route: 'default-sorting', title: 'Default sort'
        },
        {
          description: 'server-sorting', icon: 'picture_in_picture', route: 'server-sorting', title: 'Server-side'
        },
        {
          description: 'comparator-sorting', icon: 'picture_in_picture', route: 'comparator-sorting', title: 'Comparator'
        },
      ]
  },

  {
    name: 'Selection',
    child: [

      {
        description: 'cell-selection', icon: 'picture_in_picture', route: 'cell-selection', title: 'Cell'
      },
      {
        description: 'single-selection', icon: 'picture_in_picture', route: 'single-selection', title: 'Single Row'
      },
      {
        description: 'multi-selection', icon: 'picture_in_picture', route: 'multi-selection', title: 'Multi Row'
      },
      {
        description: 'multi-click-selection', icon: 'picture_in_picture', route: 'multi-click-selection', title: 'Multi Click Row'
      },
      {
        description: 'multidisable-selection', icon: 'picture_in_picture', route: 'multi-disable-selection', title: 'Disable Callback'
      },
      {
        description: 'chkbox-selection', icon: 'picture_in_picture', route: 'chkbox-selection', title: 'Checkbox'
      },
      {
        description: 'chkbox-selection-template', icon: 'picture_in_picture', route: 'chkbox-selection-template', title: 'Custom Checkbox'
      },
    ]
  },

  {
    name: 'Templates',
    child: [


      {
        description: 'inline', icon: 'picture_in_picture', route: 'inline', title: 'Inline'
      },
      {
        description: 'templateref', icon: 'picture_in_picture', route: 'templateref', title: 'TemplateRef'
      },
    ]
  },

  {
    name: 'Column',
    child: [

      {
        description: 'flex', icon: 'picture_in_picture', route: 'flex', title: 'Flex'
      },
      {
        description: 'toggle', icon: 'picture_in_picture', route: 'toggle', title: 'Toggling'
      },
      {
        description: 'fixed', icon: 'picture_in_picture', route: 'fixed', title: 'Fixed'
      },
      {
        description: 'force', icon: 'picture_in_picture', route: 'force', title: 'Force'
      },
      {
        description: 'pinning', icon: 'picture_in_picture', route: 'pinning', title: 'Pinning'
      },
    ]
  }];

  constructor(location: Location, public media: TdMediaService) {
    this.state = location.path(true);
  }

  setstate(state) {
    this.state = state;
  }

  version: string = "a";


  ngOnInit() {
  }

}
