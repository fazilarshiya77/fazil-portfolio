import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | Fazil Arshiya` : 'Fazil Arshiya — Product Designer & Frontend Engineer';
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};
