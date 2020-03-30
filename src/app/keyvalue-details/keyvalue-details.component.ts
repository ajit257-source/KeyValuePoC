import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RepositoryService } from '../shared/repository.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keyvalue-details',
  templateUrl: './keyvalue-details.component.html',
  styleUrls: ['./keyvalue-details.component.css']
})
export class KeyvalueDetailsComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<KeyvalueDetailsComponent>, private repoService: RepositoryService,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private router: Router) { }
  sub: Subscription;
  isEdit: boolean;

  ngOnInit() {
    this.isEdit = !this.isEmpty(this.data);
  }

  actionFunction() {
    if(this.isEdit) {
      this.updateKeyValue(this.data);
    } else {
      this.createKeyValue(this.data);
    }
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }

  private createKeyValue(data: DialogData) {
    this.repoService.create('api/keyValue/create', data).subscribe(res => {
      console.log(res);
      var event = this.isEdit ? 'update' : 'create';
      this.dialogRef.close({event, data: res});
    }, error => console.error(error));
  }

  private updateKeyValue(data: any) {
    this.repoService.update('api/keyValue/update/' + data._id, data).subscribe(res => {
      console.log(data);
      var event = this.isEdit ? 'update' : 'create';
      this.dialogRef.close({event, data: res});
    }, error => console.error(error));
  }

  private isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
  }
}
