import { Injectable } from '@angular/core';
import { Machine } from '../models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  machines: Machine[] = [
    {id: 1, name: "M1", state:"S1"},
    {id: 2, name: "M2", state:"S2"},
    {id: 3, name: "M3", state:"S3"}
  ];
  constructor() { 

  }

  createOrEditMachine(machine:Machine)
  {
    if (machine.id == null) {
      this.machines.push(machine);
    } else {
      this.machines.find(m => m.id == machine.id ).name = machine.name;
    }
  }
  deleteMachine(machine:Machine)
  {
    const index = this.machines.indexOf(machine, 0);
    this.machines.splice(index,1);
  }
}
