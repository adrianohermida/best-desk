// Data transformation utilities for formatting and converting data

// String transformers
export const stringTransformers = {
  // Capitalize first letter
  capitalize: (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  // Title case (capitalize each word)
  titleCase: (str) => {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  },

  // Convert to slug (URL-friendly)
  slug: (str) => {
    if (!str) return '';
    return str
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },

  // Remove accents/diacritics
  removeAccents: (str) => {
    if (!str) return '';
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  },

  // Truncate with ellipsis
  truncate: (str, maxLength = 100, suffix = '...') => {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - suffix.length) + suffix;
  },

  // Extract initials from name
  initials: (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  },

  // Mask sensitive data
  mask: (str, visibleChars = 4, maskChar = '*') => {
    if (!str) return '';
    if (str.length <= visibleChars) return str;
    const visible = str.slice(-visibleChars);
    const masked = maskChar.repeat(str.length - visibleChars);
    return masked + visible;
  }
};

// Number transformers
export const numberTransformers = {
  // Format currency (Brazilian Real)
  currency: (value, locale = 'pt-BR', currency = 'BRL') => {
    if (value === null || value === undefined) return '';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(value);
  },

  // Format percentage
  percentage: (value, decimals = 1) => {
    if (value === null || value === undefined) return '';

    return new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value / 100);
  },

  // Format large numbers (K, M, B)
  abbreviateNumber: (value) => {
    if (value === null || value === undefined) return '';

    const num = Math.abs(value);
    if (num >= 1.0e9) return (value / 1.0e9).toFixed(1) + 'B';
    if (num >= 1.0e6) return (value / 1.0e6).toFixed(1) + 'M';
    if (num >= 1.0e3) return (value / 1.0e3).toFixed(1) + 'K';
    return value.toString();
  },

  // Format file size
  fileSize: (bytes) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },

  // Add thousand separators
  thousandSeparator: (value, separator = '.') => {
    if (value === null || value === undefined) return '';

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
};

// Date transformers
export const dateTransformers = {
  // Format date to Brazilian format
  formatDate: (date, format = 'dd/MM/yyyy') => {
    if (!date) return '';

    const d = new Date(date);
    if (isNaN(d.getTime())) return '';

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    return format.replace('dd', day).replace('MM', month).replace('yyyy', year);
  },

  // Format date and time
  formatDateTime: (date, format = 'dd/MM/yyyy HH:mm') => {
    if (!date) return '';

    const d = new Date(date);
    if (isNaN(d.getTime())) return '';

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return format.replace('dd', day).replace('MM', month).replace('yyyy', year).replace('HH', hours).replace('mm', minutes);
  },

  // Relative time (time ago)
  timeAgo: (date) => {
    if (!date) return '';

    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);

    const intervals = {
      ano: 31536000,
      mês: 2592000,
      semana: 604800,
      dia: 86400,
      hora: 3600,
      minuto: 60
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
      const interval = Math.floor(diffInSeconds / seconds);
      if (interval >= 1) {
        return `há ${interval} ${unit}${interval > 1 ? (unit === 'mês' ? 'es' : 's') : ''}`;
      }
    }

    return 'agora mesmo';
  },

  // Get age from birth date
  age: (birthDate) => {
    if (!birthDate) return '';

    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
};

// Document formatters (Brazilian)
export const documentTransformers = {
  // Format CPF
  cpf: (value) => {
    if (!value) return '';

    const cpf = value.replace(/\D/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  },

  // Format CNPJ
  cnpj: (value) => {
    if (!value) return '';

    const cnpj = value.replace(/\D/g, '');
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  },

  // Format CEP
  cep: (value) => {
    if (!value) return '';

    const cep = value.replace(/\D/g, '');
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  },

  // Format phone number
  phone: (value) => {
    if (!value) return '';

    const phone = value.replace(/\D/g, '');

    if (phone.length === 11) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length === 10) {
      return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    return value;
  }
};

// Array transformers
export const arrayTransformers = {
  // Group array by property
  groupBy: (array, key) => {
    return array.reduce((groups, item) => {
      const group = item[key];
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(item);
      return groups;
    }, {});
  },

  // Sort array by property
  sortBy: (array, key, direction = 'asc') => {
    return [...array].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (direction === 'desc') {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
      }

      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });
  },

  // Remove duplicates from array
  unique: (array, key = null) => {
    if (key) {
      const seen = new Set();
      return array.filter((item) => {
        const value = item[key];
        if (seen.has(value)) {
          return false;
        }
        seen.add(value);
        return true;
      });
    }

    return [...new Set(array)];
  },

  // Chunk array into smaller arrays
  chunk: (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
};

// Object transformers
export const objectTransformers = {
  // Remove empty values from object
  removeEmpty: (obj) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value !== null && value !== undefined && value !== '') {
        result[key] = value;
      }
    }
    return result;
  },

  // Pick specific keys from object
  pick: (obj, keys) => {
    const result = {};
    keys.forEach((key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  },

  // Omit specific keys from object
  omit: (obj, keys) => {
    const result = { ...obj };
    keys.forEach((key) => {
      delete result[key];
    });
    return result;
  },

  // Flatten nested object
  flatten: (obj, prefix = '') => {
    const result = {};

    for (const key in obj) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, objectTransformers.flatten(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }

    return result;
  }
};

const transformers = {
  stringTransformers,
  numberTransformers,
  dateTransformers,
  documentTransformers,
  arrayTransformers,
  objectTransformers
};

export default transformers;
