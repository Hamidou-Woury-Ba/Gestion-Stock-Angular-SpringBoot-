import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Menu{
    id?: number;
    titre?: string;
    icon?: IconDefinition | string;
    url?: string;
    sousMenu?: Menu[];
}