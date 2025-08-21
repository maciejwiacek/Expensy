import { TReceipt } from '@/types/transaction'
import { create } from 'zustand'

type ReceiptStore = {
  currentReceipt: TReceipt | null
  setCurrentReceipt: (receipt: TReceipt) => void
  clearCurrentReceipt: () => void
}

export const useReceiptStore = create<ReceiptStore>((set) => ({
  currentReceipt: null,
  setCurrentReceipt: (receipt) => set({ currentReceipt: receipt }),
  clearCurrentReceipt: () => set({ currentReceipt: null }),
}))
