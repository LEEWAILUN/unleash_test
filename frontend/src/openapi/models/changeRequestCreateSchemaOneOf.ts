/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateSchemaOneOfAction } from './changeRequestCreateSchemaOneOfAction';
import type { UpsertSegmentSchema } from './upsertSegmentSchema';

export type ChangeRequestCreateSchemaOneOf = {
    /** The name of this action. */
    action: ChangeRequestCreateSchemaOneOfAction;
    payload: UpsertSegmentSchema;
};
