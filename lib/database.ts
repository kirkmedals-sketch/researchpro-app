export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // This will be hashed
  institution: string;
  fieldOfStudy: string;
  createdAt: string;
  emailVerified: boolean;
}

// In-memory storage for Vercel serverless environment
// Note: Data will reset on each deployment. For production, upgrade to:
// - Vercel Postgres, Supabase, MongoDB Atlas, or PlanetScale
let usersStore: User[] = [];

export function getAllUsers(): User[] {
  return usersStore;
}

export function getUserByEmail(email: string): User | null {
  return usersStore.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
}

export function getUserById(id: string): User | null {
  return usersStore.find(user => user.id === id) || null;
}

export function createUser(userData: Omit<User, 'id' | 'createdAt' | 'emailVerified'>): User {
  const newUser: User = {
    ...userData,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    emailVerified: false,
  };

  usersStore.push(newUser);
  return newUser;
}

export function updateUser(id: string, updates: Partial<User>): User | null {
  const userIndex = usersStore.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return null;
  }

  usersStore[userIndex] = { ...usersStore[userIndex], ...updates };
  return usersStore[userIndex];
}
