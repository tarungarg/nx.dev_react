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
import type { ProductDimensions } from './ProductDimensions';
import {
    ProductDimensionsFromJSON,
    ProductDimensionsFromJSONTyped,
    ProductDimensionsToJSON,
} from './ProductDimensions';
import type { ShippingDimensions } from './ShippingDimensions';
import {
    ShippingDimensionsFromJSON,
    ShippingDimensionsFromJSONTyped,
    ShippingDimensionsToJSON,
} from './ShippingDimensions';

/**
 * 
 * @export
 * @interface Attributes
 */
export interface Attributes {
    /**
     * 
     * @type {Array<string>}
     * @memberof Attributes
     */
    certifications?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Attributes
     */
    concerns?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Attributes
     */
    filters?: Array<string>;
    /**
     * 
     * @type {ProductDimensions}
     * @memberof Attributes
     */
    productDimensions?: ProductDimensions;
    /**
     * 
     * @type {ShippingDimensions}
     * @memberof Attributes
     */
    shippingDimensions?: ShippingDimensions;
}

/**
 * Check if a given object implements the Attributes interface.
 */
export function instanceOfAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributesFromJSON(json: any): Attributes {
    return AttributesFromJSONTyped(json, false);
}

export function AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Attributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certifications': !exists(json, 'certifications') ? undefined : json['certifications'],
        'concerns': !exists(json, 'concerns') ? undefined : json['concerns'],
        'filters': !exists(json, 'filters') ? undefined : json['filters'],
        'productDimensions': !exists(json, 'productDimensions') ? undefined : ProductDimensionsFromJSON(json['productDimensions']),
        'shippingDimensions': !exists(json, 'shippingDimensions') ? undefined : ShippingDimensionsFromJSON(json['shippingDimensions']),
    };
}

export function AttributesToJSON(value?: Attributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certifications': value.certifications,
        'concerns': value.concerns,
        'filters': value.filters,
        'productDimensions': ProductDimensionsToJSON(value.productDimensions),
        'shippingDimensions': ShippingDimensionsToJSON(value.shippingDimensions),
    };
}
