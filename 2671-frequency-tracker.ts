class FrequencyTracker {
  private valueToFrequencyMap = new Map<number, number>();
  private frequencyToValuesMap = new Map<number, Set<number>>();

  constructor() {}

  add(number: number): void {
    const currentFrequency = this.valueToFrequencyMap.get(number) ?? 0;

    this.removeF(number, currentFrequency);
    const newFrequency = currentFrequency + 1;

    this.valueToFrequencyMap.set(number, newFrequency);
    this.addF(number, newFrequency);
  }

  deleteOne(number: number): void {
    const currentFrequency = this.valueToFrequencyMap.get(number) ?? 0;
    if (currentFrequency === 0) {
      return;
    }

    this.removeF(number, currentFrequency);

    const newFrequency = currentFrequency - 1;

    this.valueToFrequencyMap.set(number, newFrequency);
    this.addF(number, newFrequency);
  }

  hasFrequency(frequency: number): boolean {
    const values = this.frequencyToValuesMap.get(frequency);

    return !!values?.size;
  }

  private removeF(number: number, frequency: number) {
    const values = this.frequencyToValuesMap.get(frequency);

    if (!values) {
      return;
    }

    values.delete(number);
  }

  private addF(number: number, frequency: number) {
    const values = this.frequencyToValuesMap.get(frequency);

    if (!values) {
      this.frequencyToValuesMap.set(frequency, new Set([number]));
    } else {
      values.add(number);
    }
  }
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
