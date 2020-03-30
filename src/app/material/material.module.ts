import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule, MatSidenavModule, MatFormFieldModule,
   MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule,
    MatListModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  declarations: []
})
export class MaterialModule { }