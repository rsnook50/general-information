import { Component } from "@angular/core";
import { IOpportunity } from "./opportunity";

@Component({
    selector: "app-opportunity-summary",
    templateUrl: "./opportunity-list.component.html",
    styleUrls: ["./opportunity-list.component.css"]
})

export class OpportunitySummaryComponent {
    opportunities: IOpportunity[] = [
        {
            "title": "Applications Architect",
            "companyName": "Lightwell Inc., an Elliassen Group Company",
            "startDate": "December 2021",
            "endDate": ""
        },
        {
            "title": "Sr. Business Analyst",
            "companyName": "Marathon Petroleum",
            "startDate": "January 2021",
            "endDate": "December 2021"
        },
        {
            "title": "Adv. Developer",
            "companyName": "Marathon Petroleum",
            "startDate": "April 2019",
            "endDate": "January 2021"
        },
        {
            "title": "Adv. Systems Integrator",
            "companyName": "Marathon Petroleum",
            "startDate": "July 2016",
            "endDate": "April 2019"
        },
        {
            "title": "Developer",
            "companyName": "Rezult",
            "startDate": "May 2013",
            "endDate": "July 2016"
        }
    ];
}