import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLoginComponent } from "./pages/page-login/page-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-premier-projet';
}
