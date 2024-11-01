"use client"

// components/FacebookPixel.tsx
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const FacebookPixel = () => {
  useEffect(() => {
    // Inicializa o pixel sem dados de correspondência avançada
    ReactPixel.init('464356528846076', undefined, { autoConfig: true, debug: false });

    // Rastreia a página visualizada
    ReactPixel.pageView();
  }, []);

  return null; // Este componente não renderiza nada
};

export default FacebookPixel;
