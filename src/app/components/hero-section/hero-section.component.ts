import { Component } from '@angular/core';
import { InfoComponentComponent } from '../info-component/info-component.component';
// import down_arrow from '../../assets/general_svgs/down_arrow.svg';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [InfoComponentComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
 
export class HeroSectionComponent {
  isVisible = true;
  onClick(){
    this.isVisible = false;
  }

}
