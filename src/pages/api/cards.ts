import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // TODO: Replace mock data with actual API calls
    let mockResponse = [
        {
            token_address: '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c',
            token_id: '147822957',
            id: '0xc768cbf90bb46fb4806aa659412f9cc5da3a0e0b359d82775361c9f8901bf918',
            user: '0xbc472cf2bdd1a3cae3c0b30df18be12287179e1d',
            status: 'imx',
            uri: null,
            name: 'Unproven Incantation',
            description: null,
            image_url: 'https://card.godsunchained.com/?id=1381&q=4',
            metadata: {
                god: 'magic',
                set: 'order',
                mana: 4,
                name: 'Unproven Incantation',
                type: 'card',
                image: 'https://card.godsunchained.com/?id=1381&q=4',
                proto: 1381,
                effect: 'Blessed.\nDeal 4 damage to a creature. If it survives, give it burn +1.',
                rarity: 'common',
                quality: 'Meteorite',
            },
            collection: {
                name: 'Gods Unchained Cards',
                icon_url: 'https://images.godsunchained.com/misc/gu-sigel.png',
            },
            created_at: '2022-02-10T10:53:01.736386Z',
            updated_at: '2022-11-26T22:37:18.182438Z',
        },
        {
            token_address: '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c',
            token_id: '194643082',
            id: '0xbe05b91f0106df0336aa416f6b598b06c6c90ef1598d01135897a0ec3c3d6b97',
            user: '0xbc472cf2bdd1a3cae3c0b30df18be12287179e1d',
            status: 'imx',
            uri: null,
            name: 'Beached Colossus',
            description: null,
            image_url: 'https://card.godsunchained.com/?id=1669&q=4',
            metadata: {
                god: 'death',
                set: 'mortal',
                mana: 8,
                name: 'Beached Colossus',
                type: 'card',
                image: 'https://card.godsunchained.com/?id=1669&q=4',
                proto: 1669,
                tribe: 'atlantean',
                attack: 14,
                effect: "Frontline. Can't attack.\nAt the start of your turn, deal 5 damage to each god.",
                health: 11,
                rarity: 'common',
                quality: 'Meteorite',
            },
            collection: {
                name: 'Gods Unchained Cards',
                icon_url: 'https://images.godsunchained.com/misc/gu-sigel.png',
            },
            created_at: '2022-07-06T00:36:29.231384Z',
            updated_at: '2022-11-26T22:35:39.477621Z',
        },
        {
            token_address: '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c',
            token_id: '200146065',
            id: '0x511bb4e7b435e7476fbad1107d259cb7cb07e5ff5bb767f8f17fbfaa81ffe369',
            user: '0xbc472cf2bdd1a3cae3c0b30df18be12287179e1d',
            status: 'imx',
            uri: null,
            name: 'Aspect Juggler',
            description: null,
            image_url: 'https://card.godsunchained.com/?id=1628&q=4',
            metadata: {
                god: 'deception',
                set: 'mortal',
                mana: 2,
                name: 'Aspect Juggler',
                type: 'card',
                image: 'https://card.godsunchained.com/?id=1628&q=4',
                proto: 1628,
                tribe: 'guild',
                attack: 1,
                effect: 'Roar: Summon a random 1 mana creature from another domain.',
                health: 1,
                rarity: 'common',
                quality: 'Meteorite',
            },
            collection: {
                name: 'Gods Unchained Cards',
                icon_url: 'https://images.godsunchained.com/misc/gu-sigel.png',
            },
            created_at: '2022-08-17T04:03:23.403389Z',
            updated_at: '2022-11-26T22:39:49.182419Z',
        },
        {
            token_address: '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c',
            token_id: '196625396',
            id: '0x85b5dfff45f11cbb55a2ca2cb666f57bab3b2d2bf0e122b0f67f9d43477aa970',
            user: '0xbc472cf2bdd1a3cae3c0b30df18be12287179e1d',
            status: 'imx',
            uri: null,
            name: 'Thaeric Militant',
            description: null,
            image_url: 'https://card.godsunchained.com/?id=1503&q=4',
            metadata: {
                god: 'light',
                set: 'mortal',
                mana: 1,
                name: 'Thaeric Militant',
                type: 'card',
                image: 'https://card.godsunchained.com/?id=1503&q=4',
                proto: 1503,
                attack: 1,
                effect: 'Creatures damaged by this creature get -1 strength.',
                health: 1,
                rarity: 'common',
                quality: 'Meteorite',
            },
            collection: {
                name: 'Gods Unchained Cards',
                icon_url: 'https://images.godsunchained.com/misc/gu-sigel.png',
            },
            created_at: '2022-07-20T04:50:22.319361Z',
            updated_at: '2022-11-26T22:36:21.405388Z',
        },
    ];

    // if slug exists, filter by name
    const slugExists = req.query?.name && typeof req.query.name === 'string';
    if (slugExists) {
        // convert the name back from a slug to a name
        const name = (req.query.name as string).replace(/-/g, ' ');
        // filter the cards by name
        mockResponse = mockResponse.filter(card => card.name.toLowerCase() === name);
    }

    res.status(200).json(mockResponse);
}
