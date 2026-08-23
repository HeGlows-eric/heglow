export type FlowData = {
  uploadedFileName?: string;
  uploadedAt?: number;
  answers?: Record<string, string>;
};

const KEY = "heglow_flow";

export function readFlow(): FlowData {
  if (typeof window === "undefined") return {};

  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeFlow(data: FlowData) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(KEY, JSON.stringify(data));
}

export function patchFlow(patch: Partial<FlowData>) {
  const current = readFlow();

  const next = {
    ...current,
    ...patch,
  };

  writeFlow(next);
  return next;
}