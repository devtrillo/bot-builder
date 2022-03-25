const debounce = (callback: () => void, wait: number) => {
  let timeoutId: null | number = null;
  return (...args: any[]) => {
    if (timeoutId) window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args as []);
    }, wait);
  };
};

export default debounce;
