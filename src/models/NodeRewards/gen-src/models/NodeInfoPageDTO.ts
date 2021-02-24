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
    NodeInfoDTO,
    NodeInfoDTOFromJSON,
    NodeInfoDTOFromJSONTyped,
    NodeInfoDTOToJSON,
    Pagination,
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from './';

/**
 * 
 * @export
 * @interface NodeInfoPageDTO
 */
export interface NodeInfoPageDTO {
    /**
     * Array of nodes.
     * @type {Array<NodeInfoDTO>}
     * @memberof NodeInfoPageDTO
     */
    data: Array<NodeInfoDTO>;
    /**
     * 
     * @type {Pagination}
     * @memberof NodeInfoPageDTO
     */
    pagination: Pagination;
}

export function NodeInfoPageDTOFromJSON(json: any): NodeInfoPageDTO {
    return NodeInfoPageDTOFromJSONTyped(json, false);
}

export function NodeInfoPageDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeInfoPageDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(NodeInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}

export function NodeInfoPageDTOToJSON(value?: NodeInfoPageDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(NodeInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}


