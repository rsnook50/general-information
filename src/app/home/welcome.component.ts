import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})

export class WelcomeComponent implements OnInit{
    developYears: number = 0;

    ngOnInit(): void {
        var startYear = 2007;
        var currentYear = new Date().getFullYear();
        this.developYears = currentYear - startYear;
    }
}