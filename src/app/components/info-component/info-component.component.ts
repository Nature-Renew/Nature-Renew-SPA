import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'

@Component({
  selector: 'app-info-component',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './info-component.component.html',
  styleUrl: './info-component.component.css'
})

export class InfoComponentComponent {
  displayInfo = [
    {
      title: 'What is Sea Moss?',
      content: `
      Sea Moss, 
      also known as Chondrus Crispus or Irish Moss, 
      is a type of red seaweed rich in essential vitamins and minerals. 
      It contains over 92 essential nutrients, including iodine, calcium, and potassium, and is known for its antioxidant properties`
    },
    {
      title: 'Where do we source our Sea Moss?',
      content: `Our Sea Moss is sustainably harvested from the pristine waters of Saint Lucia.
       This sourcing process ensures that our product retains its high quality, purity, and rich nutrient profile. 
       Each batch is handled with care to bring you natural, mineral-rich supplements that sustainably support wellness`
    },
    {
      title: 'How do I use Sea Moss Gel?',
      content: `Sea Moss Gel can be consumed by mixing 2 tablespoons into drinks, smoothies, or directly from the spoon. 
      It can also be applied topically as a facial mask or hair treatment for skin and hair health`
    },
    {
      title: "Are Nature New Products vegan and GMO-free?",
      content: `Yes, our Sea Moss Gel is 100% vegan and GMO-free, made with wildcrafted sea moss and real fruits, catering to various dietary preferences`
    },
    {
      title: "Sea Moss Gel vs Capsules?",
      content: `Both forms provide the same health benefits, but the gel can be easily added to foods and drinks, while the capsules are convenient for on-the-go consumption`
    },
    {
      title: "How should I store Sea Moss?",
      content: `Sea Moss Gel should be refrigerated immediately upon arrival and used within 14 days, or frozen for up to 6 months. 
      Dried Sea Moss should be stored in a cool, dark place`
    }
  ] 
}