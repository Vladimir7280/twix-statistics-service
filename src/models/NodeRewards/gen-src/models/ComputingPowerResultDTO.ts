/* tslint:disable */
/* eslint-disable */
/**
 * Symbol Node Rewards API
 * The API is the rest gateway to the symbol rewards controller.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ComputingPowerResultDTO
 */
export interface ComputingPowerResultDTO {
    /**
     * ID of the test result
     * @type {string}
     * @memberof ComputingPowerResultDTO
     */
    id: string;
    /**
     * ID of the tested node
     * @type {string}
     * @memberof ComputingPowerResultDTO
     */
    nodeId: string;
    /**
     * 
     * @type {string}
     * @memberof ComputingPowerResultDTO
     */
    seed: string;
    /**
     * 
     * @type {string}
     * @memberof ComputingPowerResultDTO
     */
    reportedResult: string;
    /**
     * 
     * @type {string}
     * @memberof ComputingPowerResultDTO
     */
    expectedResult: string;
    /**
     * 
     * @type {number}
     * @memberof ComputingPowerResultDTO
     */
    timeNeeded: number;
    /**
     * 
     * @type {number}
     * @memberof ComputingPowerResultDTO
     */
    iterations: number;
    /**
     * 
     * @type {number}
     * @memberof ComputingPowerResultDTO
     */
    round: number;
    /**
     * 
     * @type {boolean}
     * @memberof ComputingPowerResultDTO
     */
    resultValid: boolean;
    /**
     * 
     * @type {string}
     * @memberof ComputingPowerResultDTO
     */
    createdAt: string;
}

export function ComputingPowerResultDTOFromJSON(json: any): ComputingPowerResultDTO {
    return ComputingPowerResultDTOFromJSONTyped(json, false);
}

export function ComputingPowerResultDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputingPowerResultDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'nodeId': json['nodeId'],
        'seed': json['seed'],
        'reportedResult': json['reportedResult'],
        'expectedResult': json['expectedResult'],
        'timeNeeded': json['timeNeeded'],
        'iterations': json['iterations'],
        'round': json['round'],
        'resultValid': json['resultValid'],
        'createdAt': json['createdAt'],
    };
}

export function ComputingPowerResultDTOToJSON(value?: ComputingPowerResultDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nodeId': value.nodeId,
        'seed': value.seed,
        'reportedResult': value.reportedResult,
        'expectedResult': value.expectedResult,
        'timeNeeded': value.timeNeeded,
        'iterations': value.iterations,
        'round': value.round,
        'resultValid': value.resultValid,
        'createdAt': value.createdAt,
    };
}


