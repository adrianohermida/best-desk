// Validation schemas for common forms and data structures

import { validators, compose } from '@/utils/validators';

// Authentication schemas
export const authSchemas = {
  // Login form
  login: {
    email: [validators.required(), validators.email()],
    password: [validators.required(), validators.minLength(6)]
  },

  // Registration form
  register: {
    name: [
      validators.required('Nome é obrigatório'),
      validators.minLength(2, 'Nome deve ter pelo menos 2 caracteres'),
      validators.maxLength(50, 'Nome deve ter no máximo 50 caracteres')
    ],
    email: [validators.required('Email é obrigatório'), validators.strongEmail()],
    password: [validators.required('Senha é obrigatória'), validators.strongPassword()],
    confirmPassword: (value, allValues) => {
      const required = validators.required('Confirmação de senha é obrigatória')(value);
      if (required) return required;

      return validators.confirmPassword(value, allValues.password);
    }
  },

  // Password reset
  passwordReset: {
    email: [validators.required(), validators.email()]
  },

  // Change password
  changePassword: {
    currentPassword: [validators.required('Senha atual é obrigatória')],
    newPassword: [validators.required('Nova senha é obrigatória'), validators.strongPassword()],
    confirmNewPassword: (value, allValues) => {
      const required = validators.required('Confirmação é obrigatória')(value);
      if (required) return required;

      return validators.confirmPassword(value, allValues.newPassword);
    }
  }
};

// Contact and communication schemas
export const contactSchemas = {
  // Contact form
  contact: {
    name: [validators.required('Nome é obrigatório'), validators.minLength(2), validators.maxLength(100)],
    email: [validators.required('Email é obrigatório'), validators.email()],
    phone: [validators.phone()],
    subject: [validators.required('Assunto é obrigatório'), validators.maxLength(200)],
    message: [
      validators.required('Mensagem é obrigatória'),
      validators.minLength(10, 'Mensagem deve ter pelo menos 10 caracteres'),
      validators.maxLength(1000, 'Mensagem deve ter no máximo 1000 caracteres')
    ]
  },

  // Newsletter subscription
  newsletter: {
    email: [validators.required(), validators.email()],
    name: [validators.maxLength(50)]
  },

  // Feedback form
  feedback: {
    rating: [validators.required('Avaliação é obrigatória'), validators.integer(), validators.range(1, 5)],
    comment: [validators.maxLength(500)],
    email: [validators.email()]
  }
};

// Profile and user data schemas
export const profileSchemas = {
  // Personal information
  personalInfo: {
    firstName: [validators.required('Nome é obrigatório'), validators.minLength(2), validators.maxLength(50)],
    lastName: [validators.required('Sobrenome é obrigatório'), validators.minLength(2), validators.maxLength(50)],
    email: [validators.required(), validators.strongEmail()],
    phone: [validators.phone()],
    birthDate: [validators.date(), validators.age(13, 'Deve ter pelo menos 13 anos')],
    cpf: [validators.cpf()]
  },

  // Address information
  address: {
    street: [validators.required('Endereço é obrigatório'), validators.maxLength(200)],
    number: [validators.required('Número é obrigatório'), validators.maxLength(10)],
    complement: [validators.maxLength(100)],
    neighborhood: [validators.required('Bairro é obrigatório'), validators.maxLength(100)],
    city: [validators.required('Cidade é obrigatória'), validators.maxLength(100)],
    state: [validators.required('Estado é obrigatório'), validators.exactLength(2)],
    cep: [validators.required('CEP é obrigatório'), validators.cep()]
  },

  // Company information
  company: {
    name: [validators.required('Nome da empresa é obrigatório'), validators.maxLength(200)],
    cnpj: [validators.cnpj()],
    website: [validators.url()],
    employees: [validators.integer(), validators.min(1)]
  }
};

// E-commerce schemas
export const ecommerceSchemas = {
  // Product information
  product: {
    name: [validators.required('Nome do produto é obrigatório'), validators.minLength(3), validators.maxLength(100)],
    description: [validators.required('Descrição é obrigatória'), validators.minLength(10), validators.maxLength(1000)],
    price: [validators.required('Preço é obrigatório'), validators.number(), validators.min(0.01, 'Preço deve ser maior que zero')],
    category: [validators.required('Categoria é obrigatória')],
    stock: [validators.integer(), validators.min(0)]
  },

  // Order information
  order: {
    items: [validators.arrayMinLength(1, 'Pelo menos um item é obrigatório')],
    shippingAddress: [validators.required('Endereço de entrega é obrigatório')],
    paymentMethod: [validators.required('Método de pagamento é obrigatório')]
  },

  // Payment information
  payment: {
    cardNumber: [
      validators.required('Número do cartão é obrigatório'),
      validators.pattern(/^\d{16}$/, 'Número do cartão deve ter 16 dígitos')
    ],
    cardName: [validators.required('Nome no cartão é obrigatório'), validators.maxLength(100)],
    expiryDate: [
      validators.required('Data de validade é obrigatória'),
      validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato deve ser MM/AA')
    ],
    cvv: [validators.required('CVV é obrigatório'), validators.pattern(/^\d{3,4}$/, 'CVV deve ter 3 ou 4 dígitos')]
  }
};

// Settings and configuration schemas
export const settingsSchemas = {
  // Application preferences
  preferences: {
    language: [validators.required('Idioma é obrigatório')],
    timezone: [validators.required('Fuso horário é obrigatório')],
    theme: [validators.required('Tema é obrigatório')],
    emailNotifications: [
      // Boolean field - no validation needed
    ],
    pushNotifications: [
      // Boolean field - no validation needed
    ]
  },

  // Security settings
  security: {
    twoFactorAuth: [
      // Boolean field
    ],
    sessionTimeout: [validators.integer(), validators.range(5, 120, 'Timeout deve estar entre 5 e 120 minutos')],
    allowedIPs: [validators.arrayMaxLength(10, 'Máximo 10 IPs permitidos')]
  }
};

// Search and filter schemas
export const searchSchemas = {
  // General search
  search: {
    query: [validators.minLength(2, 'Busca deve ter pelo menos 2 caracteres'), validators.maxLength(100)],
    category: [
      // Optional category filter
    ],
    sortBy: [
      // Optional sort parameter
    ]
  },

  // Advanced search
  advancedSearch: {
    keywords: [validators.maxLength(200)],
    dateFrom: [validators.date()],
    dateTo: [validators.date()],
    priceMin: [validators.number(), validators.min(0)],
    priceMax: [validators.number(), validators.min(0)]
  }
};

// File upload schemas
export const uploadSchemas = {
  // Image upload
  image: {
    file: [validators.required('Arquivo é obrigatório')],
    alt: [validators.maxLength(200, 'Texto alternativo muito longo')],
    caption: [validators.maxLength(500)]
  },

  // Document upload
  document: {
    file: [validators.required('Documento é obrigatório')],
    title: [validators.required('Título é obrigatório'), validators.maxLength(100)],
    description: [validators.maxLength(500)]
  }
};

// Export all schemas
const validationSchemas = {
  authSchemas,
  contactSchemas,
  profileSchemas,
  ecommerceSchemas,
  settingsSchemas,
  searchSchemas,
  uploadSchemas
};

export default validationSchemas;
