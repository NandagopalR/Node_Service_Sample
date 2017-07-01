/**
 * Created by Nandagopal on 7/1/17.
 */


var module, resource, service, services, service_module, service_modules, _ref;

var fs = require('fs');


services = fs.readdirSync(__dirname + "/services");

for (var i = 0, size = services.length; i < size; i++) {
    var service = services[i]
    console.log("Modules - " + service)
    service_modules = fs.readdirSync(__dirname + "/services/" + service)

    for (var j = 0, moduleSize = service_modules.length; j < moduleSize; j++) {
        service_module = service_modules[j]
        console.log("Services - " + service_module)
        module = require(__dirname + "/services/" + service + "/service.js")
        _ref = module.resources;

        for (var k = 0, resourceSize = _ref.length; k < resourceSize; k++) {
            resource = _ref[k];
            console.log("Service Name - " + resource.name)
        }
    }
}