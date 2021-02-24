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

/**
 * 
 * @export
 * @enum {string}
 */
export enum RewardProgramDTO {
    SuperNode = 'SuperNode',
    EarlyAdoption = 'EarlyAdoption',
    Ecosystem = 'Ecosystem'
}

export function RewardProgramDTOFromJSON(json: any): RewardProgramDTO {
    return RewardProgramDTOFromJSONTyped(json, false);
}

export function RewardProgramDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): RewardProgramDTO {
    return json as RewardProgramDTO;
}

export function RewardProgramDTOToJSON(value?: RewardProgramDTO | null): any {
    return value as any;
}

