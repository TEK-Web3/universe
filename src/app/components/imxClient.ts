import { ImmutableX, Config } from '@imtbl/core-sdk';
export type { AssetWithOrders } from '@imtbl/core-sdk';

export const imxClient = async () => {
    const client = new ImmutableX(Config.PRODUCTION);

    const getAsset = async (tokenId: string) => {
        const response = await client.getAsset({
            tokenAddress: '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c',
            tokenId,
            includeFees: false,
        });

        return response;
    };

    const getGods = async (account: string) => {
        const response = await client.listAssets({
            user: account,
        });

        return response;
    };

    return {
        getAsset,
        getGods,
    };
};

export default imxClient;
