/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestScheduleSchemaOneOfStatus } from './changeRequestScheduleSchemaOneOfStatus';

/**
 * A pending schedule for a change request.
 */
export type ChangeRequestScheduleSchemaOneOf = {
    /** When this change request will be applied. */
    scheduledAt: string;
    /** The status of the schedule. */
    status: ChangeRequestScheduleSchemaOneOfStatus;
};
