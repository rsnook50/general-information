import { Component } from "@angular/core";
import { IOpportunity } from "./opportunity";

@Component({
    selector: "app-opportunity-list",
    templateUrl: "./opportunity-list.component.html",
    styleUrls: ["./opportunity-list.component.css"]
})

export class OpportunityListCompoent {
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
        },
        {
            "title": "Web Developer",
            "companyName": "Stericycle",
            "startDate": "September 2011",
            "endDate": "May 2013"
        },
        {
            "title": "IT Specialist",
            "companyName": "Sylink LLC.",
            "startDate": "February 2007",
            "endDate": "September 2011"
        },
        {
            "title": "IT Lead",
            "companyName": "Centrex Plastics",
            "startDate": "June 2006",
            "endDate": "December 2006"
        }
    ];
}