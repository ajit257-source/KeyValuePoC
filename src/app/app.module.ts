import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {PopoverModule} from 'ngx-popover';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { KeyValueComponent } from './keyValue/keyValue.component';
import { HeadernavService } from './shared/headernav.service';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { KeyvalueDetailsComponent } from './keyvalue-details/keyvalue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
    KeyValueComponent,
    KeyvalueDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    NgbModule,
    PopoverModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmrBV6hCMba_5YZnNi_hdkpzwqIxXIQzA',
      libraries: ['places']
    })
  ],
  entryComponents: [
    KeyvalueDetailsComponent
  ],
  providers: [HeadernavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
