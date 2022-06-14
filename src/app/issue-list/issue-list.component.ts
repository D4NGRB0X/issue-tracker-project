import {Component, OnDestroy, OnInit} from '@angular/core';
import {IssuesService} from '../services/issues.service';
import {Issue} from '../Issue/issue';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit, OnDestroy {

  public issues: Issue[] = [];
  private _destroy$: Subject<void> = new Subject<void>();
  constructor( private readonly _issueService: IssuesService) {
  }

  public ngOnInit(): void {
    this.issues = this._getIssues();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _getIssues(issues: Issue[] = []): Issue[] {
    this._issueService.getPendingIssues().pipe(takeUntil(this._destroy$)).subscribe(
      {
        next: (resp) => {
          resp.forEach((item) => issues.push(item as Issue));
        }
    });
    return issues;
  }
}
