# DApp template
Truffle + Solidity + Angular 13 

```json
# Add to tsconfig.json

"compilerOptions": {
  "resolveJsonModule": true,
  "esModuleInterop": true,  
  "paths":{
      "crypto": ["./node_modules/crypto-browserify"],
      "stream": ["./node_modules/stream-browserify"],
      "assert": ["./node_modules/assert"],
      "http": ["./node_modules/stream-http"],
      "https": ["./node_modules/https-browserify"],
      "url": ["./node_modules/url"],
      "os": ["./node_modules/os-browserify"],
    },
    
...
"angularCompilerOptions": {
    "allowSyntheticDefaultImports": true,
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "noImplicitAny": false,
    "strictTemplates": true,
    "strictNullChecks": false
  }
```

```typescript
// Add to polyfills.ts

import 'zone.js';  // Included with Angular CLI.
import { Buffer } from 'buffer';

(window as any).global = window;
global.Buffer = Buffer;
global.process = {
  env: { DEBUG: undefined },
  version: '',
  nextTick: require('next-tick')
} as any;
```

