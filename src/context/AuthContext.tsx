import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  register: (email: string, password: string, name: string, type: 'client' | 'clinic') => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          setUser({ ...userDoc.data() as User, uid: firebaseUser.uid });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email: string, password: string, name: string, type: 'client' | 'clinic') => {
    const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(firebaseUser, { displayName: name });
    
    const userData: User = {
      uid: firebaseUser.uid,
      email,
      displayName: name,
      type,
      createdAt: new Date()
    };
    
    await setDoc(doc(db, 'users', firebaseUser.uid), userData);
    setUser(userData);
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};