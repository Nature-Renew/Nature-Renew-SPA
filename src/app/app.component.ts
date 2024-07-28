import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InfoComponentComponent } from './components/info-component/info-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, InfoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Naturenew-SP';
}
