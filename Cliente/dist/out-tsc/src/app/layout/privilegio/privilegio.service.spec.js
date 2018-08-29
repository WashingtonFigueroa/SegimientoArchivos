"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var privilegio_service_1 = require("./privilegio.service");
describe('PrivilegioService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [privilegio_service_1.PrivilegioService]
        });
    });
    it('should be created', testing_1.inject([privilegio_service_1.PrivilegioService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=privilegio.service.spec.js.map