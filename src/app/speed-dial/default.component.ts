import { Component, ViewEncapsulation } from '@angular/core';
import { SpeedDialItemModel } from '@syncfusion/ej2-angular-buttons';
/**
 * Default Speed Dial component
 */
@Component({
    selector: 'control-content',
    templateUrl: 'default.html',
    styleUrls: ['default.css'],
    encapsulation: ViewEncapsulation.None
})

export class DefaultSpeedDialComponent {
    public items: SpeedDialItemModel[] = [
        {
            title:'Home',
            iconCss:'speeddial-icons speeddial-icon-house'
        },
        {
            title:'People',
            iconCss:'speeddial-icons speeddial-icon-people'
        },
        {
            title:'Search',
            iconCss:'speeddial-icons speeddial-icon-search'
        },
        {
            title:'Message',
            iconCss:'speeddial-icons speeddial-icon-message'
        }
    ];
}