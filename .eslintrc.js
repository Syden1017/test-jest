module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {"no-restricted-syntax": [
        "error",
        "LabeledStatement",
        "WithStatement"
      ]
    }
}