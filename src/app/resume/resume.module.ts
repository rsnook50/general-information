import { NgModule } from "@angular/core";

import { ContactComponent } from "../contact/contact.component";
import { ResumeComponent } from "./resume.component";
import { ResumeRoutingModule } from "./resume.routing.module";

@NgModule({
    declarations: [
        ResumeComponent,
        ContactComponent
    ],
    imports: [
        ResumeRoutingModule
    ],
    exports: [
        ResumeComponent
    ]
})

export class ResumeModule {}