import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent { 
  footerOnClick(){
    window.open("https://www.instagram.com/nature_renew/")
  }
}
