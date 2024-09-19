import { Component, ViewEncapsulation } from '@angular/core';
import { ITooltipRenderEventArgs, IStockChartEventArgs, ChartTheme, StockChartModule,  ChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { defaultData } from './indicator-data';

/**
 * Sample for default stockchart
 */
@Component({
    selector: 'control-content',
    templateUrl: 'default.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ StockChartModule, ChartAllModule, RangeNavigatorAllModule]
})
export class DefaultComponent {

    public data1: Object[] = defaultData;

    public primaryXAxis: Object = { valueType: 'DateTimeCategory', majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true }};

    public primaryYAxis: Object = {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', height: 0 },
    };
    public crosshair: Object = {
        enable: true
    };
    public tooltipRender(args: ITooltipRenderEventArgs): void {
        if (args.text.split('<br/>')[4]) {
        let target: number = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], 10);
        let value: string = (target / 100000000).toFixed(1) + 'B';
        args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
        }
    };
     // custom code start
    public load(args: IStockChartEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.stockChart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
     // custom code end
    public title: string = 'AAPL Stock Price';

    public tooltip: object = { enable: true };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public enable: boolean = true;
    constructor() {
        //code
    }
}
