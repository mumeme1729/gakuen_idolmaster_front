import apiClient from '../ApiClient'
import { SupportCardSchema } from '../../components/types/SupportCardTypes';

// 選択したグループの情報を取得
export async function getSupportCards() {
    try {
      const response = await apiClient.get<SupportCardSchema>(
        `/api/suport_cards/all_supports`,
        {
            params:{}
        }
      )
      return response.data
    } catch (error: unknown) {
      throw error
    }
}