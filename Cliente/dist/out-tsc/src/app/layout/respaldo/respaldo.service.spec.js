"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var respaldo_service_1 = require("./respaldo.service");
describe('RespaldoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [respaldo_service_1.RespaldoService]
        });
    });
    it('should be created', testing_1.inject([respaldo_service_1.RespaldoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=respaldo.service.spec.js.map