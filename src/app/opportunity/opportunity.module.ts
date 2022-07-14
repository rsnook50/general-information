import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { OpportunityListCompoent } from "./opportunity-list.component";
import { OpportunityRoutingModule } from "./opportunity.routing.module";

@NgModule({
    declarations: [
        OpportunityListCompoent
    ],
    imports: [
        SharedModule,
        OpportunityRoutingModule
    ],
    exports: [
        OpportunityListCompoent
    ]
})

export class OpportunityModule {}