import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    AccumulationChart, AccumulationChartComponent, IAccLoadedEventArgs, AccumulationTheme
} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for Pie with Various Radius
 */
@Component({
    selector: 'control-content',
    templateUrl: 'pie-radius.html',
    encapsulation: ViewEncapsulation.None
})
export class PieRadiusComponent {
    public data: Object[] = [
        { Country : "Argentina", Population : 505370, Radius : Browser.isDevice ? '110' : "100", text: 'Argentina'},
        { Country : "Belgium",    Population : 551500, Radius : Browser.isDevice ? '120' :"118.7", text: 'Belgium' },
        { Country : "Dominican Republic",  Population : 312685 , Radius : '137.5', text: Browser.isDevice ? 'Dominican <br> Republic' :  'Dominican Republic' },
        { Country : "Cuba", Population : 350000 , Radius : '124.6', text: 'Cuba'},
        { Country : "Egypt", Population : 301000 , Radius : "150.8", text: 'Egypt'},
        { Country : "Kazakhstan", Population : 300000, Radius : "155.5",text: 'Kazakhstan'},
        { Country : "Somalia",  Population : 357022, Radius : "160.6", text: 'Somalia'}
    ];
    @ViewChild('pie')
    public pie: AccumulationChartComponent | AccumulationChart;
    //Initializing Legend
    public legendSettings: Object = {
        visible: true,
        reverse: true
    };
    //Initializing Datalabel
    public dataLabel: Object = {
        visible: true, position: Browser.isDevice ? 'Inside' : 'Outside',
        name: 'text',
        connectorStyle: { length: '20px', type:'Curve' },
        font: {
            fontWeight: '600'
        },
        enableRotation: true,
    };
      // custom code start
    public load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    }
      // custom code end
    public radius: string = 'Radius';
    public enableAnimation: boolean = true;
    public enableSmartLabels: boolean = true;
    public tooltip: Object = {
        enable: true,
        header: '',
        format: '<b>${point.x}</b><br>Area in square km: <b>${point.y}</b><br>Population density per square km: <b>${point.tooltip}',
        name: 'Radius'
    };
    public title: string = 'Pie with different Radius';
    constructor() {
        //code
    };

}


