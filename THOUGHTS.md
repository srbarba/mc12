# Thoughts

## Task config

Complete Task config interface:

```typescript
type TaskName = string;
type TaskContext<Options extends Record<string, any>> = {
  [key: string]: unknown;
  options: Options;
  // this allows to perform side effects in the task handler based on dependant tasks results
  results: Record<TaskName, unknown>;
}
type Prompt =
  | InputPrompt
  | SelectPrompt
  | CheckboxPrompt
  | ConfirmPrompt
  | EditorPrompt
  | ExpandPrompt
  | PasswordPrompt
  | RawlistPrompt

interface Task <Options extends Record<string, any>> {
  // meta information about the task
  // this property opens the door for future features like task documentation
  meta: {
    // if task name is not provided, it will be inferred from the key in the tasks object
    name?: TaskName;
    // task description to be displayed in the help command
    description: string;
    // this will allow to filter tasks by tags
    tags?: string[];
    configKey?: string;
  }
  // handler is the function that will be executed when the task is run
  handler: <TaskResult extends unknown>(context: TaskContext<Options>) => Promise<TaskResult>;);
  prompts?: Record<string, Prompt>;
  // setup is intended to be used to setup the task context
  setup?: (options: Options) => Promise<TaskContext>;
  // verify if the task can be run
  // it is executed on task identification
  // if it returns false the task will not be run
  verify?: () => boolean | Promise<boolean>;
  // task will be skipped if verify returns false
  // this prevents to stop the execution of mc12 command
  skipOnVerifyFail?: boolean
  // task will be skipped if task setup or handler throws an error
  skipOnError?: boolean
  // task will be executed only on initial scaffold
  scaffold?: boolean;
  // allows to execute the task in parallel with other tasks
  parallel?: boolean;
  // declare tasks dependencies
  // if task is marked as parallel, dependencies will be executed in given order
  dependencies?: TaskName[];
}
```
