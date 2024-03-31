import type { ResolvedConfig, MC12Config } from "./config";
import { loadConfig } from "./config";
import type { Task } from "./types";

type TasksFromConfig<C extends MC12Config> = keyof C["tasks"];

export async function mc12<
  C extends MC12Config,
  TaskNames extends keyof C["tasks"],
>(_config: C, taskNames: TaskNames[]) {
  const config = await loadConfig(_config.dir, _config);
  const tasks = resolveTasks(
    config,
    taskNames as (keyof (typeof config)["tasks"])[],
  );
  const results = executeTasks(tasks) as {
    [K in keyof C["tasks"] as K extends TaskNames ? K : never]: ReturnType<
      C["tasks"][K]["handler"]
    >;
  };
  return { results };
}

function resolveTasks<C extends ResolvedConfig>(
  config: ResolvedConfig,
  taskNames: TasksFromConfig<C>[],
) {
  return taskNames.map((t) => {
    const taskName = t as string;
    const task = config.tasks[taskName] as Task;
    if (!task) {
      throw new Error("Given task is missing");
    }
    task.meta.name = taskName;
    return task;
  });
}

function executeTasks(tasks: Task[]) {
  const results: { [K: string]: any } = {};
  for (const task of tasks) {
    results[task.meta.name] = task.handler({
      meta: task.meta,
      results,
    });
  }
  return results;
}
