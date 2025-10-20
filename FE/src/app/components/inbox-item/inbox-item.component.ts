import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InboxItem } from '../../../../../BE/src/request/request.inteface';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SecondsToMinutesPipe } from '../../pipes/seconds-to-minutes.pipe';

@Component({
  selector: 'app-inbox-item',
  standalone: true,
  imports: [NgIf, NgClass, CommonModule, MatIconModule, SecondsToMinutesPipe],
  templateUrl: './inbox-item.component.html',
  styleUrl: './inbox-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxItemComponent {
  @Input() item!: InboxItem;

  getLabels(): string[] {
    return (this.item as any).labels || [];
  }

  hasLabels(): boolean {
    return !!(this.item as any).labels && (this.item as any).labels.length > 0;
  }

  getPanels(): string[] {
    return (this.item as any).panels || [];
  }

  hasPanels(): boolean {
    return !!(this.item as any).panels && (this.item as any).panels.length > 0;
  }
}
