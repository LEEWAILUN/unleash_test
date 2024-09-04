/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Data used to update an [environment](https://docs.getunleash.io/reference/environments).
 */
export interface UpdateEnvironmentSchema {
    /** Changes the sort order of this environment. */
    sortOrder?: number;
    /** Updates the type of environment (i.e. development or production). */
    type?: string;
}
