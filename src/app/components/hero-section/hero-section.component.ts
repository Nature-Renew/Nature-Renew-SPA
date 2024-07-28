import { Component } from '@angular/core';
import { InfoComponentComponent } from '../info-component/info-component.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [InfoComponentComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
 
export class HeroSectionComponent {}
