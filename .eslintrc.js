module.exports = {
    "env": {
        "es2017": true,
        "node": true,
    },
    "parserOptions": {
        "project": "tsconfig.lint.json",
        "sourceType": "module",
    },
    "plugins": [
        "prefer-arrow"
    ],
    "extends": [
        "eslint:all",
        "plugin:@typescript-eslint/all",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    "rules": {
        "import/order": "error",
        "prefer-arrow/prefer-arrow-functions": ["error", { "allowStandaloneDeclarations": true }],

        "@typescript-eslint/no-extra-parens": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
        "@typescript-eslint/space-before-function-paren": ["error", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
        "@typescript-eslint/no-use-before-define": ["error", { "classes": false, "functions": false }],
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/restrict-template-expressions": ["error", { "allowNumber": true }],

        "max-len": ["error", { "code": 160 }],
        "object-curly-spacing": ["error", "always"],
        "quote-props": ["error", "consistent-as-needed"],
        "object-shorthand": ["error", "never"],
        "one-var": ["error", "never"],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "always-multiline",
        }],
        "array-element-newline": ["error", "consistent"],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "max-statements": ["error", 30],
        "max-lines": ["error", { "max": 500 }],
        "function-paren-newline": ["error", "multiline-arguments"],
        "operator-linebreak": ["error", "before"],

        "padded-blocks": "off",
        "max-classes-per-file": "off",
        "lines-between-class-members": "off",
        "function-call-argument-newline": "off",
        "class-methods-use-this": "off",
        "no-undefined": "off",
        "no-ternary": "off",
        "multiline-ternary": "off",
        "no-extra-parens": "off",
        "no-magic-numbers": "off",
        "func-names": "off",
        "no-undef-init": "off",
        "prefer-destructuring": "off",
        "newline-per-chained-call": "off",
        "capitalized-comments": "off",
        "line-comment-position": "off",
        "no-inline-comments": "off",
        "sort-imports": "off",
        "no-warning-comments": "off",
        "max-params": "off",
        "sort-keys": "off",
        "func-style": "off",
        "id-length": "off",
        "multiline-comment-style": "off",
        "no-continue": "off",
        "no-use-before-define": "off",
        "init-declarations": "off",
        "no-plusplus": "off",
        "no-invalid-this": "off",
        "max-lines-per-function": "off",
    },
};