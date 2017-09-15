import { IonicNativePlugin } from '@ionic-native/core';
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
 *
 * ```
 */
export declare class SignatureFingerprint extends IonicNativePlugin {
    getPackageName(): Promise<any>;
    getSignature(): Promise<any>;
}
