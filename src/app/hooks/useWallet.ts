import create from 'zustand';
import z from 'zod';

export const walletSchema = z.object({
    balance: z.string(),
    account: z.string().optional(),
    isConnected: z.boolean(),
});

type WalletStore = z.infer<typeof walletSchema>;

export const useWallet = create<WalletStore>(set => ({
    balance: '',
    account: undefined,
    isConnected: false,

    disconnectAccount: () => set({ account: undefined, isConnected: false }),
}));
