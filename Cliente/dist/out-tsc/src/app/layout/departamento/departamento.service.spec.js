"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var departamento_service_1 = require("./departamento.service");
describe('DepartamentoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [departamento_service_1.DepartamentoService]
        });
    });
    it('should be created', testing_1.inject([departamento_service_1.DepartamentoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=departamento.service.spec.js.map