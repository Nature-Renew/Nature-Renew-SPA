import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { InfoComponentComponent } from '../info-component/info-component.component';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle, InfoComponentComponent, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})

export class HeroSectionComponent {

  constructor(private http: HttpClient){}

  isSubmitted: boolean = false;
  newsLetterForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });
  // states used for error and success handling
  deactivateSubmission: boolean = true;
  showSuccessState: boolean = false;

  async onSubmit() {
    this.isSubmitted = true;
    if (this.newsLetterForm.valid) {
      const name = this.name?.value ?? '';
      const email = this.email?.value ?? '';

      try {
        //@ts-ignore
        this.http.post<any>(environment.LOCAL_BASE_URL + 'newSubscriber', 
        { Name: name, Email: email }, 
        { headers: { 'Content-Type': 'application/json' } }
        // subscribe to looking at this observable
     ).subscribe(data => {
        console.log('Subscriber added successfully', data);
     }); } catch (error) {
        console.error('Error adding subscriber:', error);
      }
      this.onReset();
    }
  }

  get name() {
    return this.newsLetterForm.get('name');
  }

  get email() {
    return this.newsLetterForm.get('email');
  }

  // need to clear the form after submission
  onReset() {
    this.isSubmitted = false;
    this.newsLetterForm.reset();
  }
}
