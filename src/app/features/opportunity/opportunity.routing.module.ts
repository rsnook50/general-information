import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OpportunityListContainer } from "./containers/list/opportunity-list.container";

const routes: Routes = [
    {
        path: "",
        component: OpportunityListContainer
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class OpportunityRoutingModule {}