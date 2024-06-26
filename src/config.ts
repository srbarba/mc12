import { resolve } from "pathe";

export interface Config {
  /**
   * Working directory
   *
   * Defaults to the current working directory
   */
  dir?: string;
}

const RESOLVED_CONFIG_SYMBOL = Symbol("mc12Config");

export type ResolvedConfig = { [P in keyof Config]-?: Config[P] } & {
  [RESOLVED_CONFIG_SYMBOL]: true;
};

export function resolveConfig(
  config?: Config | ResolvedConfig,
): ResolvedConfig {
  if (config && RESOLVED_CONFIG_SYMBOL in config) {
    return config as ResolvedConfig;
  }

  const _config = <ResolvedConfig>{
    [RESOLVED_CONFIG_SYMBOL]: true,
    ...config,
  };

  return _config;
}

export async function loadConfig(
  dir = ".",
  overrides: Config,
): Promise<ResolvedConfig> {
  const { loadConfig } = await import("c12");

  dir = resolve(dir);

  const { config } = await loadConfig<Config>({
    cwd: dir,
    name: "mc12",
    dotenv: true,
    overrides,
    defaults: {
      dir,
    },
  });

  return resolveConfig(config as Config);
}
