import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';

/**
 * Keyboard Interactions In Tab Component
 */
@Component({
    selector: 'control-content',
    templateUrl: 'keyboard-interaction.html',
    styleUrls: ['tab.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class KeyboardTabComponent {
    @ViewChild('tabObj') tabObj: TabComponent;
    public ngAfterViewInit(): void {
    document.body.addEventListener('keydown', (e: KeyboardEvent) => {
      const tabElement: HTMLElement = this.tabObj.element.querySelector(
        '.e-toolbar-item.e-template.e-active .e-tab-wrap'
      );
      if (e.altKey && e.keyCode === 74 && tabElement) {
        tabElement.focus();
      }
    });
}
    // Mapping Tab items Header property   
    public headerText: Object = [{ text: 'HTML' }, { text: 'C-Sharp(C#)' }, { text: 'Java' }, { text: 'VB.NET' },
    { text: 'Xamarin' }, { text: 'ASP.NET' }, { text: 'ASP.NET MVC' }, { text: 'JavaScript' }];
}