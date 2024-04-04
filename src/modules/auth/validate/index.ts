import { AuthLoginDto, AuthRegisterDto } from '../dto';

export function validateRegisterData(data: AuthRegisterDto) {
  if (
    !data.email ||
    !data.password ||
    !data.username ||
    typeof data.email === 'undefined' ||
    typeof data.password === 'undefined' ||
    typeof data.username === 'undefined'
  ) {
    return { error: 'Email and password are required' };
  }
  if (
    typeof data.email !== 'string' ||
    typeof data.password !== 'string' ||
    typeof data.username !== 'string'
  ) {
    return { error: 'Email and password must be a string' };
  }
  return { valid: true };
}

export function validateLoginData(data: AuthLoginDto) {
  if (!data.email || !data.password) {
    return { error: 'Email and password are required' };
  }
  if (typeof data.email !== 'string' || typeof data.password !== 'string') {
    return { error: 'Email and password must be a string' };
  }
  return { valid: true };
}
