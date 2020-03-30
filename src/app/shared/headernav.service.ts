import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeadernavService {
    // Observable string sources
    private pageTitleSource = new Subject<string>();

    // Observable string streams
    pageTitleSet$ = this.pageTitleSource.asObservable();

    public setTitle(area: string) {
        this.pageTitleSource.next(area);
    }
}
