import { chain, Rule, Tree } from '@angular-devkit/schematics';
import { addModuleImportToModule, buildComponent, findModuleFromOptions, hasNgModuleImport } from '@angular/cdk/schematics';
import { Schema } from '@schematics/angular/component/schema';

export function myCarousel(options: Schema): Rule {
  return chain([
    buildComponent({ ...options }, {
      template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html.template',
      stylesheet:
        './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__style__.template',
    }),
    addRequiredModules(options)
  ]);
}

const myModules = [
  ['BrowserAnimationsModule', '@angular/platform-browser/animations']
];

function checkModulesToImport(host: Tree, path = ''): void {
  for (const [m, p] of myModules) {
    if (!hasNgModuleImport(host, path, m)) {
      addModuleImportToModule(host, path, m, p);
    }
  }
}

/**
 * Adds the required modules to the relative module.
 */
function addRequiredModules(options: Schema): Rule {
  return (host: Tree) => {
    if (!options.skipImport) {
      const modulePath = findModuleFromOptions(host, options);
      checkModulesToImport(host, modulePath);
    }
    return host;
  };
}
