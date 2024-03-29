#!/usr/bin/env node

import { defineCommand, runMain } from "citty";
import { name, description, version } from "../package.json";
import { mc12 } from "./mc12";

const main = defineCommand({
  meta: {
    name,
    description,
    version,
  },
  args: {
    dir: {
      description: "current working directory",
      type: "string",
    },
  },
  async setup({ args }) {
    const { config } = await mc12({
      dir: args.dir,
    });

    console.log(config);
  },
});

runMain(main);
