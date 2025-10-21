import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class IconRegistryService {
    private matIconRegistry = inject(MatIconRegistry);
    private domSanitizer = inject(DomSanitizer);

    constructor() {
        this.registerIcons();
    }

    private registerIcons(): void {
        // Register all your custom SVG icons here
        const icons = [
            'arrow-down',
            'assign',
            'attachment',
            'blue-chevron-down',
            'blue-info',
            'book-open',
            'change',
            'check-circle',
            'chevron-left',
            'chevron-up-circle',
            'close',
            'confirm-circle',
            'cross-circle',
            'edit',
            'empty-error-state',
            'empty-state',
            'exit',
            'fax-green',
            'fax-red',
            'fax-yellow',
            'gray-note',
            'grey-chevron-down',
            'history',
            'hourglass',
            'icon_duplicate',
            'icon_labs',
            'icon-add',
            'icon-back-white',
            'icon-back',
            'icon-check',
            'icon-inbox',
            'icon-patient-request',
            'icon-pharmacy-request',
            'icon-remove',
            'icon-task',
            'icon-unknown-request',
            'icon-unknown',
            'icon-urgent',
            'icon-warning',
            'info',
            'logo',
            'medicine',
            'menu',
            'message',
            'minimize',
            'next',
            'open-link',
            'previous',
            'record',
            'red-info',
            'sample',
            'search',
            'settings',
            'sort-arrow-down',
            'sync',
            'task',
            'time',
            'type',
            'unknown-circle',
            'visit-icon',
            'yellow-note'
        ];

        icons.forEach(icon => {
            this.matIconRegistry.addSvgIcon(
                icon,
                this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
            );
        });
    }

    registerIcon(iconName: string, iconPath: string): void {
        this.matIconRegistry.addSvgIcon(
            iconName,
            this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
        );
    }
}

