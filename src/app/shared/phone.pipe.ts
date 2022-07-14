import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "phonepipe"
})

export class PhonePipe implements PipeTransform {

    transform(value: string) {
        let country = value.substring(0,3);
        value = value.substring(3);
        let region = value.substring(0,3);
        value = value.substring(3);
        let number = value;

        return "("+ country + ")" + " " + region + "-" + number;
        //value = value.charAt(0) != 0 ? "0" + value : "" + number;
      
        // let newStr = "";
        // let i = 0;
      
        // for (; i < 10; i++) {
        //   newStr = newStr + number.substr(i * 2, 2) + "-";
        // }
      
        // return newStr + number.substr(i * 2);
      }
}