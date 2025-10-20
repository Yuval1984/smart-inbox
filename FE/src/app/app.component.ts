import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InboxListComponent } from './components/inbox-list/inbox-list.component';
import { IconRegistryService } from './services/icon-registry.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InboxListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FE';

  // Initialize icon registry service
  private iconRegistry = inject(IconRegistryService);
}
