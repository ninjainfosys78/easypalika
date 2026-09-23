const DEFAULT_STEP_MS = 80;

// Delay resets every `columns` items so a long grid staggers row-by-row
// instead of accumulating one giant delay for items further down the list.
export function getStaggerDelay(index: number, columns: number, stepMs: number = DEFAULT_STEP_MS) {
    return (index % columns) * stepMs;
}
