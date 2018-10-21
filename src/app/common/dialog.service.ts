import { Injectable, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';

export interface IDialogData {
    type: "info" | "warning" | "error"
    size: "small" | "medium" | "large"
    text: string
    actions: any
}

@Injectable()
export class DialogService {
    defaultConfig = new MatDialogConfig();
    constructor(private matDialog: MatDialog) {
        this.defaultConfig.autoFocus = true;
        this.defaultConfig.hasBackdrop = true;


    }
    defaultOpen(config?: MatDialogConfig) {
        const dialog = this.matDialog.open(DialogComponent, config);

    }
    info(data?: IDialogData) {
        const config = Object.assign(this.defaultConfig, { data: { "test": "hello" } })
        this.defaultOpen(config)
    }


}



@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']

})
export class DialogComponent {


    constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) {

    }


}
