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
import {
    Pagination,
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
    PayoutDTO,
    PayoutDTOFromJSON,
    PayoutDTOFromJSONTyped,
    PayoutDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface PayoutPageDTO
 */
export interface PayoutPageDTO {
    /**
     * Array of payouts.
     * @type {Array<PayoutDTO>}
     * @memberof PayoutPageDTO
     */
    data: Array<PayoutDTO>;
    /**
     * 
     * @type {Pagination}
     * @memberof PayoutPageDTO
     */
    pagination: Pagination;
}

export function PayoutPageDTOFromJSON(json: any): PayoutPageDTO {
    return PayoutPageDTOFromJSONTyped(json, false);
}

export function PayoutPageDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutPageDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PayoutDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}

export function PayoutPageDTOToJSON(value?: PayoutPageDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(PayoutDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}


