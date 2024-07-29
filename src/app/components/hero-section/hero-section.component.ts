import { Component, Input, input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { NgStyle } from '@angular/common';
import { InfoComponentComponent } from '../info-component/info-component.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ReactiveFormsModule,NgStyle,InfoComponentComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
 
export class HeroSectionComponent {
  isSubmitted: boolean = false;

  newsLetterForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.maxLength(50)]),
    email : new FormControl('',[Validators.required, Validators.email])
  });

  onReset(){
    this.isSubmitted = false;
    this.newsLetterForm.reset();
  }

  onSubmit(){

    this.isSubmitted = true;

    if (this.newsLetterForm.valid) {
      console.log(this.newsLetterForm.value);
      
    } else {
      console.warn('Form is invalid');
      console.log(this.newsLetterForm.hasError.toString)
     
    }
  }

  get name(){
    console.log("first name value: " )
    return this.newsLetterForm.get('name');
  }


  get email(){
    return this.newsLetterForm.get('email');
  }

  


  constructor(){

  }
  
}
  




