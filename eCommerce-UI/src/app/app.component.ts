import { Component } from '@angular/core';
import { RouteConstants } from './constants/route.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  RouteConstants = RouteConstants;
  title = 'eCommerce-UI';
}
