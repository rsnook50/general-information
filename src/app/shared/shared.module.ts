import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatDividerModule } from "@angular/material/divider"
import { MatGridListModule } from "@angular/material/grid-list"

import { PhonePipe } from "./phone.pipe";

@NgModule({
    declarations: [
        PhonePipe
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        PhonePipe
    ]
})

export class SharedModule {}