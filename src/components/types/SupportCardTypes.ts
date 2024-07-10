
type SupportCardStateSchema = {
    state_0: number;
    state_1: number;
    state_2: number;
    state_3: number;
    state_4: number;
    state_max: number;
}


export type SupportCardBasicSchema = {
    id: string;
    name: string;
    image: string;
    rarity_name: string;
    type_name: string;
    main: SupportCardStateSchema | null
    sub: SupportCardStateSchema | null
}

export type SupportCardSchema = SupportCardBasicSchema[] | null;