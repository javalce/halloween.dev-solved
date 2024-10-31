import { defineConfig } from '@javalce/eslint-config';

export default defineConfig({
  testing: 'vitest',
  type: 'lib',
  overrides: [
    {
      settings: {
        vitest: {
          typecheck: true,
        },
      },
      rules: {
        'no-nested-ternary': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
      },
    },
  ],
});
