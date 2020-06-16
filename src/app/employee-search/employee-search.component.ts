import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Employees } from '../employee';
import { EmpRestService } from '../emp-rest.service';


@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  employees$: Observable<Employees[]>;
  private searchTerms = new Subject<string>();

  constructor(private rs: EmpRestService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    /* The code below is a scaffolded pipe to allow for intermittent submission
       of the search query without clicking
       submit or pressing enter in a text field */

    // this.employees$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystrok before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.rs.searchedEmployees(term)),
    // );
  }

}
