declare global {
  interface Window {
    ym?: (id: number, method: "reachGoal", goal: string) => void;
  }
}

const metrikaId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);

export function reachGoal(goal: string) {
  if (typeof window === "undefined" || !metrikaId || !window.ym) return;
  window.ym(metrikaId, "reachGoal", goal);
}
