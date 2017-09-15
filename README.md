# Signature Fingerprint

Signature Fingerprint is a TypeScript wrapper for Cordova/PhoneGap plugin cordova-plugin-signature-fingerprint that make adding any native functionality you need to your Ionic mobile app easy.

Requires Cordova plugin: `cordova-plugin-signature-fingerprint`. For more info, please see the [Cordova Signature Fingerprint docs](https://github.com/fontesoft/cordova-plugin-signature-fingerprint).

Repo: https://github.com/fontesoft/cordova-plugin-signature-fingerprint

## Installation

1. Install the Cordova and Ionic Native plugins:

```
$ ionic cordova plugin add cordova-plugin-signature-fingerprint
$ npm install --save @fontesoft/signature-fingerprint
```

2. [Add this plugin to your app's module](https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module)

## Supported Platforms

- Android

## Usage

```typescript
  import { SignatureFingerprint } from '@fontesoft/signature-fingerprint';

  constructor(private sf: SignatureFingerprint) { }

  ...

  this.sf.getSignature();
  this.sf.getPackageName();

```

## Instance Members

### getSignature()

Return fingerprint signature of your app's certificate

#### Returns

```typescript
  Promise<any>
```

#### Example

```typescript

  this.sf.getSignature().then((signature:any) => {
    console.log(signature);
  }).catch((error:any) => {
    console.log(error);
  });

```

### getPackageName()

Returns the package name of the app

#### Returns

```typescript
  Promise<any>
```

#### Example

```typescript

  this.sf.getPackageName().then((name:any) => {
    console.log(name);
  }).catch((error:any) => {
    console.log(error);
  });

```
