import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ComponentsModule} from "../../components/components.module";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, ComponentsModule, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ],
})
export class AppComponent {
  title = 'ecommerce';
}
