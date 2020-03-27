import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
    makes: any[];
    models: any[];
    vehicle: any = {}
    features: any[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes;
      console.log("MAKES", this.makes);
    });

    this.vehicleService.getFeatures().subscribe(features => {
      this.features = features;
      console.log("FEATURES", this.features);
    })
  }

  OnMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make)
    this.models =  selectedMake ? selectedMake.models : [];
    console.log("VEHICLE", this.vehicle);
  }

}
