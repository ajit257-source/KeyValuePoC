import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { HeadernavService } from 'src/app/shared/headernav.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  @Output() public sidenavToggle = new EventEmitter();
  subscription: Subscription;

  constructor(private headernavService: HeadernavService) { }

  ngOnInit() {
    this.subscription = this.headernavService.pageTitleSet$.subscribe(
      title => {
        this.title = title;
    });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
