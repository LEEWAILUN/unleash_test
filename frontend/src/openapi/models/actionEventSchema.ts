/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ActionEventSchemaExecutionParams } from './actionEventSchemaExecutionParams';
import type { ActionEventSchemaState } from './actionEventSchemaState';

/**
 * An object describing an action event.
 */
export interface ActionEventSchema {
    /** The name of the action to execute */
    action: string;
    /** The date and time of when the action was created. */
    createdAt: string;
    /** The id of user that created this action set */
    createdByUserId: number;
    /**
     * The details of the action event, if any.
     * @nullable
     */
    details?: string | null;
    /** A map of parameters to pass to the action */
    executionParams?: ActionEventSchemaExecutionParams;
    /**
     * The id of the action set
     * @minimum 1
     */
    id: number;
    /**
     * The order in which the action should be executed
     * @minimum 1
     */
    sortOrder: number;
    /** The state of the action. Can be one of `not started`, `started`, `success`, or `failed`. */
    state: ActionEventSchemaState;
}
