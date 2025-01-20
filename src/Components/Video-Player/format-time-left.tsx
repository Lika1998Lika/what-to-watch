const formatTimeLeft = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  return hours > 0
    ? `-${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `-${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export default formatTimeLeft;