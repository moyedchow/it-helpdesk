export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  name: string;
  department: string;
  employeeId: string;
  role?: 'admin' | 'agent' | 'user';
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    department: string;
    employeeId: string;
  };
}