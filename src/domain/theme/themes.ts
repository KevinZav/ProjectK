export const lightTheme = {
  mode: 'light' as const,
  colors: {
    primary: '#2563EB',
    secondary: '#7C3AED',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#0F172A',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    success: '#16A34A',
    error: '#DC2626',
  },
  typography: {
    regular: '400' as const,
    medium: '500' as const,
    bold: '700' as const,
    sizes: {
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      title: 32,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 999,
  },
};

export const darkTheme = {
  ...lightTheme,
  mode: 'dark' as const,
  colors: {
    ...lightTheme.colors,
    primary: '#60A5FA',
    secondary: '#A78BFA',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
    border: '#334155',
    success: '#4ADE80',
    error: '#F87171',
  },
};

export type AppTheme = typeof lightTheme;