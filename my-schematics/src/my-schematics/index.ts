import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function mySchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create(_options.name || 'hello', 'world');
    return tree;
  };
}
