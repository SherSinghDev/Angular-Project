import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
  @Input() item!:{imgSrc:string,title:string}
}
