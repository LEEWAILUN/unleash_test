/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type InstanceInsightsSchemaMetricsSummaryTrendsItem = {
    /** A UTC date when metrics summary was captured. Time is the very end of a given day. */
    date: string;
    /** Project id of the project the impressions summary belong to */
    project: string;
    /** Total number of applications the impression data belong to */
    totalApps: number;
    /** Total number of environments the impression data belong to */
    totalEnvironments: number;
    /** Total number of flags the impression data belong to */
    totalFlags: number;
    /** Total number of times all project flags were not exposed across all environments */
    totalNo: number;
    /** Total number of times all project flags were requested  */
    totalRequests: number;
    /** Total number of times all project flags were exposed across all environments */
    totalYes: number;
    /** Year and week in a given year for which the metrics summary was calculated */
    week: string;
};
