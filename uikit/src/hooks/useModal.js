'use client';

import { useState, useCallback, useRef } from 'react';

/***************************  HOOK - USE MODAL  ***************************/

export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const [modalData, setModalData] = useState(null);
  const resolveRef = useRef(null);

  const open = useCallback((data = null) => {
    setModalData(data);
    setIsOpen(true);
  }, []);

  const close = useCallback((result = null) => {
    setIsOpen(false);
    setModalData(null);

    // Resolve promise if modal was opened with openAsync
    if (resolveRef.current) {
      resolveRef.current(result);
      resolveRef.current = null;
    }
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Promise-based modal opening
  const openAsync = useCallback((data = null) => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      setModalData(data);
      setIsOpen(true);
    });
  }, []);

  // Confirm dialog functionality
  const confirm = useCallback(
    async (message, title = 'Confirm') => {
      return openAsync({ type: 'confirm', message, title });
    },
    [openAsync]
  );

  // Alert dialog functionality
  const alert = useCallback(
    async (message, title = 'Alert') => {
      return openAsync({ type: 'alert', message, title });
    },
    [openAsync]
  );

  // Prompt dialog functionality
  const prompt = useCallback(
    async (message, defaultValue = '', title = 'Input') => {
      return openAsync({ type: 'prompt', message, defaultValue, title });
    },
    [openAsync]
  );

  return {
    isOpen,
    modalData,
    open,
    close,
    toggle,
    openAsync,
    confirm,
    alert,
    prompt
  };
}

// Multiple modals manager
export function useModals() {
  const [modals, setModals] = useState({});

  const createModal = useCallback(
    (id) => {
      if (!modals[id]) {
        setModals((prev) => ({
          ...prev,
          [id]: {
            isOpen: false,
            data: null
          }
        }));
      }
    },
    [modals]
  );

  const openModal = useCallback((id, data = null) => {
    setModals((prev) => ({
      ...prev,
      [id]: {
        isOpen: true,
        data
      }
    }));
  }, []);

  const closeModal = useCallback((id) => {
    setModals((prev) => ({
      ...prev,
      [id]: {
        isOpen: false,
        data: null
      }
    }));
  }, []);

  const toggleModal = useCallback((id) => {
    setModals((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: !prev[id]?.isOpen
      }
    }));
  }, []);

  const getModal = useCallback(
    (id) => {
      return modals[id] || { isOpen: false, data: null };
    },
    [modals]
  );

  const closeAllModals = useCallback(() => {
    setModals((prev) => {
      const updatedModals = {};
      Object.keys(prev).forEach((key) => {
        updatedModals[key] = {
          isOpen: false,
          data: null
        };
      });
      return updatedModals;
    });
  }, []);

  return {
    modals,
    createModal,
    openModal,
    closeModal,
    toggleModal,
    getModal,
    closeAllModals
  };
}

// Modal state context hook
export function useModalState(id, initialData = null) {
  const modal = useModal();

  return {
    ...modal,
    modalId: id,
    // Convenience methods with id
    openWithId: (data = initialData) => modal.open(data),
    closeWithId: (result) => modal.close(result)
  };
}

export default useModal;
