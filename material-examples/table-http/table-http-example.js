/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { merge } from "rxjs/observable/merge";
import { of as observableOf } from "rxjs/observable/of";
import { catchError } from "rxjs/operators/catchError";
import { map } from "rxjs/operators/map";
import { startWith } from "rxjs/operators/startWith";
import { switchMap } from "rxjs/operators/switchMap";
/**
 * \@title Table retrieving data through HTTP
 */
export class TableHttpExample {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.dataSource = new MatTableDataSource();
        this.resultsLength = 0;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(() => {
            this.isLoadingResults = true;
            return /** @type {?} */ ((this.exampleDatabase)).getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }), map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        }), catchError(() => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return observableOf([]);
        })).subscribe(data => this.dataSource.data = data);
    }
}
TableHttpExample.decorators = [
    { type: Component, args: [{
                selector: 'table-http-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; max-height: 500px; min-width: 300px; position: relative; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .example-table { overflow: auto; min-height: 300px; } .example-loading-shade { position: absolute; top: 0; left: 0; bottom: 56px; right: 0; background: rgba(0, 0, 0, 0.15); z-index: 1; display: flex; align-items: center; justify-content: center; } .example-rate-limit-reached { color: #980000; max-width: 360px; text-align: center; } /* Column Widths */ .mat-column-number, .mat-column-state { max-width: 64px; } .mat-column-created { max-width: 124px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\"><mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner><div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">GitHub's API rate limit has been reached. It will be reset in one minute.</div></div><mat-table #table [dataSource]=\"dataSource\" class=\"example-table\" matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\"><ng-container matColumnDef=\"number\"><mat-header-cell *matHeaderCellDef>#</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.number }}</mat-cell></ng-container><ng-container matColumnDef=\"title\"><mat-header-cell *matHeaderCellDef>Title</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.title }}</mat-cell></ng-container><ng-container matColumnDef=\"state\"><mat-header-cell *matHeaderCellDef>State</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.state }}</mat-cell></ng-container><ng-container matColumnDef=\"created\"><mat-header-cell *matHeaderCellDef mat-sort-header disableClear=\"true\">Created</mat-header-cell><mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</mat-cell></ng-container><mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row><mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row></mat-table><mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator></div>",
            },] },
];
/** @nocollapse */
TableHttpExample.ctorParameters = () => [
    { type: HttpClient, },
];
TableHttpExample.propDecorators = {
    "paginator": [{ type: ViewChild, args: [MatPaginator,] },],
    "sort": [{ type: ViewChild, args: [MatSort,] },],
};
function TableHttpExample_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TableHttpExample.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TableHttpExample.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TableHttpExample.propDecorators;
    /** @type {?} */
    TableHttpExample.prototype.displayedColumns;
    /** @type {?} */
    TableHttpExample.prototype.exampleDatabase;
    /** @type {?} */
    TableHttpExample.prototype.dataSource;
    /** @type {?} */
    TableHttpExample.prototype.resultsLength;
    /** @type {?} */
    TableHttpExample.prototype.isLoadingResults;
    /** @type {?} */
    TableHttpExample.prototype.isRateLimitReached;
    /** @type {?} */
    TableHttpExample.prototype.paginator;
    /** @type {?} */
    TableHttpExample.prototype.sort;
    /** @type {?} */
    TableHttpExample.prototype.http;
}
/**
 * @record
 */
export function GithubApi() { }
function GithubApi_tsickle_Closure_declarations() {
    /** @type {?} */
    GithubApi.prototype.items;
    /** @type {?} */
    GithubApi.prototype.total_count;
}
/**
 * @record
 */
export function GithubIssue() { }
function GithubIssue_tsickle_Closure_declarations() {
    /** @type {?} */
    GithubIssue.prototype.created_at;
    /** @type {?} */
    GithubIssue.prototype.number;
    /** @type {?} */
    GithubIssue.prototype.state;
    /** @type {?} */
    GithubIssue.prototype.title;
}
/**
 * An example database that the data source uses to retrieve data for the table.
 */
export class ExampleHttpDao {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} sort
     * @param {?} order
     * @param {?} page
     * @return {?}
     */
    getRepoIssues(sort, order, page) {
        const /** @type {?} */ href = 'https://api.github.com/search/issues';
        const /** @type {?} */ requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
        return this.http.get(requestUrl);
    }
}
function ExampleHttpDao_tsickle_Closure_declarations() {
    /** @type {?} */
    ExampleHttpDao.prototype.http;
}
//# sourceMappingURL=table-http-example.js.map