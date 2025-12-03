{ nixpkgs, system }:
let
  pkgs = import nixpkgs { inherit system; };
in
{
  packages.${system}.default = [
    pkgs.bun
  ];

  devShells.${system}.default = pkgs.mkShell {
    buildInputs = with pkgs; [
      bun
      nodejs_20
      git
      curl
      wget
      nixfmt-rfc-style
      statix
      deadnix
      nil
    ];

    shellHook = ''
      echo "⚡ teaser development environment"
      echo "Bun: $(bun --version)"
      echo "Node: $(node --version)"
    '';

    preferLocalBuild = true;
  };
}
