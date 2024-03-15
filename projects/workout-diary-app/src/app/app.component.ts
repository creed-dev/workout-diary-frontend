import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponent } from "../../../shared/src/lib/shared.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
