"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var usuario_service_1 = require("./usuario.service");
describe('UsuarioService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [usuario_service_1.UsuarioService]
        });
    });
    it('should be created', testing_1.inject([usuario_service_1.UsuarioService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=usuario.service.spec.js.map