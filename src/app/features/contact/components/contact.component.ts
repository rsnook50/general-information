import { Component } from "@angular/core";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"]
})

export class ContactComponent {
    email: string = "rsnook50@gmail.com";
    phone: string = "4197011584";
    city: string = "Findlay";
    state: string = "OH";
    linkedInUrl: string = "http://www.linkedin.com/in/richard-snook-b92baa105"
}