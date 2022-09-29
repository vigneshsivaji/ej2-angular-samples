import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    AccumulationChartComponent, AccumulationChart, IAccLoadedEventArgs,
    IAccResizeEventArgs, AccumulationTheme
} from '@syncfusion/ej2-angular-charts';

/**
 * Sample for Funnel Chart
 */
@Component({
    selector: 'control-content',
    templateUrl: 'funnel.html',
    encapsulation: ViewEncapsulation.None
})
export class FunnelComponent {
    public data: Object[] = [
        { InterviewProcess : "Hired", Candidates : 55, DataLabelMappingName:"Hired: 55"},
        { InterviewProcess : "Personal Interview", Candidates : 58, DataLabelMappingName:"Personal Interview: 58"},
        { InterviewProcess : "Telephonic Interview", Candidates : 85, DataLabelMappingName:"Telephonic Interview: 85"},
        { InterviewProcess : "Screening", Candidates : 105, DataLabelMappingName:"Screening: 105"},
        { InterviewProcess : "Initial Validation", Candidates : 145, DataLabelMappingName:"Initial Validation: 145"},
        { InterviewProcess : "Candidates Applied", Candidates : 250, DataLabelMappingName:"Candidates Applied: 250"},
];
    //Initializing DataLabel
    public dataLabel: Object = {
        name: 'DataLabelMappingName', visible: true, position: 'Inside', 
        font: {
            fontWeight: '600',
          }
    };
    // custom code start
    public load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
   // custom code end
    public neckWidth: string = '10%';
    public neckHeight: string = '15%';
    public explode: boolean = false;
    public enableAnimation: boolean = false;
    public legendSettings: Object = { visible: false };
    public tooltip: Object = { enable: false };
    public title: string = 'Recruitment Process';
    constructor() {
        //code
    };

}