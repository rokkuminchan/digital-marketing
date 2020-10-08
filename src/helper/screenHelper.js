export function screenSize() {
  return {
    w:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    h:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
  };
}
