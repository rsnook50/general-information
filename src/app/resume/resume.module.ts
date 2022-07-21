import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ResumeRoutingModule } from "./resume.routing.module";
import { ResumeComponent } from "./resume.component";
import { OpportunitySummaryComponent } from "../opportunity/opportunity-summary.component";
import { ContactModule } from "../features/contact/contact.module";

@NgModule({
    declarations: [
        ResumeComponent,
        OpportunitySummaryComponent
    ],
    imports: [
        SharedModule,
        ResumeRoutingModule,
        ContactModule
    ],
    exports: [
        ResumeComponent,
        SharedModule
    ]
})

export class ResumeModule {}