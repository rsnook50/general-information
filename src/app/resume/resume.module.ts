import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ResumeRoutingModule } from "./resume.routing.module";
import { ResumeComponent } from "./resume.component";
import { ContactComponent } from "../contact/contact.component";
import { OpportunitySummaryComponent } from "../opportunity/opportunity-summary.component";

@NgModule({
    declarations: [
        ResumeComponent,
        ContactComponent,
        OpportunitySummaryComponent
    ],
    imports: [
        SharedModule,
        ResumeRoutingModule
    ],
    exports: [
        ResumeComponent
    ]
})

export class ResumeModule {}