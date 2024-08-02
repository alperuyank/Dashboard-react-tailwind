// lib/fetchData.ts
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { DashboardData } from '../types';

export const fetchDashboardData = async (): Promise<DashboardData[]> => {
  try {
    const querySnapshot: QuerySnapshot = await getDocs(collection(db, 'dashboard'));
    const data: DashboardData[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Omit<DashboardData, 'id'>
    }));
    return data;
  } catch (error) {
    console.error('Veri çekme hatası: ', error);
    return [];
  }
};
