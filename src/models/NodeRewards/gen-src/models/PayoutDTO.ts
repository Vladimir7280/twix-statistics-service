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
 * @interface PayoutDTO
 */
export interface PayoutDTO {
    /**
     * ID of the payout.
     * @type {string}
     * @memberof PayoutDTO
     */
    id: string;
    /**
     * ID of the node.
     * @type {string}
     * @memberof PayoutDTO
     */
    nodeId: string;
    /**
     * 
     * @type {number}
     * @memberof PayoutDTO
     */
    fromRound: number;
    /**
     * 
     * @type {number}
     * @memberof PayoutDTO
     */
    toRound: number;
    /**
     * 
     * @type {string}
     * @memberof PayoutDTO
     */
    transactionHash: string;
    /**
     * Indicates the status of the payout transaction.
* ``ToBeProcess`` - waiting for process the transaction.
* ``Processing`` - waiting the transaction get into block.
* ``Completed`` - transaction comfrimed into the block.
* ``ManualReview`` - transaction need manual review by admin.
* ``Fail`` - no qualify payout process.

     * @type {string}
     * @memberof PayoutDTO
     */
    status: PayoutDTOStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof PayoutDTO
     */
    createdAt: Date;
}

/**
* @export
* @enum {string}
*/
export enum PayoutDTOStatusEnum {
    ToBeProcess = 'ToBeProcess',
    Processing = 'Processing',
    Completed = 'Completed',
    ManualReview = 'ManualReview',
    Fail = 'Fail'
}

export function PayoutDTOFromJSON(json: any): PayoutDTO {
    return PayoutDTOFromJSONTyped(json, false);
}

export function PayoutDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'nodeId': json['nodeId'],
        'fromRound': json['fromRound'],
        'toRound': json['toRound'],
        'transactionHash': json['transactionHash'],
        'status': json['status'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function PayoutDTOToJSON(value?: PayoutDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nodeId': value.nodeId,
        'fromRound': value.fromRound,
        'toRound': value.toRound,
        'transactionHash': value.transactionHash,
        'status': value.status,
        'createdAt': (value.createdAt.toISOString()),
    };
}


