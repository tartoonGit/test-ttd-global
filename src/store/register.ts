import { create } from "zustand";

export interface memberType {
  img: string;
  email: string;
  password: string;
  conPassword: string;
  taxId: string;
  fName: string;
  phone: string;
  website: string;
  address: string;
  subDistrict: string;
  district: string;
  province: string;
  zipCode: string;
}

interface StoreType {
  member: memberType | null;
  increase?: (newMember: memberType) => void;
  logoutMember?: () => void;
}

export const useStore = create<StoreType>((set) => ({
  member: null,
  increase: (newMember: memberType) => set({ member: newMember }),
  logoutMember: () => set({ member: null }),
}));
