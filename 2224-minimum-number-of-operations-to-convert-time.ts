function convertTime(current: string, correct: string): number {
  const convert = (time: string) => {
    const [hours, minutes] = time.split(':');

    return parseInt(hours) * 60 + parseInt(minutes);
  };

  const currentNumerical = convert(current);
  const correctNumerical = convert(correct);

  let delta = correctNumerical - currentNumerical;

  let counter = 0;
  for (let divider of [60, 15, 5, 1]) {
    counter += Math.floor(delta / divider);

    delta = delta % divider;
  }

  return counter;
}
