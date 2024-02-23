export function nonNull<T extends Record<string, any>>(self: T) {
  for (const [key, value] of Object.entries(self)) {
    if (value === undefined) delete self[key];
  }

  return self;
}
