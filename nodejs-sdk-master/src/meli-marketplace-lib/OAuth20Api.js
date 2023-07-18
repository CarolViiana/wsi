/**
 * MELI Markeplace SDK
 * This is a the codebase to generate a SDK for Open Platform Marketplace
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* OAuth20 service.
* @module meli-marketplace-lib/OAuth20Api
* @version 3.0.0
*/
export default class OAuth20Api {

    /**
    * Constructs a new OAuth20Api. 
    * @alias module:meli-marketplace-lib/OAuth20Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the auth operation.
     * @callback module:meli-marketplace-lib/OAuth20Api~authCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authentication Endpoint
     * @param {module:model/String} responseType 
     * @param {String} clientId 
     * @param {String} redirectUri 
     * @param {module:meli-marketplace-lib/OAuth20Api~authCallback} callback The callback function, accepting three arguments: error, data, response
     */
    auth(responseType, clientId, redirectUri, callback) {
      let postBody = null;
      // verify the required parameter 'responseType' is set
      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling auth");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling auth");
      }
      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling auth");
      }

      let pathParams = {
      };
      let queryParams = {
        'response_type': responseType,
        'client_id': clientId,
        'redirect_uri': redirectUri
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/authorization', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getToken operation.
     * @callback module:meli-marketplace-lib/OAuth20Api~getTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Access Token
     * Partner makes a request to the token endpoint by adding the following parameters described below
     * @param {Object} opts Optional parameters
     * @param {String} opts.grantType 
     * @param {String} opts.clientId 
     * @param {String} opts.clientSecret 
     * @param {String} opts.redirectUri 
     * @param {String} opts.code 
     * @param {String} opts.refreshToken 
     * @param {module:meli-marketplace-lib/OAuth20Api~getTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getToken(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'grant_type': opts['grantType'],
        'client_id': opts['clientId'],
        'client_secret': opts['clientSecret'],
        'redirect_uri': opts['redirectUri'],
        'code': opts['code'],
        'refresh_token': opts['refreshToken']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}