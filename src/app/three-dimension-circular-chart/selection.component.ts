import { Component, ViewEncapsulation } from '@angular/core';
import { CircularChart3DTheme } from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
import { CircularChart3DAllModule, CircularChart3DLoadedEventArgs } from '@syncfusion/ej2-angular-charts';

/**
 * Circular 3D Chart with selection sample.
 */
@Component({
    selector: 'control-content',
    templateUrl: 'selection.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [CircularChart3DAllModule]
})

export class PieSelection {

    public dataSource: Object[] = [
        { 'x': 'Chrome', y: 62.92 },
        { 'x': 'Internet Explorer', y: 6.12 },
        { 'x': 'Edge', y: 5.5 },
        { 'x': 'Opera', y: 3.15 },
        { 'x': 'Safari', y: 19.97 },
        { 'x': 'Others', y: 2.34 }
    ];
    public dataLabel: Object = {
        visible: true,
        name: 'x',
        position: 'Outside',
        font: {
            fontWeight: '600',
        },
        connectorStyle: { length: Browser.isDevice ? '20px' : '40px' }
    };
    public radius: string = Browser.isDevice ? '50%' : '70';
    public load(args: CircularChart3DLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = <CircularChart3DTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    //Initializing Circular 3D-Chart Title
    public title: string = 'Browser Market Shares in November 2023';
    public tooltip: Object = { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "" };
    public legendSettings: Object = {
        visible: true,
        position: Browser.isDevice ? 'Bottom' : 'Right',
        toggleVisibility: false
    };
    constructor() {
        // code
    };
}