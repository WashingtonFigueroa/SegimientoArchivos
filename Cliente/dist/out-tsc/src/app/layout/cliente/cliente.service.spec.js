"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cliente_service_1 = require("./cliente.service");
describe('ClienteService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cliente_service_1.ClienteService]
        });
    });
    it('should be created', testing_1.inject([cliente_service_1.ClienteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cliente.service.spec.js.map