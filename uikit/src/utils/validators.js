// Comprehensive validation utilities for forms and data

// Basic validation functions
export const validators = {
  // Required field validation
  required: (value, message = 'Este campo é obrigatório') => {
    if (value === null || value === undefined || value === '') {
      return message;
    }
    if (typeof value === 'string' && value.trim() === '') {
      return message;
    }
    if (Array.isArray(value) && value.length === 0) {
      return message;
    }
    return null;
  },

  // Email validation
  email: (value, message = 'Email inválido') => {
    if (!value) return null;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : message;
  },

  // Strong email validation
  strongEmail: (value, message = 'Email deve ter formato válido') => {
    if (!value) return null;

    const strongEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return strongEmailRegex.test(value) ? null : message;
  },

  // Password validation
  password: (value, message = 'Senha deve ter pelo menos 8 caracteres') => {
    if (!value) return null;

    return value.length >= 8 ? null : message;
  },

  // Strong password validation
  strongPassword: (value, message = 'Senha deve ter 8+ caracteres, maiúscula, minúscula, número e símbolo') => {
    if (!value) return null;

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(value) ? null : message;
  },

  // Confirm password validation
  confirmPassword: (value, originalValue, message = 'Senhas não coincidem') => {
    if (!value) return null;

    return value === originalValue ? null : message;
  },

  // Minimum length validation
  minLength:
    (min) =>
    (value, message = `Deve ter pelo menos ${min} caracteres`) => {
      if (!value) return null;

      return value.length >= min ? null : message;
    },

  // Maximum length validation
  maxLength:
    (max) =>
    (value, message = `Deve ter no máximo ${max} caracteres`) => {
      if (!value) return null;

      return value.length <= max ? null : message;
    },

  // Exact length validation
  exactLength:
    (length) =>
    (value, message = `Deve ter exatamente ${length} caracteres`) => {
      if (!value) return null;

      return value.length === length ? null : message;
    },

  // Number validation
  number: (value, message = 'Deve ser um número válido') => {
    if (!value) return null;

    return !isNaN(value) && !isNaN(parseFloat(value)) ? null : message;
  },

  // Integer validation
  integer: (value, message = 'Deve ser um número inteiro') => {
    if (!value) return null;

    return Number.isInteger(Number(value)) ? null : message;
  },

  // Minimum value validation
  min:
    (minimum) =>
    (value, message = `Deve ser pelo menos ${minimum}`) => {
      if (!value) return null;

      const num = parseFloat(value);
      return !isNaN(num) && num >= minimum ? null : message;
    },

  // Maximum value validation
  max:
    (maximum) =>
    (value, message = `Deve ser no máximo ${maximum}`) => {
      if (!value) return null;

      const num = parseFloat(value);
      return !isNaN(num) && num <= maximum ? null : message;
    },

  // Range validation
  range:
    (min, max) =>
    (value, message = `Deve estar entre ${min} e ${max}`) => {
      if (!value) return null;

      const num = parseFloat(value);
      return !isNaN(num) && num >= min && num <= max ? null : message;
    },

  // Phone validation (Brazilian format)
  phone: (value, message = 'Telefone deve ter formato válido') => {
    if (!value) return null;

    const phoneRegex = /^(?:\+55\s?)?(?:\(?[1-9][0-9]\)?\s?)?9?[0-9]{4}[-\s]?[0-9]{4}$/;
    return phoneRegex.test(value.replace(/\D/g, '')) ? null : message;
  },

  // CPF validation (Brazilian document)
  cpf: (value, message = 'CPF inválido') => {
    if (!value) return null;

    const cpf = value.replace(/\D/g, '');

    if (cpf.length !== 11) return message;
    if (/^(\d)\1{10}$/.test(cpf)) return message; // All same digits

    // Validate check digits
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return message;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return message;

    return null;
  },

  // CNPJ validation (Brazilian company document)
  cnpj: (value, message = 'CNPJ inválido') => {
    if (!value) return null;

    const cnpj = value.replace(/\D/g, '');

    if (cnpj.length !== 14) return message;
    if (/^(\d)\1{13}$/.test(cnpj)) return message; // All same digits

    // Validate check digits
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weights1[i];
    }
    let remainder = sum % 11;
    const digit1 = remainder < 2 ? 0 : 11 - remainder;

    if (digit1 !== parseInt(cnpj.charAt(12))) return message;

    sum = 0;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weights2[i];
    }
    remainder = sum % 11;
    const digit2 = remainder < 2 ? 0 : 11 - remainder;

    if (digit2 !== parseInt(cnpj.charAt(13))) return message;

    return null;
  },

  // CEP validation (Brazilian postal code)
  cep: (value, message = 'CEP deve ter formato 00000-000') => {
    if (!value) return null;

    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    return cepRegex.test(value) ? null : message;
  },

  // URL validation
  url: (value, message = 'URL inválida') => {
    if (!value) return null;

    try {
      new URL(value);
      return null;
    } catch {
      return message;
    }
  },

  // Date validation
  date: (value, message = 'Data inválida') => {
    if (!value) return null;

    const date = new Date(value);
    return !isNaN(date.getTime()) ? null : message;
  },

  // Future date validation
  futureDate: (value, message = 'Data deve ser futura') => {
    if (!value) return null;

    const date = new Date(value);
    const now = new Date();
    return date > now ? null : message;
  },

  // Past date validation
  pastDate: (value, message = 'Data deve ser passada') => {
    if (!value) return null;

    const date = new Date(value);
    const now = new Date();
    return date < now ? null : message;
  },

  // Age validation
  age:
    (minAge) =>
    (value, message = `Idade deve ser pelo menos ${minAge} anos`) => {
      if (!value) return null;

      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= minAge ? null : message;
    },

  // Custom regex validation
  pattern:
    (regex) =>
    (value, message = 'Formato inválido') => {
      if (!value) return null;

      return regex.test(value) ? null : message;
    },

  // Array validation
  arrayMinLength:
    (min) =>
    (value, message = `Deve ter pelo menos ${min} itens`) => {
      if (!Array.isArray(value)) return message;

      return value.length >= min ? null : message;
    },

  arrayMaxLength:
    (max) =>
    (value, message = `Deve ter no máximo ${max} itens`) => {
      if (!Array.isArray(value)) return message;

      return value.length <= max ? null : message;
    }
};

// Validation composer for combining multiple validators
export const compose =
  (...validators) =>
  (value, allValues) => {
    for (const validator of validators) {
      const error = validator(value, allValues);
      if (error) return error;
    }
    return null;
  };

// Form validation runner
export const validateField = (value, validationRules, allValues = {}) => {
  if (Array.isArray(validationRules)) {
    return compose(...validationRules)(value, allValues);
  }

  if (typeof validationRules === 'function') {
    return validationRules(value, allValues);
  }

  return null;
};

// Validate entire form
export const validateForm = (values, validationSchema) => {
  const errors = {};

  for (const [field, rules] of Object.entries(validationSchema)) {
    const error = validateField(values[field], rules, values);
    if (error) {
      errors[field] = error;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Async validation support
export const asyncValidate = async (value, asyncValidator) => {
  try {
    const result = await asyncValidator(value);
    return result;
  } catch (error) {
    return error.message || 'Erro de validação';
  }
};

const validationUtils = {
  validators,
  compose,
  validateField,
  validateForm,
  asyncValidate
};

export default validationUtils;
