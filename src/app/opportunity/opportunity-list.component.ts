import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IOpportunity } from "./opportunity";
import { OpportunityService } from "./opportunity.service";

@Component({
    selector: "app-opportunity-list",
    templateUrl: "./opportunity-list.component.html",
    styleUrls: ["./opportunity-list.component.css"]
})

export class OpportunityListCompoent implements OnInit, OnDestroy {
    sub!: Subscription;
    errorMessage: string = "";
    opportunities: IOpportunity[] = [];

    constructor(private opportunityService: OpportunityService) {}

    ngOnInit(): void {
        this.sub = this.opportunityService.getList().subscribe({
            next: opportunities => {
                this.opportunities = opportunities;
            }
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onNotify(message: string): void {}
}