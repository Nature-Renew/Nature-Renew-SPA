import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { InfoComponentComponent } from '../info-component/info-component.component';
import { addNewSubscriber } from '../../../api/api_functions.js';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, InfoComponentComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  isSubmitted: boolean = false;
  newsLetterForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  async onSubmit() {
    this.isSubmitted = true;
    if (this.newsLetterForm.valid) {
      console.log(this.newsLetterForm.value);

      const nameValue = this.name?.value ?? '';
      const emailValue = this.email?.value ?? '';

      try {
        await addNewSubscriber(nameValue, emailValue);
        console.log('Subscriber added successfully');
      } catch (error) {
        console.error('Error adding subscriber:', error);
      }
    } else {
      console.warn('Form is invalid');
      console.log('Form errors:', this.newsLetterForm.errors);
    }
  }

  get name() {
    return this.newsLetterForm.get('name');
  }

  get email() {
    return this.newsLetterForm.get('email');
  }

  // constructor() {}
}
