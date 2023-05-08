import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  constructor(private router: Router) {}

  onRoute(route: string): void {
    this.router.navigate(['/', route]);
  }
}
