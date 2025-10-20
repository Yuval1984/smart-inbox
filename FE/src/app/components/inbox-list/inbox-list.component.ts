import { Component, OnInit, DestroyRef, ChangeDetectorRef } from '@angular/core';
import { InboxItemComponent } from '../inbox-item/inbox-item.component';
import { RequestService } from '../../services/request.service';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { InboxItem } from '../../../../../BE/src/request/request.inteface';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-inbox-list',
  standalone: true,
  imports: [
    InboxItemComponent,
    NgFor,
    NgIf,
    NgClass,
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './inbox-list.component.html',
  styleUrl: './inbox-list.component.css',
})
export class InboxListComponent implements OnInit {
  inboxItems: InboxItem[] = [];
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private requestService: RequestService,
    private cd: ChangeDetectorRef,
    private destroyRef: DestroyRef) { }

  ngOnInit() {
    this.isLoading = true;
    this.errorMessage = null;

    this.requestService.getInboxItems()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (data: InboxItem[]) => {
          this.inboxItems = data;
          this.isLoading = false;
          this.cd.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching inbox items:', error);
          this.errorMessage = 'Failed to load inbox items. Please try again.';
          this.isLoading = false;
        },
      });
  }

  trackFN(index: number, item: InboxItem) {
    return item.id;
  }
}
