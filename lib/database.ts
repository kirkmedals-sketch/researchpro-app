import { supabase, isSupabaseConfigured } from './supabase';

export interface User {
  id: string;
  name?: string;
  email: string;
  password: string; // This will be hashed
  institution?: string;
  fieldOfStudy?: string;
  createdAt: string;
  emailVerified: boolean;
}

// Fallback in-memory storage for when Supabase isn't configured
let inMemoryUsers: User[] = [];

export async function getAllUsers(): Promise<User[]> {
  if (!isSupabaseConfigured() || !supabase) {
    console.warn('Supabase not configured, using in-memory storage');
    return inMemoryUsers;
  }

  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }

  return (data || []).map(row => ({
    id: row.id,
    email: row.email,
    password: row.password,
    createdAt: row.created_at,
    emailVerified: row.email_verified,
  }));
}

export async function getUserByEmail(email: string): Promise<User | null> {
  if (!isSupabaseConfigured() || !supabase) {
    console.warn('Supabase not configured, using in-memory storage');
    return inMemoryUsers.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .ilike('email', email)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    email: data.email,
    password: data.password,
    createdAt: data.created_at,
    emailVerified: data.email_verified,
  };
}

export async function getUserById(id: string): Promise<User | null> {
  if (!isSupabaseConfigured() || !supabase) {
    console.warn('Supabase not configured, using in-memory storage');
    return inMemoryUsers.find(user => user.id === id) || null;
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    email: data.email,
    password: data.password,
    createdAt: data.created_at,
    emailVerified: data.email_verified,
  };
}

export async function createUser(
  userData: Omit<User, 'id' | 'createdAt'> & { emailVerified?: boolean }
): Promise<User | null> {
  if (!isSupabaseConfigured() || !supabase) {
    console.warn('Supabase not configured, using in-memory storage');
    const newUser: User = {
      email: userData.email,
      password: userData.password,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      emailVerified: userData.emailVerified ?? false,
    };
    inMemoryUsers.push(newUser);
    return newUser;
  }

  const { data, error } = await supabase
    .from('users')
    .insert({
      email: userData.email,
      password: userData.password,
      email_verified: userData.emailVerified ?? false,
    })
    .select()
    .single();

  if (error || !data) {
    console.error('Error creating user:', error);
    return null;
  }

  return {
    id: data.id,
    email: data.email,
    password: data.password,
    createdAt: data.created_at,
    emailVerified: data.email_verified,
  };
}

export async function updateUser(
  id: string,
  updates: Partial<User>
): Promise<User | null> {
  if (!isSupabaseConfigured() || !supabase) {
    console.warn('Supabase not configured, using in-memory storage');
    const userIndex = inMemoryUsers.findIndex(user => user.id === id);
    if (userIndex === -1) return null;

    inMemoryUsers[userIndex] = { ...inMemoryUsers[userIndex], ...updates };
    return inMemoryUsers[userIndex];
  }

  const updateData: any = {};

  if (updates.name !== undefined) updateData.name = updates.name;
  if (updates.email !== undefined) updateData.email = updates.email;
  if (updates.password !== undefined) updateData.password = updates.password;
  if (updates.institution !== undefined) updateData.institution = updates.institution;
  if (updates.fieldOfStudy !== undefined) updateData.field_of_study = updates.fieldOfStudy;
  if (updates.emailVerified !== undefined) updateData.email_verified = updates.emailVerified;

  const { data, error } = await supabase
    .from('users')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();

  if (error || !data) {
    console.error('Error updating user:', error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    password: data.password,
    institution: data.institution,
    fieldOfStudy: data.field_of_study,
    createdAt: data.created_at,
    emailVerified: data.email_verified,
  };
}
