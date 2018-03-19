const request     = require('request-promise');
const fs          = require('fs');
const querystring = require('querystring');
const IbanityApi  = require('./api');

class Ibanity {

    constructor(config /* or certificate_path*/, key_path, key_passphrase, api_host) {

        if(typeof(config) === 'string') {
            config = {
                cert:           config,
                key:            key_path,
                passphrase:     key_passphrase,
                host:           api_host
            }
        }

        config = config || {};
        config.host = config.host || 'https://api.ibanity.com/';

        if(typeof(config.cert) === 'string')
            config.cert =  fs.readFileSync(config.cert);
        
        if(typeof(config.key) === 'string')
            config.key =  fs.readFileSync(config.key);
        
        this.config = config;
        
        //------

        for(var key in IbanityApi) {
            const api = {};
            
            const protoKeys = Object.getOwnPropertyNames(IbanityApi[key].prototype);

            protoKeys.forEach((method) => {
                if(method !== 'constructor') {
                    api[method] = IbanityApi[key].prototype[method].bind(this);
                }
            });

            this[key] = api;
        }
    }

    //--------------------

    get(uri, params = {}, customer_access_token = null) {
        return this.execute("GET", uri, {}, params, Ibanity.__build_headers(customer_access_token));
    }

    post(uri, body, params = {}, customer_access_token = null) {
        return this.execute("POST", uri, body, params, Ibanity.__build_headers(customer_access_token));
    }

    delete(uri, params = {}, customer_access_token = null) {
        return this.execute("DELETE", uri, {}, params, Ibanity.__build_headers(customer_access_token));
    }

    put(uri, body, params = {}, customer_access_token = null) {
        return this.execute("PUT", uri, body, params, Ibanity.__build_headers(customer_access_token));
    }

    patch(uri, body, params = {}, customer_access_token = null) {
        return this.execute("PATCH", uri, body, params, Ibanity.__build_headers(customer_access_token));
    }

    async execute(method, uri, body, params, headers) {
        
        if(uri.indexOf('://') === -1)
            uri = this.config.host + uri;
        
        if(params && Object.values(params).length > 0)
            uri = uri + '?' + querystring.stringify(params);
        
        headers = headers || Ibanity.__build_headers();

        const config = {
            uri:    uri,
            json:   true,
            method: method,
            body:   body,
            agentOptions: {
                cert: this.config.cert,
                key:  this.config.key,
                passphrase: this.config.passphrase,
                securityOptions: 'SSL_OP_NO_SSLv3'
            },
            headers
        };

        try {
            const result = await request(config);
            return result;
        } catch(e) {
            if(e.error)
                throw(e.error);
        }
    }

    static __build_headers(customer_access_token) {
        var authorization = ""
        if(customer_access_token)
            authorization = "Bearer " + customer_access_token.toString()

        return {
            "Content-Type": "application/json",
            "Accept":       "application/json",
            "Authorization": authorization
        }
    }
    
}

module.exports = Ibanity;