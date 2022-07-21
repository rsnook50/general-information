import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ResumeRoutingModule } from "./resume.routing.module";
import { ResumeComponent } from "./resume.component";
import { ContactModule } from "../features/contact/contact.module";
import { OpportunityModule } from "../features/opportunity/opportunity.module";

@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        SharedModule,
        ResumeRoutingModule,
        ContactModule,
        OpportunityModule
    ],
    exports: [
        ResumeComponent,
        SharedModule
    ]
})

export class ResumeModule {}