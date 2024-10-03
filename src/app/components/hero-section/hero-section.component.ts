import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { InfoComponentComponent } from '../info-component/info-component.component';
import {HttpClient} from '@angular/common/http';
//@ts-ignore
import environment from '../../../environments/environment.prod.js';

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
  showSuccessState: boolean = false;
  showNetworkError: boolean = false;
  newsLetterForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });
  
  async onSubmit() {
    this.isSubmitted = true;
    if (this.newsLetterForm.valid) {
      const name = this.name?.value ?? '';
      const email = this.email?.value ?? '';

    //@ts-ignore
    this.http.post<any>(environment.LAMBDA_ACCESS_LINK, 
    { Name: name, Email: email }, 
    { headers: { 'Content-Type': 'application/json'} }).subscribe({
      next: (_data) => {
        this.showSuccessState = true;
      },
      error: (_error) => {
        this.showNetworkError = true;
      },
      complete: () => {
        setTimeout(() => {
          this.onReset();
        }, 5000);
      },
    });
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
    this.showSuccessState = false;
    this.showNetworkError = false;
    this.newsLetterForm.reset();
  }
}
