import { Product } from '@/types';

import { create } from 'zustand';

interface PreviewModal {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModal>((set) => ({
  isOpen: false,
  data: undefined,
  onClose: () => set({ isOpen: false }),
  onOpen: (data: Product) => set({ isOpen: true, data: data }),
}));

export default usePreviewModal;
