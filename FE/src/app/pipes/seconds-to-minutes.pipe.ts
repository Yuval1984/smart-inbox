import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'secondsToMinutes',
    standalone: true
})
export class SecondsToMinutesPipe implements PipeTransform {
    transform(seconds: number): string {
        if (!seconds || seconds === 0) {
            return '0 sec.';
        }

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        if (minutes === 0) {
            return `${remainingSeconds} sec.`;
        }
        if (remainingSeconds === 0) {
            return `${minutes} min.`;
        }
        return `${minutes}+ min.`;
    }
}

