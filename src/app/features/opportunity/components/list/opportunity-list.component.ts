import { Component } from "@angular/core";
import { IOpportunity } from "../../models/opportunity.model";

@Component({
    selector: "app-opportunity-list",
    templateUrl: "./opportunity-list.component.html",
    styleUrls: ["./opportunity-list.component.scss"]
})

export class OpportunityListCompoent {
    opportunities: IOpportunity[] = [
        {
            "title": "Applications Architect",
            "companyName": "Lightwell Inc., an Elliassen Group Company",
            "startDate": "December 2021",
            "endDate": "",
            "details": [
                "Work with leadership to design and document new features",
                "Coordinate development, testing, and implementation to ensure quality code is produced",
                "Lead a cross-organizational team to keep quarterly roadmaps on track",
                "Develop solutions using .Net backend and Angular 9 frontend following SOLID methodology and repository patterns"
            ]
        },
        {
            "title": "Sr. Business Analyst",
            "companyName": "Marathon Petroleum",
            "startDate": "January 2021",
            "endDate": "December 2021",
            "details": [
                "Worked with leadership by presenting key indicators of product growth increasing revenue by $1.3 M/yr",
                "Managed all business to developer relationships by providing technical expertise that allowed more detailed requirements gathering",
                "Provided agile methodology expertise by working with a cross-functional team creating user stories, leading sprint planning, and gathering requirements to ensure the success of a business-critical product",
                "Improved process efficiencies by collaborating and coordinating with vendors in product development saving $75K yearly"
            ]
        },
        {
            "title": "Adv. Developer",
            "companyName": "Marathon Petroleum",
            "startDate": "April 2019",
            "endDate": "January 2021",
            "details": [
                "Managed a major project to upgrade a critical terminal automation system that included industry-standard compliance increasing revenue by $12M/yr",
                "Improved process efficiencies by Designing, testing, and implementing more consistent release deployments saving $60K yearly",
                "Implemented A/B testing by determining the reasoning behind customers inaccurate invoicing information and suggested solutions to improve software reliability"            
            ]
        },
        {
            "title": "Adv. Systems Integrator",
            "companyName": "Marathon Petroleum",
            "startDate": "July 2016",
            "endDate": "April 2019",
            "details": [
                "Partnered with 3rd party vendors by communicating and negotiating in product development phase for improved client relations considering scope, requirements, and cost",
                "Led a team of developers to cross-train support knowledge and increase backlog completion for a critical application"
            ]
        },
        {
            "title": "Developer",
            "companyName": "Rezult",
            "startDate": "May 2013",
            "endDate": "July 2016",
            "details": [
                "Improved reporting accuracies by working closely with business clients to present key insights derived from reports created in Tableau and Azure DevOps for real time results"
            ]
        },
        {
            "title": "Web Developer",
            "companyName": "Stericycle",
            "startDate": "September 2011",
            "endDate": "May 2013",
            "details": []
        },
        {
            "title": "IT Specialist",
            "companyName": "Sylink LLC.",
            "startDate": "February 2007",
            "endDate": "September 2011",
            "details": []
        },
        {
            "title": "IT Lead",
            "companyName": "Centrex Plastics",
            "startDate": "June 2006",
            "endDate": "December 2006",
            "details": []
        }
    ];
}