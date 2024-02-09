export default function throttle(
  callback: (...args: any) => void,
  interval = 100,
) {
  let wait = false;
  let waitArgs: Parameters<typeof callback>;

  const timeoutFunc = () => {
    if (waitArgs === null) {
      wait = false;
      return;
    }

    callback(...waitArgs);
    waitArgs = null;
    setTimeout(timeoutFunc, interval);
  };

  return (...args: any) => {
    if (wait) {
      waitArgs = args;
      return;
    }

    callback(args);
    wait = true;
    setTimeout(timeoutFunc, interval);
  };
}
