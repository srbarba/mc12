export type TaskName = string;

export interface TaskMeta {
  name: TaskName;
  description: string;
}

export type TaskContext = {
  meta: TaskMeta;
  results: Record<TaskName, any>;
};

export type TaskMetaDef = Partial<TaskMeta>;

export type TaskDef = {
  meta: Omit<TaskMetaDef, "name">;
  handler: (context: TaskContext) => unknown | void;
};

export type Task = TaskDef & {
  meta: TaskMeta;
};
