// import axios from 'axios';
//
// const api = axios.create({baseURL : 'https://api-intranet.webfoundation.com.br'});
// export default api
import {System} from "../configs/System";


class API
{
    constructor(endPoint)
    {
        this.baseURL    = System.api.url;
        this.endPoint   = endPoint;
        this.bodyObject = {};
        this.headers    = new Headers();
    }

    addHeader(name, value)
    {
        this.headers.append(name, value);
    }
    addBodyObject(obj={})
    {
        this.bodyObject = obj;
    }

    get()
    {
        this.addHeader("Content-Type", "application/json");
        return new Promise((resolve, reject) =>
        {
            const fetchConfig =
                      {
                          method : 'GET',
                          headers : this.headers
                      };
            fetch(this._getFullURL(this.endPoint), fetchConfig)
                .then(function (response)
                {
                    return response.json();
                })
                .then(function (res)
                {
                    resolve(res);
                })
                .catch(function (err)
                {
                    reject(err);
                });
        })
    };

    post(bodyObj={})
    {
        this.addHeader("Content-Type", "application/json");
        this.addBodyObject(bodyObj);
        return new Promise((resolve, reject) =>
        {
            const fetchConfig =
                      {
                          method : 'POST',
                          headers : this.headers,
                          body : JSON.stringify(this.bodyObject)
                      };
            fetch(this._getFullURL(this.endPoint), fetchConfig)
                .then(function (response)
                {
                    return response.json();
                })
                .then(function (res)
                {
                    resolve(res);
                })
                .catch(function (err)
                {
                    reject(err);
                });
        })
    };

    put(bodyObj={})
    {
        this.addHeader("Content-Type", "application/json");
        this.addBodyObject(bodyObj);
        return new Promise((resolve, reject) =>
        {
            const fetchConfig =
                      {
                          method : 'PUT',
                          headers : this.headers,
                          body : JSON.stringify(this.bodyObject)
                      };
            fetch(this._getFullURL(this.endPoint), fetchConfig)
                .then(function (response)
                {
                    return response.json();
                })
                .then(function (res)
                {
                    resolve(res);
                })
                .catch(function (err)
                {
                    reject(err);
                });
        })
    };

    delete(bodyObj={})
    {
        this.addBodyObject(bodyObj);
        return new Promise((resolve, reject) =>
        {
            const fetchConfig =
                      {
                          method : 'DELETE',
                          headers : this.headers,
                          body : JSON.stringify(this.bodyObject)
                      };
            fetch(this._getFullURL(this.endPoint), fetchConfig)
                .then(function (response)
                {
                    return response.json();
                })
                .then(function (res)
                {
                    resolve(res);
                })
                .catch(function (err)
                {
                    reject(err);
                });
        })
    };

    _getFullURL(endpoint)
    {
        const clean = endpoint.trim();
        if (clean.substring(0, 1) !== "/")
        {
            return this.baseURL + "/" + endpoint;
        }
        else
        {
            return this.baseURL + endpoint;
        }
    }
}

export default API;