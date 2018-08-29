"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var recorrido_service_1 = require("./recorrido.service");
describe('RecorridoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [recorrido_service_1.RecorridoService]
        });
    });
    it('should be created', testing_1.inject([recorrido_service_1.RecorridoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=recorrido.service.spec.js.map