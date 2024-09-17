import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { InfoComponentComponent } from '../info-component/info-component.component';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, InfoComponentComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})

export class HeroSectionComponent {

  constructor(private http: HttpClient){}

  isSubmitted: boolean = false;
  newsLetterForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  async onSubmit() {
    this.isSubmitted = true;
    if (this.newsLetterForm.valid) {
      console.log(this.newsLetterForm.value);

      const name = this.name?.value ?? '';
      const email = this.email?.value ?? '';

      try {
        this.http.post<any>(environment.LOCAL_BASE_URL + 'newSubscriber', 
        { Name: name, Email: email }, 
        { headers: { 'Content-Type': 'application/json' } }
     ).subscribe(data => {
        console.log('Subscriber added successfully');
        console.log(data);
     });
     
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
}
