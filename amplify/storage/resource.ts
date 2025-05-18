import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myStorageBucket',
  isDefault: true,
   access: (allow) => ({
    'public/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ]
   })
});


export const secondaryStorage = defineStorage({
  name: 'ixiCaptionStorageBucket',
   access: (allow) => ({
    'uploads/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ]
   })
});
