import { Component, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { HeatMap, Legend, Tooltip, Adaptor, ILoadedEventArgs, ITooltipEventArgs, HeatMapTheme, HeatMapModule } from '@syncfusion/ej2-angular-heatmap';
import { SampleDataSource } from './large-data';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';
HeatMap.Inject(Tooltip, Legend, Adaptor);

@Component({
    selector: 'control-content',
    templateUrl: 'large-data.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [HeatMapModule, SBActionDescriptionComponent, SBDescriptionComponent]
})
export class HeatmapLargeDataComponent {

    titleSettings: Object = {
        text: 'Annual Flight Traffic Report',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit'
        }
    };
    xAxis: Object = {
        minimum: new Date(2017, 0, 1),
        maximum: new Date(2017, 11, 31),
        intervalType: 'Days',
        valueType: 'DateTime',
        labelFormat: 'MMM',
        showLabelOn: 'Months',
        textStyle: {
            fontFamily: 'inherit'
        }
    };
    yAxis: Object = {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
            '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
            '22:00', '23:00', '24:00'],
        textStyle: {
            fontFamily: 'inherit'
        }
    };
    renderingMode: string = 'Canvas';
    dataSource: Object = new SampleDataSource().largeData;
    public legendSettings: Object = {
        visible: false
    };
    public cellSettings: Object = {
        border: {
            width: 0
        },
        textStyle: {
            fontFamily: 'inherit'
        }
    };
    public tooltipSettings: Object = {
        textStyle: {
            fontFamily: 'inherit'
        }
    };
    public paletteSettings: Object = {
        palette: [{ value: 150, color: '#A6DC7E' },
        { value: 250, color: '#DCD57E' },
        { value: 300, color: '#DC8D7E' }
        ],
        type: 'Gradient'
    };
    public tooltipRender(args: ITooltipEventArgs): void {
        let intl: Internationalization = new Internationalization();
        let format: Function = intl.getDateFormat({ format: 'MMM dd, yyyy' });
        let value: string = format(args.xValue);
        args.content = [value + ' ' + args.yLabel + ' : ' + args.value + ' flight arrivals'];
    };
    public load(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.heatmap.theme = <HeatMapTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark")
        .replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        // custom code end
    };
    constructor() {
        //code
    };
}