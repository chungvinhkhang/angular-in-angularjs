After get source, run this script below to build dist js
```
npm install -g @angular/cli
cd angular-scripts/my-angular-app
npm install
npm run-script build
```

convention
https://angular.io/guide/styleguide


Setup from scratch (DON'T DO THIS)
```
cd angular-scripts
ng new my-angular-app --skipGit=true 
cd my-angular-app
ng add @angular/elements
ng g component validate-button --inline-style --inline-template
```
