import imxClient from '@/app/components/imxClient';

export const getCards = async (account: string) => {
    if (account === '') return [];
    const { getGods } = await imxClient();
    const response = await getGods(account);
    return response.result;
};
