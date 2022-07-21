import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { ResumeRoutingModule } from "./resume.routing.module";
import { ContactModule } from "../contact/contact.module";
import { OpportunityModule } from "../opportunity/opportunity.module";
import { ResumeContainer } from "./containers/resume.container";
import { ResumeComponent } from "./components/resume.component";

@NgModule({
    declarations: [
        ResumeComponent,
        ResumeContainer
    ],
    imports: [
        SharedModule,
        ResumeRoutingModule,
        ContactModule,
        OpportunityModule
    ],
    exports: [
        ResumeComponent,
        ResumeContainer,
        SharedModule
    ]
})

export class ResumeModule {}