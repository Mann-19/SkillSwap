import { createContext, useContext, useState } from "react";

// Set up a context
export const FormCollapseContext = createContext();

// Context provider wrapper
export const FormCollapseContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeForm = () => { 
      setIsOpen(false);
    };
    const openForm = () => { 
      setIsOpen(true);
    };

  return (
    <FormCollapseContext.Provider value={{ isOpen, openForm, closeForm }}>
        { children }
    </FormCollapseContext.Provider>
  );
}

// Custom hook
export const useCollapseForm = () => useContext(FormCollapseContext);