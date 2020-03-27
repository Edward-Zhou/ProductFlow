import { Component, OnInit } from '@angular/core';
import { MachineService } from "../../services/machine.service";
import { Machine } from "../../models/machine";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})

export class MachineComponent implements OnInit {
  machines:Machine[];
  currentAction: string;
  constructor(private machineService : MachineService
    , private route: ActivatedRoute) {
      this.route.params.subscribe((params:any) =>{
        switch (params) {
          case "list":
            this.currentAction = "list";
            break;
          case "machines/create":
            this.currentAction = "create";
            break;
          case "edit":
            this.currentAction = "edit";
            break;
          default:
            this.currentAction = "list";
            break;
        }
      });
   }

  ngOnInit(): void {
    this.machines = this.machineService.machines;
    

  }
}
