import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  InboxItem,
  InboxFreeTextRequest,
  InboxLabReportRequest,
  RequestType
} from '../../../../../BE/src/request/request.inteface';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SecondsToMinutesPipe } from '../../pipes/seconds-to-minutes.pipe';

function isFreeTextRequest(item: InboxItem): item is InboxFreeTextRequest {
  return item.type === RequestType.FreeText;
}

function isLabReportRequest(item: InboxItem): item is InboxLabReportRequest {
  return item.type === RequestType.LabReport;
}
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
    if (isFreeTextRequest(this.item)) {
      return this.item.labels ?? [];
    }
    return [];
  }

  hasLabels(): boolean {
    if (!isFreeTextRequest(this.item)) {
      return false;
    }
    return (this.item.labels ?? []).length > 0;
  }

  getPanels(): string[] {
    if (isLabReportRequest(this.item)) {
      return this.item.panels ?? [];
    }
    return [];
  }

  hasPanels(): boolean {
    if (!isLabReportRequest(this.item)) {
      return false;
    }
    return (this.item.panels ?? []).length > 0;
  }

  getAssignedTo(): string | undefined {
    return this.item.assignment?.assignedTo;
  }

  hasAssignment(): boolean {
    return !!this.item.assignment;
  }
}
