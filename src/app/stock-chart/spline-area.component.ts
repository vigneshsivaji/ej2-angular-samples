import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IStockChartEventArgs, ChartTheme, StockChartModule, ChartAllModule, RangeNavigatorAllModule, ChartComponent } from '@syncfusion/ej2-angular-charts';
import { googl } from './stock-data';   
/**
 * Sample for Spline Area Series
 */
@Component({
    selector: 'control-content',
    templateUrl: 'spline-area.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ StockChartModule, ChartAllModule, RangeNavigatorAllModule]
})
export class SplineAreaComponent {

    public data1: Object[] = googl;

    public primaryXAxis: Object = {
        valueType: 'DateTime',  majorGridLines: { width: 0 }, crosshairTooltip: { enable: true }
    };

    public primaryYAxis: Object = {
        lineStyle: { width: 0 },
        majorTickLines: { height: 0 }, crosshairTooltip: { enable: true }
    };

    @ViewChild('stockChart')
    public chart: ChartComponent;

    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public title: string = 'Google Stock Price';
    public titleStyle: object = { color: 'black ' };
    public tooltip: object = {
        enable: true,
        format: '<b>${point.x}</b> <br>Stock Price : <b>${point.y}</b>',
        header: '',
        enableMarker: false
    };

    public crosshair: object = {
        enable: true,
        lineType: 'Both',
        snapToData: true, dashArray: '5, 5'
    };
    public seriesType: string[] = [];
    public indicatorType: string[] = [];
    public enable: boolean = true;
    public load(args: IStockChartEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.stockChart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        let themes: string[] = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentdark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
        let borderColor: string[] = ['#FD7E14', '#FD7E14', '#9333EA', '#8029F1', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
        this.chart.series[0].border.color = borderColor[themes.indexOf(args.stockChart.theme.toLowerCase())];
        this.chart.series[0].fill = 'url(#' + selectedTheme.toLowerCase() + '-gradient-chart)';
        this.chart.series[0].border = { width: 2, color: borderColor[themes.indexOf(args.stockChart.theme.toLowerCase())] }
    };
    constructor() {
        //code
    }
}
