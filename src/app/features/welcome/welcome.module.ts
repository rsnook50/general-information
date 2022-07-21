import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { WelcomeComponent } from "./components/welcome.component";
import { WelcomeContainer } from "./containers/welcome.container";

@NgModule({
    declarations: [
        WelcomeComponent,
        WelcomeContainer
    ],
    imports: [
        SharedModule
    ],
    exports:[
        WelcomeComponent,
        WelcomeContainer
    ]
})

export class WelcomeModule {}