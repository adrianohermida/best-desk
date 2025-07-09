// Builder.io Auth Components Registry
import { Builder } from '@builder.io/react';

// Lazy load auth components
const AuthLogin = () => import('@/views/sections/auth/Login');
const AuthRegister = () => import('@/views/sections/auth/Register');
const AuthForgotPassword = () => import('@/views/sections/auth/ForgotPassword');
const AuthNewPassword = () => import('@/views/sections/auth/NewPassword');
const AuthOtpVerification = () => import('@/views/sections/auth/OtpVerification');

// Auth component definitions for Builder.io
export const authComponents = [
  {
    name: 'AuthLogin',
    component: AuthLogin,
    category: 'auth',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'default',
        enum: ['default', 'centered', 'minimal'],
        helperText: 'Login form variant'
      },
      {
        name: 'showSocialLogin',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show social login buttons'
      },
      {
        name: 'showRememberMe',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show remember me checkbox'
      },
      {
        name: 'redirectUrl',
        type: 'string',
        defaultValue: '/dashboard',
        helperText: 'URL to redirect after login'
      }
    ],
    image: '/assets/images/presentation/auth-light.svg'
  },
  {
    name: 'AuthRegister',
    component: AuthRegister,
    category: 'auth',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'default',
        enum: ['default', 'minimal', 'wizard'],
        helperText: 'Registration form variant'
      },
      {
        name: 'showSocialSignup',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show social signup buttons'
      },
      {
        name: 'requireEmailVerification',
        type: 'boolean',
        defaultValue: false,
        helperText: 'Require email verification'
      },
      {
        name: 'showTermsAcceptance',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show terms and conditions acceptance'
      }
    ],
    image: '/assets/images/presentation/auth-light.svg'
  },
  {
    name: 'AuthForgotPassword',
    component: AuthForgotPassword,
    category: 'auth',
    inputs: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: 'email',
        enum: ['email', 'phone', 'both'],
        helperText: 'Password reset method'
      },
      {
        name: 'showBackToLogin',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show back to login link'
      }
    ],
    image: '/assets/images/presentation/auth-light.svg'
  },
  {
    name: 'AuthNewPassword',
    component: AuthNewPassword,
    category: 'auth',
    inputs: [
      {
        name: 'showPasswordStrength',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Show password strength indicator'
      },
      {
        name: 'minPasswordLength',
        type: 'number',
        defaultValue: 8,
        helperText: 'Minimum password length'
      },
      {
        name: 'autoRedirect',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Auto redirect after success'
      }
    ],
    image: '/assets/images/presentation/auth-light.svg'
  },
  {
    name: 'AuthOtpVerification',
    component: AuthOtpVerification,
    category: 'auth',
    inputs: [
      {
        name: 'codeLength',
        type: 'number',
        defaultValue: 6,
        helperText: 'OTP code length'
      },
      {
        name: 'resendCooldown',
        type: 'number',
        defaultValue: 60,
        helperText: 'Resend cooldown in seconds'
      },
      {
        name: 'autoSubmit',
        type: 'boolean',
        defaultValue: true,
        helperText: 'Auto submit when code is complete'
      },
      {
        name: 'verificationType',
        type: 'string',
        defaultValue: 'email',
        enum: ['email', 'sms', 'authenticator'],
        helperText: 'Type of verification'
      }
    ],
    image: '/assets/images/presentation/auth-light.svg'
  }
];

// Register components with Builder.io
authComponents.forEach(({ name, component, inputs, image, category }) => {
  Builder.registerComponent(component, {
    name,
    category,
    inputs,
    image,
    tags: ['auth', 'authentication', 'security', 'user'],
    friendlyName: `Auth ${name.replace('Auth', '')}`,
    description: `Authentication component for ${name.replace('Auth', '').toLowerCase()}`
  });
});

export default authComponents;
