export const TEST_CREDENTIALS = {
  email: 'test@resumatch.ai',
  password: 'Test@123'
};

export const MOCK_USER = {
  id: '1',
  email: TEST_CREDENTIALS.email,
  name: 'Test User',
  role: 'user'
};

export const mockLogin = async (email: string, password: string): Promise<{ success: boolean; user?: typeof MOCK_USER; error?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check credentials
  if (email === TEST_CREDENTIALS.email && password === TEST_CREDENTIALS.password) {
    return {
      success: true,
      user: MOCK_USER
    };
  }

  return {
    success: false,
    error: 'Invalid email or password'
  };
}; 