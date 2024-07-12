import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";


const { persistAtom } = recoilPersist();
// 現在のステータス値
 export const currentVoState = atom<number>({
  key: 'currentVoState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const currentDaState = atom<number>({
  key: 'currentDaState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const currentViState = atom<number>({
  key: 'currentViState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});


// レッスン後のステータス値
export const afterVoState = atom<number>({
  key: 'afterVoState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const afterDaState = atom<number>({
  key: 'afterDaState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const afterViState = atom<number>({
  key: 'afterViState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});


// 次回レッスン後のステータス値
export const nextVoState = atom<number>({
  key: 'nextVoState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const nextDaState = atom<number>({
  key: 'nextDaState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const nextViState = atom<number>({
  key: 'nextViState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});


// 次次回レッスン後のステータス値
export const nextNextVoState = atom<number>({
  key: 'nextNextVoState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const nextNextDaState = atom<number>({
  key: 'nextNextDaState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const nextNextViState = atom<number>({
  key: 'nextNextViState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

// 次次次回レッスン後のステータス値
export const nextNextNextVoState = atom<number>({
  key: 'nextNextNextVoState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const nextNextNextDaState = atom<number>({
  key: 'nextNextNextDaState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const nextNextNextViState = atom<number>({
  key: 'nextNextNextViState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});