import { InjectionToken } from "@angular/core";
import { SupportedIconsSuggestions } from "@c8y/ngx-components/icon-selector/icons";

export interface NodeRedViewDetails {
    uiPath: string;
    iframePath: string;
    icon: SupportedIconsSuggestions;
    label: string;
    requiredEndpoint?: string;
    requiredRoles?: string[];
}

export const NODE_RED_VIEW_DETAILS = new InjectionToken<NodeRedViewDetails>('NodeRedViewDetails');