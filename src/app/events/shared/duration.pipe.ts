import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch(value) {
      case 1: return 'Half Hour'
      case 2: return 'One Hour'
      case 3: return 'Half Day'
      case 4: return 'Full Day'
      default: return value.toString();
    }
  }
  
}