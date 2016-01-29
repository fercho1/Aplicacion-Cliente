/**
* Md5.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        decifrado: {
            type: 'string',
            unique: true,
            required: true

        },
        cifrado: {
            type: 'string',
            required: true
        }

    }
};

