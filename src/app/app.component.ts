import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardContainerComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngular';
  company = ["sikshaTec", "Technosters"];
  data:object[] = [
    {
      imgSrc: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
      title: "Developement",
      btnText: "come"
    },
    {
      imgSrc: "https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601-cl.jpg",
      title: "Technology",
      btnText: "go"
    },
    {
      imgSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg",
      title: "Artificial",
      btnText: "see more"
    },
    {
      imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp",
      title: "intelligence",
      btnText: "Run"
    },
    {
      imgSrc: "https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg",
      title: "Heart",
      btnText: "menu"
    },
    {
      imgSrc: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2024-04/what-is-artificial-intelligence-ai.jpg",
      title: "Damaged",
      btnText: "exit"
    }]
}
