import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponentComponent} from "./public/components/toolbar-component/toolbar-component.component";
import {FooterComponentComponent} from "./public/components/footer-component/footer-component.component";
import {CardsComponent} from "./country/components/cards/cards.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponentComponent, FooterComponentComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Consumir-Api';
}
