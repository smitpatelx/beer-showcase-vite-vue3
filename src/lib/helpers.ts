import { Unit } from '@/interfaces/beers';
import type { BoilVolume } from '@/interfaces/beers';

const UnitMap = {
  [Unit.Litres]: 'L',
  [Unit.Celsius]: '°C',
  [Unit.Grams]: 'gm',
  [Unit.Kilograms]: 'Kg',
} as Record<Unit, string>;

export const formatVolume = (data: BoilVolume) => {
  const { value, unit } = data;
  return `${value} ${UnitMap[unit]}`;
};
