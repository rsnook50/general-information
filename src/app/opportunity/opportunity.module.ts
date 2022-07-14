import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { OpportunityListCompoent } from "./opportunity-list.component";
import { OpportunityRoutingModule } from "./opportunity.routing.module";

@NgModule({
    declarations: [
        OpportunityListCompoent
    ],
    imports: [
        CommonModule,
        OpportunityRoutingModule
    ],
    exports: [
        OpportunityListCompoent
    ]
})

export class OpportunityModule {}