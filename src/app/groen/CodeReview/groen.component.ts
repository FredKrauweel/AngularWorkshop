import { Component } from '@angular/core';

@Component({
  selector: 'app-groen',
  templateUrl: './groen.component.html',
})
export class GroenComponent {
  // @link https://toddmotto.com/component-events-event-emitter-output-angular-2
  // @Output decorator

  /**
   * TSLint is niet goed ingesteld en geeft hier een fout, maar dit is wel degelijk goed, TypeScript.
   * @type {boolean}
   */
  showModal: boolean = false;

  /**
   * Het data object is nu een vast object, deze moet een rate, name en email bevatten.
   * Typescript :).
   * @type {{rate: string; name: string; email: string}}
   */
  public data: {rate: string, name: string, email: string} = {
    rate: '',
    name: '',
    email: ''
  };

  toggleModal() {
    this.showModal = !this.showModal;

    if (this.showModal) {
      this.data.rate = '';
      this.data.name = '';
      this.data.email = '';
    }
  }

  sendData() {
    // ES6, string interpolation http://es6-features.org/#StringInterpolation
    console.log(`
      Rate: ${this.data.rate}
      Name: ${this.data.name}
      Email: ${this.data.email}
    `);

    this.toggleModal();
  }
}
