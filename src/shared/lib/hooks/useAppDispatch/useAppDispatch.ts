import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'src/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
