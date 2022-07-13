import { NgModule } from "@angular/core";
import { ResumeComponent } from "./resume.component";
import { ResumeRoutingModule } from "./resume.routing.module";

@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        ResumeRoutingModule
    ],
    exports: [
        ResumeComponent
    ]
})

export class ResumeModule {}