import type {
  checkbox,
  confirm,
  editor,
  expand,
  input,
  password,
  rawlist,
  select,
} from "@inquirer/prompts";

export type InputPrompt = { type: "input" } & Parameters<typeof input>[0];
export type SelectPrompt = { type: "select" } & Parameters<typeof select>[0];
export type CheckboxPrompt = { type: "checkbox" } & Parameters<
  typeof checkbox
>[0];
export type ConfirmPrompt = { type: "confirm" } & Parameters<typeof confirm>[0];
export type EditorPrompt = { type: "editor" } & Parameters<typeof editor>[0];
export type ExpandPrompt = { type: "expand" } & Parameters<typeof expand>[0];
export type PasswordPrompt = { type: "password" } & Parameters<
  typeof password
>[0];
export type RawlistPrompt = { type: "rawlist" } & Parameters<typeof rawlist>[0];

export type Prompt =
  | InputPrompt
  | SelectPrompt
  | CheckboxPrompt
  | ConfirmPrompt
  | EditorPrompt
  | ExpandPrompt
  | PasswordPrompt
  | RawlistPrompt;

export function definePrompt<const T extends Prompt>(prompt: T) {
  return prompt;
}

export function definePrompts<const T extends Prompt>(
  prompts: Record<string, T>,
) {
  return prompts;
}

export async function executePrompt(prompt: Prompt) {
  const handler = await import(`@inquirer/${prompt.type}`);
  return handler.default(prompt);
}
