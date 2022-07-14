import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IOpportunity } from "./opportunity";

@Injectable({
    providedIn: "root"
})

export class OpportunityService {

    constructor(private http: HttpClient) {}

    getList(): Observable<IOpportunity[]> {
        return this.http.get<IOpportunity[]>("api/opportunity-list.json")
            .pipe(tap(data => console.log("List", JSON.stringify(data))),
            catchError(this.handleError)  
        );
    }

    getSummary(): Observable<IOpportunity[]> {
        return this.http.get<IOpportunity[]>("api/opportunity-summary.json")
            .pipe(tap(data => console.log("Summary", JSON.stringify(data))),
            catchError(this.handleError)  
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}