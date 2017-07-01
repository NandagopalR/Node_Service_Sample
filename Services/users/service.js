/**
 * Created by Nandagopal on 7/1/17.
 */

module.exports = {
    resources: [
        {
            name: 'login',
            methods: require('./login'),
        },
        {
            name: 'forgotpassword',
            methods: require('./forgotpassword'),
        },
        {
            name: 'signup',
            methods: require('./signup'),
        },
        {
            name: 'verification',
            methods: require('./verification'),
        }
    ]
};