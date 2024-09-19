import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Component, OnInit, ViewChild } from '@angular/core';
import { resourceAllocationData, resourceAllocationResources } from './data';
import { SBDescriptionComponent } from '../common/dp.component';
import { GanttComponent, GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { NgIf } from '@angular/common';
import { SBActionDescriptionComponent } from '../common/adp.component';
@Component({
    selector: 'ej2-ganttresources',
    templateUrl: 'resources.html',
    standalone: true,
    imports: [SBActionDescriptionComponent, GanttAllModule, NgIf ,SBDescriptionComponent]
})

export class GanttResourcesComponent implements OnInit {
    public data: object[];
    @ViewChild('gantt')
    public gantt: GanttComponent;
    public resources: object[];
    public taskSettings: object;
    public columns: object[];
    public labelSettings: object;
    public splitterSettings: object;
    public editSettings: object;
    public toolbar: string[];
    public resourceFields: object;
    public addDialogFields: object[];
    public editDialogFields: object[];
    public projectStartDate: Date;
    public projectEndDate: Date;
    public taskType: string;
    public dropdownlistObj?: DropDownList| any;
    public value?: any;
    public ngOnInit(): void {
        this.data = resourceAllocationData;
        this.resources = resourceAllocationResources;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            work:'work',
            type: 'taskType',
            resourceInfo: 'resources'
        };
        this.addDialogFields = [
          { type: 'Resources' }
        ];
        this.editDialogFields = [
          { type: 'Resources' }
        ];
        this.taskType = "FixedWork";
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'unit'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
        this.splitterSettings = {
            columnIndex: 2
        }
        this.labelSettings = {
            rightLabel: 'resources',
            taskLabel: '${Progress}%'
        };
        this.projectStartDate= new Date('03/28/2024');
        this.projectEndDate= new Date('07/28/2024');
    }

    public queryTaskbarInfo(args: any): void {
      if (args.data.ganttProperties.resourceNames) {
        let resourceName: string = args.data.ganttProperties.resourceNames;
        if (resourceName.split('[')[0].includes('Rose Fuller')) {
            args.taskbarBgColor = '#539ed6';
            args.milestoneColor = '#539ed6';
            args.progressBarBgColor = '#1c5d8e';
            args.taskbarBorderColor = '#1c5d8e';
            if (args.data.ganttProperties.progress === 0) {
              args.taskLabelColor = 'black';
            }
        } else if (resourceName.split('[')[0].includes('Van Jack')) {
            args.taskbarBgColor = '#ff826b';
            args.milestoneColor = '#ff826b';
            args.progressBarBgColor = '#b24531';
            args.taskbarBorderColor = '#b24531';
            if (args.data.ganttProperties.progress === 0) {
              args.taskLabelColor = 'black';
            }
        } else if (resourceName.split('[')[0].includes('Bergs Anton')) {
            args.taskbarBgColor = '#ef6fbb';
            args.milestoneColor = '#ef6fbb';
            args.progressBarBgColor = '#a53576';
            args.taskbarBorderColor = '#a53576';
            if (args.data.ganttProperties.progress === 0) {
              args.taskLabelColor = 'black';
            }
        } else if (resourceName.split('[')[0].includes('Fuller King')) {
            args.taskbarBgColor = '#87b972';
            args.milestoneColor = '#87b972';
            args.progressBarBgColor = '#4a7537';
            args.taskbarBorderColor = '#4a7537';
            if (args.data.ganttProperties.progress === 0) {
              args.taskLabelColor = 'black';
            }
        } else if (resourceName.split('[')[0].includes('Tamer Vinet')) {
            args.taskbarBgColor = '#a496cf';
            args.milestoneColor = '#a496cf';
            args.progressBarBgColor = '#635688';
            args.taskbarBorderColor = '#635688';
            if (args.data.ganttProperties.progress === 0) {
              args.taskLabelColor = 'black';
            }
        }
      }
      if (args.taskbarType === 'ParentTask') {
          args.taskbarBgColor = '#adadad';
          args.progressBarBgColor = '#6b6b6b';
          if (args.data.ganttProperties.progress === 0) {
            args.taskLabelColor = 'black';
          }
      }
    };

    public actionBegin (args: any): void {
      if (args.requestType === 'beforeOpenEditDialog' || args.requestType === 'beforeOpenAddDialog') {
        args.Resources.selectionSettings = {};
        args.Resources.columns.splice(0, 1);
      }
    };

    public editParams(): object {
      return {
        read: () => {
          this.value = this.dropdownlistObj ? this.dropdownlistObj.value : null;
          if (this.value === null) {
            this.value = [];
          }
          const gantt: any = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
          gantt.treeGridModule.currentEditRow[gantt.taskFields.resourceInfo] = [this.value];
          return this.value;
        },
        destroy: () => {
          if (this.dropdownlistObj) {
            this.dropdownlistObj.destroy();
          }
        },
        write: (args: any) => {
          const gantt: any = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
          gantt.treeGridModule.currentEditRow = {};
          this.dropdownlistObj = new DropDownList({
            dataSource: new DataManager(gantt.resources),
            fields: { text: gantt.resourceFields.name, value: gantt.resourceFields.id },
            enableRtl:gantt.enableRtl,
            popupHeight: '350px',
            value: gantt.treeGridModule.getResourceIds(args.rowData)
          });
          this.dropdownlistObj.appendTo(args.element as HTMLElement);
        }
      };
    }
}
