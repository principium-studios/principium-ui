// plopfile.js
module.exports = function (plop) {
  // Helper to convert text to kebab-case
  plop.setHelper("dashCase", (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[\s_]+/g, "-")
  );

  plop.setGenerator("package", {
    description: "Scaffold package template into an existing directory",
    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "Package name (kebab-case, e.g. my-package):",
        validate: (v) =>
          v && v === v.toLowerCase() && !v.includes(" ")
            ? true
            : "Must be lowercase, kebab-case, no spaces.",
      },
      {
        type: "input",
        name: "description",
        message: "Package description:",
      },
      {
        type: "input",
        name: "outDir",
        message: "Target directory to scaffold into (relative to repo root):",
        validate: (v) => (v ? true : "Target directory is required."),
      },
    ],
    actions: [
      {
        type: "addMany",
        templateFiles: "plop/package/**",
        base: "plop/package",
        destination: "{{outDir}}",
        abortOnFail: true,
      },
    ],
  });
};
