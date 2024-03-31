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
    description: string;
  };
  handler: <TaskResult extends unknown>(
    context: TaskContext<Options>,
  ) => Promise<TaskResult>;
}
```

Example config based on defined Task:

```typescript
{
  "tasks": {
    "my-task": {
      "handler": () => console.log('My name is Doe, John Doe'),
    }
  }
}
```
