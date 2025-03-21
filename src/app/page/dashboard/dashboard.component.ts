import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, NavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
