# Features Roadmap

## 1. Config: Task definition

User must be able to define tasks in a configuration file and mc12 must execute configured tasks.

### Acceptance Criteria

- [ ] User must be able to define tasks as objects in a configuration file.
- [ ] mc12 must execute configured tasks.

### 1.1 User can define Task as Object

At this point we will only support tasks defined as objects.

The task config object will start with the following properties:

```typescript
interface TaskConfig {
  tasks: Record<string, Task>;
}
interface Task<Options extends Record<string, any>> {
  meta: {
    name?: string;
    description: string;
  };
  handler: <TaskResult extends unknown>(
    context: TaskContext<Options>,
  ) => Promise<TaskResult>;
}
```

Example config based on defined Task:

```json
{
  "tasks": {
    "my-task": {
      "handler": () => console.log('My name is Doe, John Doe'),
    }
  }
}
```

### 1.1 User can define Task pointing to a file

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
