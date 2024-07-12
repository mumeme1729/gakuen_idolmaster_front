import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

interface RateOfIncreaseState {
    id: number;
    type: string;
    lesson: string;
    number: number;
  }

  const { persistAtom } = recoilPersist();
  export const rateOfIncreaseState = atom<RateOfIncreaseState[]>({
    key: 'rateOfIncreaseState',
    default: [
      { id: 1, type: 'SP', lesson: 'Vocal', number: 0 },
      { id: 2, type: 'SP', lesson: 'Vocal', number: 0 },
      { id: 3, type: 'SP', lesson: 'Vocal', number: 0 },
      { id: 4, type: 'SP', lesson: 'Vocal', number: 0 },
      { id: 5, type: 'SP', lesson: 'Vocal', number: 0 },
      { id: 6, type: 'SP', lesson: 'Vocal', number: 0 },
    ],
    effects_UNSTABLE: [persistAtom]
  });