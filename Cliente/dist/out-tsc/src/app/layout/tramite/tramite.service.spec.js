"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tramite_service_1 = require("./tramite.service");
describe('TramiteService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [tramite_service_1.TramiteService]
        });
    });
    it('should be created', testing_1.inject([tramite_service_1.TramiteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=tramite.service.spec.js.map