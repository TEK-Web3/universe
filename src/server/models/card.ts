export interface Card {
    token_address: string;
    token_id: string;
    id: string;
    user: string;
    status: string;
    uri: string | null;
    name: string;
    description: string | null;
    image_url: string;
    metadata: MetaData;
    collection: Collection;
}

export interface MetaData {
    god: string;
    set: string;
    mana: number;
    health: number;
    attack: number;
    name: string;
    type: 'card';
    image: string;
    proto: number;
    effect: string;
    rarity: string;
    quality: string;
}

export interface Collection {
    name: string;
    icon_url: string;
}
