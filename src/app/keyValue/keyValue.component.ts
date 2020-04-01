import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogConfig,
          MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable } from '@angular/material';
import { KeyvalueDetailsComponent } from '../keyvalue-details/keyvalue-details.component';
import { RepositoryService } from '../shared/repository.service';


@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyValue.component.html',
  styleUrls: ['./keyValue.component.css']
})
export class KeyValueComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['_id', 'key', 'value', 'Action'];
  public dataSource = new MatTableDataSource<KeyValue>();
  result: any[] | KeyValue;
  data = [];
  dialogdata: DialogData;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(private repoService: RepositoryService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public loadData = () => {
    this.repoService.getData('api/keyValue/all').subscribe(res => {
      this.result = res as KeyValue[];
      this.result.sort((a: { createdAt: any; }, b: { createdAt: string; }) => b.createdAt.localeCompare(a.createdAt));
      this.result.forEach((element: any) => {
        this.data.push(element);
      });
      this.dataSource.data = this.data;
    }, error => console.error(error));
  }

  public openDialog(action: string, obj: DialogData): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "600px";
    dialogConfig.width = "640px";
    dialogConfig.data = obj;
    const dialogRef = this.dialog.open(KeyvalueDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result.event === 'update'){
        this.updateRowData(result.data);
      }else if(result.event == 'create'){
        this.addRowData(result.data);
      }
      this.refreshTable();
    });
  }

  private addRowData(row_obj: any){
    this.dataSource.data.push({
      _id: row_obj._id,
      key: row_obj.key,
      value: row_obj.value,
      createdAt: row_obj.createdAt
    });
   
    this.table.renderRows();
    var refreshTable = this.dataSource.data;
    refreshTable.sort((a: { createdAt: any; }, b: { createdAt: string; }) => b.createdAt.localeCompare(a.createdAt));
    this.dataSource.data = refreshTable;
  }

  public updateRowData(row_obj: any){
    this.dataSource.data = this.dataSource.data.filter((obj,key)=>{
      if(obj._id == row_obj.id){
        obj.value = row_obj.value;
      }
      return true;
    });
  }

  public deleteRowData(row_obj: any) {
    this.repoService.delete('api/keyValue/delete/' + row_obj._id).subscribe(res => {
      console.log(row_obj);
      this.dataSource.data = this.dataSource.data.filter((obj,key)=>{
        return obj._id != row_obj._id;
      });
    }, error => console.error(error));
  }

  private refreshTable() {
    this.dataSource.paginator = this.paginator;
  }

  private doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
