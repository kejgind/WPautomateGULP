# Visual Studio Code config using prettier/eslint/stylelint to format source files

Copy all files to your project/theme folder and run `npm install` to install all needed packages.

---

## CSS/SCSS/LESS (Stylelint settings)

1. Install **stylelint** `stylelint.vscode-stylelint` extension
1. In vscode settings `settings.json` add this code:
    ```json
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.stylelint": true
    },
    ```
1. Restart vscode.
1. Now on each save of your css/scss/less file, it will be automatically formated.

---

## JavaScript (eslint settings)

1. Install **eslint** `dbaeumer.vscode-eslint` extension
1. In vscode settings `settings.json` add this code:
    ```json
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "eslint.alwaysShowStatus": true,
    "eslint.format.enable": true,
    "eslint.validate": [
        "javascript"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
    ```
1. Restart vscode.
1. Now on each save of your javascript file, it will be automatically formated.

---

On Windows in vscode settings `settings.json` change end of line character settings (from *windows* type to *unix* type):
```json
"files.eol": "\n",
```

---

## Changing to new type of SCSS/SASS.

Quick intro to @use and @forward in SCSS and replacing @import:

1. Watch this [YouTube tutorial](https://www.youtube.com/watch?v=CR-a8upNjJ0)
1. Read official SASS documentation:
    - for [@use](https://sass-lang.com/documentation/at-rules/use)
    - for [@forward](https://sass-lang.com/documentation/at-rules/forward)