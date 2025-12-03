{ pkgs, ... }:
{
  projectRootFile = "flake.nix";

  programs.nixfmt.enable = true;
  programs.biome = {
    enable = true;
    settings = {
      formatter = {
        enabled = true;
        indentStyle = "space";
        indentWidth = 2;
      };
      javascript = {
        formatter = {
          quoteStyle = "double";
          semicolons = "asNeeded";
        };
      };
    };
  };

  programs.prettier = {
    enable = true;
    includes = [ "**/*.css" ];
  };

  settings.formatter.biome = {
    includes = [
      "**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"
      "**/*.{json,jsonc}"
    ];
    excludes = [
      "**/*.css"
      "*.min.js"
      "*.gen.ts"
      "routeTree.gen.ts"
      "node_modules/**"
      ".vite/**"
      "dist/**"
      "build/**"
    ];
  };
}
