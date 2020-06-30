import { Rule } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';

export function myPlugin(_options: any): Rule {
  return buildComponent({ ..._options });
}
