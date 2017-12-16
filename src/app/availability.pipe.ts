import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user.model';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  transform(input: User[], desiredAvailability) {
    var output: User[] = [];
    if (desiredAvailability === "Weekdays AM") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].playtimes === "Weekdays AM") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAvailability === "Weekdays PM") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].playtimes === "Weekdays PM") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAvailability === "Weekends AM") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].playtimes === "Weekends AM") {
          output.push(input[i]);
        }
      }
      return output;
    }  else if (desiredAvailability === "Weekends PM") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].playtimes === "Weekends PM") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
