import type { ResolvedConfig, Config } from "./config";
import { loadConfig } from "./config";

export async function mc12(_config: Config = {}): Promise<{
  config: ResolvedConfig;
}> {
  const config = await loadConfig(_config.dir, _config);
  return {
    config,
  };
}
