// 何週目などの期間を格納する
export interface Period {
    id: string;
    name: string;
}

// パラメータ上昇値のテーブル
export interface Parameter {
    id: string;
    value: number;
}


// パラメータ上昇値のテーブル
export interface PeriodParameter {
    periodId: string;
    valueId: string;
    nextPeriodId?: string | null;
}