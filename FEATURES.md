# Features Roadmap

## 1. Config: Task definition

User must be able to define tasks in a configuration file.

Tasks can be of type:

- object: containing the task properties
- string: pointing to file path that exposes a task object

Task config interface:

```typescript
type TaskContext<Options> = {
  options: Options
} // TODO: Define TaskContext type
type PromptOptions = any // TODO: Define PromptOptions type

interface Task <Options = Record<string, any>> {
  // meta information about the task
  // this property opens the door for future features like task documentation
  meta: {
    // task description to be displayed in the help command
    description: string;
    // this will allow to filter tasks by tags
    tags?: string[];
    configKey?: string;
  }
  // handler is the function that will be executed when the task is run
  handler: (context: TaskContext<Options>) => void | Promise<void>;);
  defaults?:
  // setup is intended to be used to setup the task context
  // you can use it to setup the task context with the result of a prompt or any other async operation
  setup?: (options: Record<string, any>) => TaskContext<Options> | Promise<TaskContext>;
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

Example config based on defined Task:

```json
{
  "tasks": {
    "task1": "path/to/task1",
    "task2": {
      "handler": (context) => console.log('My name is', context.name),
      "setup": async () => {
        const { name } = await input({
          name: 'name',
          message: 'What is your name?'
        });
        return { name };
      },
      "parallel": true,
      "dependencies": ["task1"]
    }
  }
}
```

### Acceptance Criteria

- [ ] User must be able to define tasks in a configuration file.
- [ ] Task must have a path property.
- [ ] Task must have a scaffold property.
- [ ] Task must have a prompts property.
- [ ] Task must have a parallel property.
- [ ] Task must have a dependencies property.

## 2. Config: Alias definition

User must be able to define aliases in a configuration file.

Alias config interface:

```typescript
interface Alias {
  tasks: (TaskName | AliasName)[];
  scaffold?: boolean;
  parallel?: boolean;
}
```

Example based on Alias interface:

```json
{
  "aliases": {
    "alias1": {
      "tasks": ["task1", "task2"],
      "scaffold": true,
      "parallel": true
    },
    "alias2": {
      "tasks": ["alias1", "task3"],
      "scaffold": true,
      "parallel": true
    }
  }
}
```

## 3. Config: Prompts Parameters definition

User must be able to define parameters in a configuration file.

Parameters config interface:

```typescript
import {} from "@inquirer/prompts";
```

## 4. Resolve: Resolve configuration

## 5. Resolve: Resolve tasks

## 6. Execution: Tasks to run identification

## 7. Execution: Parameters prompts

## 8. Execution: Task execution

```

```
