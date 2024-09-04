/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { FeatureSearchResponseSchemaLifecycleStage } from './featureSearchResponseSchemaLifecycleStage';

/**
 * Current lifecycle stage of the feature
 */
export type FeatureSearchResponseSchemaLifecycle = {
    /** When the feature entered this stage */
    enteredStageAt: string;
    /** The name of the current lifecycle stage */
    stage: FeatureSearchResponseSchemaLifecycleStage;
    /**
     * The name of the detailed status of a given stage. E.g. completed stage can be kept or discarded.
     * @nullable
     */
    status?: string | null;
};
