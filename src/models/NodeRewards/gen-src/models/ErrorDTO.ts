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
 * @interface ErrorDTO
 */
export interface ErrorDTO {
    /**
     * 
     * @type {number}
     * @memberof ErrorDTO
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorDTO
     */
    message: string;
}

export function ErrorDTOFromJSON(json: any): ErrorDTO {
    return ErrorDTOFromJSONTyped(json, false);
}

export function ErrorDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': json['message'],
    };
}

export function ErrorDTOToJSON(value?: ErrorDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
    };
}

