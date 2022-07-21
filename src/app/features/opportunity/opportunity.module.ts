import { NgModule } from "@angular/core";
import { OpportunityListCompoent } from "./components/list/opportunity-list.component";
import { SharedModule } from "../../shared/shared.module";

import { OpportunityRoutingModule } from "./opportunity.routing.module";
import { OpportunityListContainer } from "./containers/list/opportunity-list.container";
import { OpportunitySummaryComponent } from "./components/summary/opportunity-summary.component";
import { OpportunitySummaryContainer } from "./containers/summary/opportunity-summary.container";

@NgModule({
    declarations: [
        OpportunityListCompoent,
        OpportunityListContainer,
        OpportunitySummaryComponent,
        OpportunitySummaryContainer
    ],
    imports: [
        SharedModule,
        OpportunityRoutingModule
    ],
    exports: [
        OpportunityListCompoent,
        OpportunityListContainer,
        OpportunitySummaryComponent,
        OpportunitySummaryContainer
    ]
})

export class OpportunityModule {}