'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

/***************************  HOOKS - MODAL  ***************************/

/**
 * Custom hook for modal state management with advanced features.
 *
 * This hook provides comprehensive modal management with:
 * - Open/close state management
 * - Data passing to modals
 * - Multiple modal support
 * - Keyboard event handling (ESC to close)
 * - Focus management
 * - Animation support
 *
 * @param {Object} options - Configuration options
 * @returns {Object} Modal state and methods
 */

export default function useModal(options = {}) {
  const {
    defaultOpen = false,
    closeOnEscape = true,
    closeOnBackdropClick = true,
    preventScroll = true,
    onOpen,
    onClose,
    id = null
  } = options;

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [data, setData] = useState(null);
  const previousActiveElement = useRef(null);
  const modalRef = useRef(null);

  // Open modal function
  const open = useCallback(
    (modalData = null) => {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement;

      setIsOpen(true);
      setData(modalData);

      // Prevent body scroll if enabled
      if (preventScroll) {
        document.body.style.overflow = 'hidden';
      }

      // Call onOpen callback
      if (onOpen) {
        onOpen(modalData);
      }
    },
    [preventScroll, onOpen]
  );

  // Close modal function
  const close = useCallback(() => {
    setIsOpen(false);
    setData(null);

    // Restore body scroll
    if (preventScroll) {
      document.body.style.overflow = '';
    }

    // Restore focus to previous element
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }

    // Call onClose callback
    if (onClose) {
      onClose();
    }
  }, [preventScroll, onClose]);

  // Toggle modal function
  const toggle = useCallback(
    (modalData = null) => {
      if (isOpen) {
        close();
      } else {
        open(modalData);
      }
    },
    [isOpen, open, close]
  );

  // Update modal data without changing open state
  const updateData = useCallback((newData) => {
    setData(newData);
  }, []);

  // Keyboard event handler
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEscape, close]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Restore body scroll on unmount
      if (preventScroll && isOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [preventScroll, isOpen]);

  // Focus management
  const setModalRef = useCallback(
    (ref) => {
      modalRef.current = ref;

      // Focus the modal when it opens
      if (ref && isOpen) {
        // Try to focus the first focusable element or the modal itself
        const focusableElements = ref.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          ref.focus();
        }
      }
    },
    [isOpen]
  );

  return {
    // State
    isOpen,
    data,

    // Methods
    open,
    close,
    toggle,
    updateData,
    setModalRef,

    // Properties for modal components
    modalProps: {
      open: isOpen,
      onClose: closeOnBackdropClick ? close : undefined,
      ref: setModalRef,
      'aria-modal': true,
      role: 'dialog',
      ...(id && { id })
    },

    // Backdrop click handler
    handleBackdropClick: closeOnBackdropClick ? close : undefined
  };
}

// Hook for managing multiple modals
// Note: Due to React hooks rules, this should be used carefully
// For complex modal management, consider using a context provider instead
export const useModals = () => {
  // This is a simplified version to avoid hook rule violations
  // In a real app, you'd want to use Context API for multiple modals
  return {
    // Use individual useModal() calls for each modal instead
    openModal: () => console.warn('Use individual useModal() calls for each modal'),
    closeModal: () => console.warn('Use individual useModal() calls for each modal'),
    closeAllModals: () => console.warn('Use individual useModal() calls for each modal'),
    isAnyModalOpen: false
  };
};

// Hook for confirmation modals
export const useConfirmModal = (options = {}) => {
  const {
    title = 'Confirm Action',
    message = 'Are you sure you want to proceed?',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    ...modalOptions
  } = options;

  const modal = useModal(modalOptions);
  const [confirmData, setConfirmData] = useState(null);

  const confirm = useCallback(
    (data = null, customOptions = {}) => {
      const mergedOptions = { ...options, ...customOptions };
      setConfirmData({ data, options: mergedOptions });
      modal.open();
    },
    [modal, options]
  );

  const handleConfirm = useCallback(() => {
    if (onConfirm) {
      onConfirm(confirmData?.data);
    }
    if (confirmData?.options.onConfirm) {
      confirmData.options.onConfirm(confirmData.data);
    }
    modal.close();
  }, [modal, onConfirm, confirmData]);

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    }
    if (confirmData?.options.onCancel) {
      confirmData.options.onCancel();
    }
    modal.close();
  }, [modal, onCancel, confirmData]);

  return {
    ...modal,
    confirm,
    handleConfirm,
    handleCancel,
    confirmData,

    // Props for confirmation dialog
    confirmProps: {
      title: confirmData?.options.title || title,
      message: confirmData?.options.message || message,
      confirmText: confirmData?.options.confirmText || confirmText,
      cancelText: confirmData?.options.cancelText || cancelText,
      onConfirm: handleConfirm,
      onCancel: handleCancel
    }
  };
};
