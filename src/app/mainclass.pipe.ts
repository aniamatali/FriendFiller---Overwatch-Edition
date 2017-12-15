import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user.model';

@Pipe({
  name: 'mainclass'
})
export class PositionPipe implements PipeTransform {

  transform(input: User[], desiredMainClass) {
    var output: User[] = [];
    if (desiredMainClass === "Tank") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].mainclass === "Tank") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMainClass === "Support") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].mainclass === "Support") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMainClass === "DPS") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].mainclass === "DPS") {
          output.push(input[i]);
        }
      }
      return output;
    }  else {
      return input;
    }
  }
}
