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
 * @interface PingResultDTO
 */
export interface PingResultDTO {
    /**
     * ID of the test result
     * @type {string}
     * @memberof PingResultDTO
     */
    id: string;
    /**
     * ID of the tested node
     * @type {string}
     * @memberof PingResultDTO
     */
    nodeId?: string;
    /**
     * ID of the tested node
     * @type {string}
     * @memberof PingResultDTO
     */
    fromNodeId: string;
    /**
     * ID of the node
     * @type {string}
     * @memberof PingResultDTO
     */
    toNodeId: string;
    /**
     * 
     * @type {number}
     * @memberof PingResultDTO
     */
    sample1: number;
    /**
     * 
     * @type {number}
     * @memberof PingResultDTO
     */
    sample2: number;
    /**
     * 
     * @type {number}
     * @memberof PingResultDTO
     */
    sample3: number;
    /**
     * 
     * @type {number}
     * @memberof PingResultDTO
     */
    sample4: number;
    /**
     * 
     * @type {number}
     * @memberof PingResultDTO
     */
    sample5: number;
    /**
     * 
     * @type {number}
     * @memberof PingResultDTO
     */
    averageTime: number;
    /**
     * 
     * @type {number}
     * @memberof PingResultDTO
     */
    round: number;
    /**
     * 
     * @type {boolean}
     * @memberof PingResultDTO
     */
    resultValid: boolean;
    /**
     * 
     * @type {string}
     * @memberof PingResultDTO
     */
    createdAt: string;
}

export function PingResultDTOFromJSON(json: any): PingResultDTO {
    return PingResultDTOFromJSONTyped(json, false);
}

export function PingResultDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PingResultDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'fromNodeId': json['fromNodeId'],
        'toNodeId': json['toNodeId'],
        'sample1': json['sample1'],
        'sample2': json['sample2'],
        'sample3': json['sample3'],
        'sample4': json['sample4'],
        'sample5': json['sample5'],
        'averageTime': json['averageTime'],
        'round': json['round'],
        'resultValid': json['resultValid'],
        'createdAt': json['createdAt'],
    };
}

export function PingResultDTOToJSON(value?: PingResultDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nodeId': value.nodeId,
        'fromNodeId': value.fromNodeId,
        'toNodeId': value.toNodeId,
        'sample1': value.sample1,
        'sample2': value.sample2,
        'sample3': value.sample3,
        'sample4': value.sample4,
        'sample5': value.sample5,
        'averageTime': value.averageTime,
        'round': value.round,
        'resultValid': value.resultValid,
        'createdAt': value.createdAt,
    };
}


