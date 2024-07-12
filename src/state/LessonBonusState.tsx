import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";


const { persistAtom } = recoilPersist();
// グループに参加しているメンバー情報
 export const voLessonBonusState = atom<number>({
  key: 'voLessonBonusState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const daLessonBonusState = atom<number>({
    key: 'doLessonBonusState',
    default: 0,
    effects_UNSTABLE: [persistAtom]
  });

  export const viLessonBonusState = atom<number>({
    key: 'viLessonBonusState',
    default: 0,
    effects_UNSTABLE: [persistAtom]
  });

