export const getPages = (size: number, limit: number) => {
    return new Array(Math.ceil(size / limit)).fill('').map((_, i) => i + 1);
  };