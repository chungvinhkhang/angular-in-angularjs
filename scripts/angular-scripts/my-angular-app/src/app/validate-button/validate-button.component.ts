import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'validate-button',
  template: `
    <button (click)="onValidate()">Validate</button>
  `,
  styles: [`
    button { color: red; }
  `]
})
export class ValidateButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onValidate() {
    const arr = [];
    const angular = window.angular;
    const scope = angular.element(document.querySelector('[ng-controller=myCtrl]')).scope();
    const { firstName, lastName } = scope;
    if (firstName.length === 0) {
      arr.push('first name');
    } if (lastName.length === 0) {
      arr.push('last name');
    }
    if (arr.length > 0) alert(`Please input ${arr.join(',')}`);
  }
}

declare global {
  interface Window { angular: any; }
}

window.angular = window.angular || {};