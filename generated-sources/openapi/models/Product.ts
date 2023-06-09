/* tslint:disable */
/* eslint-disable */
/**
 * Product App Microservice
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Attributes } from './Attributes';
import {
    AttributesFromJSON,
    AttributesFromJSONTyped,
    AttributesToJSON,
} from './Attributes';
import type { Copy } from './Copy';
import {
    CopyFromJSON,
    CopyFromJSONTyped,
    CopyToJSON,
} from './Copy';
import type { Extended } from './Extended';
import {
    ExtendedFromJSON,
    ExtendedFromJSONTyped,
    ExtendedToJSON,
} from './Extended';
import type { Flags } from './Flags';
import {
    FlagsFromJSON,
    FlagsFromJSONTyped,
    FlagsToJSON,
} from './Flags';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { Loyalty } from './Loyalty';
import {
    LoyaltyFromJSON,
    LoyaltyFromJSONTyped,
    LoyaltyToJSON,
} from './Loyalty';

/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    alias?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    brand?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    manufacturer?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    onlineSince?: string;
    /**
     * 
     * @type {Loyalty}
     * @memberof Product
     */
    loyalty?: Loyalty;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    maxOrderQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    minOrderQuantity?: number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    warrantyTypeId?: number;
    /**
     * 
     * @type {Attributes}
     * @memberof Product
     */
    attributes?: Attributes;
    /**
     * 
     * @type {Flags}
     * @memberof Product
     */
    flags?: Flags;
    /**
     * 
     * @type {Copy}
     * @memberof Product
     */
    copy?: Copy;
    /**
     * 
     * @type {Array<Image>}
     * @memberof Product
     */
    images?: Array<Image>;
    /**
     * 
     * @type {Extended}
     * @memberof Product
     */
    extended?: Extended;
}

/**
 * Check if a given object implements the Product interface.
 */
export function instanceOfProduct(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ProductFromJSON(json: any): Product {
    return ProductFromJSONTyped(json, false);
}

export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'manufacturer': !exists(json, 'manufacturer') ? undefined : json['manufacturer'],
        'onlineSince': !exists(json, 'onlineSince') ? undefined : json['onlineSince'],
        'loyalty': !exists(json, 'loyalty') ? undefined : LoyaltyFromJSON(json['loyalty']),
        'maxOrderQuantity': !exists(json, 'maxOrderQuantity') ? undefined : json['maxOrderQuantity'],
        'minOrderQuantity': !exists(json, 'minOrderQuantity') ? undefined : json['minOrderQuantity'],
        'warrantyTypeId': !exists(json, 'warrantyTypeId') ? undefined : json['warrantyTypeId'],
        'attributes': !exists(json, 'attributes') ? undefined : AttributesFromJSON(json['attributes']),
        'flags': !exists(json, 'flags') ? undefined : FlagsFromJSON(json['flags']),
        'copy': !exists(json, 'copy') ? undefined : CopyFromJSON(json['copy']),
        'images': !exists(json, 'images') ? undefined : ((json['images'] as Array<any>).map(ImageFromJSON)),
        'extended': !exists(json, 'extended') ? undefined : ExtendedFromJSON(json['extended']),
    };
}

export function ProductToJSON(value?: Product | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'version': value.version,
        'alias': value.alias,
        'brand': value.brand,
        'name': value.name,
        'manufacturer': value.manufacturer,
        'onlineSince': value.onlineSince,
        'loyalty': LoyaltyToJSON(value.loyalty),
        'maxOrderQuantity': value.maxOrderQuantity,
        'minOrderQuantity': value.minOrderQuantity,
        'warrantyTypeId': value.warrantyTypeId,
        'attributes': AttributesToJSON(value.attributes),
        'flags': FlagsToJSON(value.flags),
        'copy': CopyToJSON(value.copy),
        'images': value.images === undefined ? undefined : ((value.images as Array<any>).map(ImageToJSON)),
        'extended': ExtendedToJSON(value.extended),
    };
}

