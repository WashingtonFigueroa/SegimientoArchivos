"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tipotramite_service_1 = require("./tipotramite.service");
describe('TipotramiteService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [tipotramite_service_1.TipotramiteService]
        });
    });
    it('should be created', testing_1.inject([tipotramite_service_1.TipotramiteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=tipotramite.service.spec.js.map