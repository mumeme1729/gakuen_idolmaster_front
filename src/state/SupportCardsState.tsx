import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";
import { SupportCardSchema } from '../components/types/SupportCardTypes';

const { persistAtom } = recoilPersist();
// グループに参加しているメンバー情報
 export const supportCardsState = atom<SupportCardSchema>({
  key: 'SupportCardsState',
  default: null,
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [persistAtom]
});

