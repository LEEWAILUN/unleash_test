/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { AddonTypeSchemaAlertsItem } from './addonTypeSchemaAlertsItem';
import type { AddonTypeSchemaInstallation } from './addonTypeSchemaInstallation';
import type { AddonParameterSchema } from './addonParameterSchema';
import type { TagTypeSchema } from './tagTypeSchema';

/**
 * An addon provider. Defines a specific addon type and what the end user must configure when creating a new addon of that type.
 */
export interface AddonTypeSchema {
    /** A list of alerts to display to the user when installing addons of this type. */
    alerts?: AddonTypeSchemaAlertsItem[];
    /** This should be used to inform the user that this addon type is deprecated and should not be used. Deprecated addons will show a badge with this information on the UI. */
    deprecated?: string;
    /** A description of the addon type. */
    description: string;
    /** The addon type's name as it should be displayed in the admin UI. */
    displayName: string;
    /** A URL to where you can find more information about using this addon type. */
    documentationUrl: string;
    /** All the [event types](https://docs.getunleash.io/reference/api/legacy/unleash/admin/events#feature-toggle-events) that are available for this addon provider. */
    events?: string[];
    /** A long description of how to use this addon type. This will be displayed on the top of configuration page. Can contain markdown. */
    howTo?: string;
    /** The installation configuration for this addon type. */
    installation?: AddonTypeSchemaInstallation;
    /** The name of the addon type. When creating new addons, this goes in the payload's `type` field. */
    name: string;
    /** The addon provider's parameters. Use these to configure an addon of this provider type. Items with `required: true` must be provided. */
    parameters?: AddonParameterSchema[];
    /** A list of [Unleash tag types](https://docs.getunleash.io/reference/tags#tag-types) that this addon uses. These tags will be added to the Unleash instance when an addon of this type is created. */
    tagTypes?: TagTypeSchema[];
}
