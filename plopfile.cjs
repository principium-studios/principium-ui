module.exports = function (plop) {
  // Helper to convert text to kebab-case
  plop.setHelper('dashCase', (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[\s_]+/g, '-'),
  );

  plop.setGenerator('component', {
    description: 'Scaffold component template into an existing directory',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name (kebab-case, e.g. my-component):',
        validate: (v) =>
          v && v === v.toLowerCase() && !v.includes(' ')
            ? true
            : 'Must be lowercase, kebab-case, no spaces.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Component description:',
      },
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'plop/component/**',
        base: 'plop/component',
        destination: 'packages/components/{{dashCase componentName}}',
        abortOnFail: true,
      },
    ],
  });
};
