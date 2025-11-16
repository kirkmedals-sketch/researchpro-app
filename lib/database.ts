import fs from 'fs';
import path from 'path';

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

const DB_PATH = path.join(process.cwd(), 'data', 'users.json');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2));
  }
}

export function getAllUsers(): User[] {
  ensureDataDir();
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export function getUserByEmail(email: string): User | null {
  const users = getAllUsers();
  return users.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
}

export function getUserById(id: string): User | null {
  const users = getAllUsers();
  return users.find(user => user.id === id) || null;
}

export function createUser(userData: Omit<User, 'id' | 'createdAt' | 'emailVerified'>): User {
  ensureDataDir();
  const users = getAllUsers();

  const newUser: User = {
    ...userData,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    emailVerified: false,
  };

  users.push(newUser);
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));

  return newUser;
}

export function updateUser(id: string, updates: Partial<User>): User | null {
  ensureDataDir();
  const users = getAllUsers();
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...updates };
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));

  return users[userIndex];
}
