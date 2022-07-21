import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ContactComponent } from "./components/contact.component";
import { ContactContainer } from "./containers/contact.container";

@NgModule({
    declarations: [
        ContactComponent,
        ContactContainer
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ContactComponent,
        ContactContainer
    ]
})

export class ContactModule {}