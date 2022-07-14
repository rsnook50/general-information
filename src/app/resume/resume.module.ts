import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ContactComponent } from "../contact/contact.component";
import { OpportunitySummaryComponent } from "../opportunity/opportunity-summary.component";
import { ResumeComponent } from "./resume.component";
import { ResumeRoutingModule } from "./resume.routing.module";

@NgModule({
    declarations: [
        ResumeComponent,
        ContactComponent,
        OpportunitySummaryComponent
    ],
    imports: [
        CommonModule,
        ResumeRoutingModule
    ],
    exports: [
        ResumeComponent
    ]
})

export class ResumeModule {}