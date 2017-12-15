import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user.model';

@Pipe({
  name: 'skillrating'
})
export class RankPipe implements PipeTransform {

  transform(input: User[], desiredSkillRating) {
    var output: User[] = [];
    if (desiredSkillRating === "GM") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillrating === "GM") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillRating === "Master") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillrating === "Master") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillRating === "Diamond") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillrating === "Diamond") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillRating === "Platinum") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillrating === "Platinum") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillRating === "Gold") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillrating === "Gold") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillRating === "Silver") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillrating === "Silver") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillRating === "Bronze") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillrating === "Bronze") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
