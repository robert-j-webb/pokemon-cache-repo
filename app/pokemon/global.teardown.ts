import { test as teardown } from "@playwright/test";
import { execSync } from "child_process";

teardown("copy-pokemon", async ({}) => {
  execSync("cp app/pokemon/pokemons\\ copy.json app/pokemon/pokemons.json", {
    stdio: "inherit",
  });
});
