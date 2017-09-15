var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Signature Fingerprint
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { SignatureFingerprint } from '@ionic-native/signature-fingerprint';
 *
 *
 * constructor(private signatureFingerprint: SignatureFingerprint) { }
 *
 * ...
 *
 *
 * this.signatureFingerprint.getCoolMethod('Hello')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var SignatureFingerprint = (function (_super) {
    __extends(SignatureFingerprint, _super);
    function SignatureFingerprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    SignatureFingerprint.prototype.getPackageName = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };

    return SignatureFingerprint;
}(IonicNativePlugin));
SignatureFingerprint.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SignatureFingerprint.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SignatureFingerprint.prototype, "getPackageName", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SignatureFingerprint.prototype, "getSignature", null);
SignatureFingerprint = __decorate([
    Plugin({
        pluginName: 'SignatureFingerprint',
        plugin: 'cordova-plugin-signature-fingerprint',
        pluginRef: 'cordova.getSignatureFingerprint',
        repo: 'https://github.com/fontesoft/cordova-plugin-signature-fingerprint',
        platforms: ['Android'],
    })
], SignatureFingerprint);
export { SignatureFingerprint };
//# sourceMappingURL=index.js.map