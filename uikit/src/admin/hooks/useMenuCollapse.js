import { useState, useCallback } from 'react';

export default function useMenuCollapse(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    open,
    handleToggle,
    handleOpen,
    handleClose
  };
}
