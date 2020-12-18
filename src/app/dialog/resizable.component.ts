import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
/**
 * Resizable Dialog Component
 */
@Component({
    selector: 'control-content',
    styleUrls: ['resizable.css'],
    templateUrl: 'resizable.html',
    encapsulation: ViewEncapsulation.None
})

export class ResizableDialogComponent {

    @ViewChild('resizeDialog')
    public resizeDialog: DialogComponent;

    @ViewChild('confirmButton')
    public dialogBtn: ButtonComponent;

    public dialogHeader = 'Resize Me!!!';
    public dialogCloseIcon: Boolean = true;
    public dialogWidth = '300px';
    public contentData = 'This is a dialog with resizable support.';
    public animationSettings: Object = { effect: 'None' };
    public resizeHandleDirection: ResizeDirections[] = ['All'];
    public hide: any;
    public dialogdragging: Boolean = true;
    public target = '.control-section';
    public showCloseIcon: Boolean = false;
    public visible: Boolean = true;
    public dialogResize: Boolean = true;

    public dialogBtnClick: EmitType<Object> = () => {
        this.resizeDialog.show();
        this.dialogOpen();
    }

    public dialogClose: EmitType<Object> = () => {
        this.dialogBtn.element.style.display = 'block';
    }

    public dialogOpen: EmitType<Object> = () => {
        this.dialogBtn.element.style.display = 'none';
    }
}
