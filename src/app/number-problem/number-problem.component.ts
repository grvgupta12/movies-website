import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-number-problem',
    templateUrl: './number-problem.component.html',
    styleUrls: ['./number-problem.component.css']
})
export class NumberProblemComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    userInput: any;
    array = [];

    doCalculation() {

        var input = this.userInput;
        var duplicateNums = [];
        //if multiple numbers are entered
        if (input.indexOf(',') > -1) {
            var nums = input.split(',');
            nums.forEach(element => {
                this.array.indexOf(element) < 0 ? this.array.push(element) : duplicateNums.push(element);
            });
        } else if (input.indexOf('-') > -1) { //if range of number is entered
            var range = input.split('-');
            var rangeNumbers = [];
            var minNumber = parseInt(range[0], 10);
            var maxNumber = parseInt(range[1], 10);
            for (var i = minNumber; i <= maxNumber; i++) {
                rangeNumbers.push(i.toString());
            }

            rangeNumbers.forEach(element => {
                this.array.indexOf(element) < 0 ? this.array.push(element) : duplicateNums.push(element);
            });

        } else { //if single number is entered
            var numberExist = this.array.indexOf(input) < 0 ? this.array.push(input) : duplicateNums.push(input);
        }

        
        document.getElementById('listOfvalues').textContent =
            'The values in the array are ' + this.array.join(' ')
        if (duplicateNums.length != 0) {
            document.getElementById('numberExist').textContent =
                'The duplicate values in the array are ' + duplicateNums.join(' ')
        }

    }
}
