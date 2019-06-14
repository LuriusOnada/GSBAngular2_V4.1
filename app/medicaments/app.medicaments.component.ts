import { Component } from "@angular/core";
import { DataService } from "../services/app.service.data";
import { Observable } from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: "my-medicaments",
    templateUrl: "app.medicaments.html"
})

export class MedicamentsComponent {
    nomMedicament: string;
    lesDonsMedicaments: Array<any>;
    lesMedicaments: Array<any>;
    test : boolean = false;

    constructor(private dataService: DataService) {
        this.charger();
    }

    charger(): void {
        this.test = false;
        this.dataService.chargerDonMedicaments().subscribe(
            data => {
                this.lesDonsMedicaments = data;
            },
            error => {}
            );
    }

    cacher(): void {
        this.test = false;
    }

    afficher(): void {
        this.test = true;
    }

    chercher(): void {
        this.dataService.chargerMedicaments(this.nomMedicament).subscribe(
            data => {
                this.lesMedicaments = data;
            },
            error => {}
        );
    }
}