export const getRatingDescription = (value: number) => {
  switch (true) {
    case (value === 10):
      return "Awesome";
    case (value >= 8 && value < 10):
      return "Very good";
    case (value >= 5 && value < 8):
      return "Good";
    case (value >= 3 && value < 5):
      return "Normal";
    case (value >= 0 && value < 3):
      return "Bad";
    default: return '';
  }
};