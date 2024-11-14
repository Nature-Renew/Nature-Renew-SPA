import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InfoComponentComponent } from './components/info-component/info-component.component';
import { FooterComponent } from './components/footer/footer.component';
import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, InfoComponentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Naturenew-SP';
}
