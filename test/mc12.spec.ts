import { expect, it, vi } from "vitest";
import { mc12, defineConfig } from "../src";

const task1Handler = vi.fn<any, string>().mockImplementation(() => {
  return "test";
});
const task2Handler = vi.fn<any, number>().mockImplementation(() => {
  return 123;
});
const task3Handler = vi.fn<any, undefined>().mockImplementation(() => {
  return undefined;
});

const config = defineConfig({
  tasks: {
    task1: {
      meta: {
        description: "Task 1 description",
      },
      handler: task1Handler,
    },
    task2: {
      meta: {
        description: "Task 2 description",
      },
      handler: task2Handler,
    },
    task3: {
      meta: {
        description: "Task 3 description",
      },
      handler: task3Handler,
    },
  },
});

it("should execute given tasks", async () => {
  const { results } = await mc12(config, ["task1", "task3"]);

  expect(task1Handler).toHaveBeenCalled();
  expect(task3Handler).toHaveBeenCalled();
  expect(task2Handler).not.toHaveBeenCalled();
  expect(results.task1).toBe("test");
  expect(results.task3).toBeUndefined();
});

it("should throw error if task is missing", () => {
  // @ts-expect-error
  expect(mc12(config, ["task1", "task4"])).rejects.toThrowError();
});
