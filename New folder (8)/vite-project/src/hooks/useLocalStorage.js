import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const ExampleComponent = () => {
  const [username, setUsername] = useLocalStorage('username', '');
  const [themeColor, setThemeColor] = useLocalStorage('themeColor', '#FFFFFF');

  useEffect(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('themeColor', themeColor);
  }, [username, themeColor]);

  return (
    <div>
      <p>Salam, {username || 'Qonaq'}!</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Istifadeci Adi"
      />
      <p>Şu anki tema rengi: {themeColor}</p>
      <input
        type="color"
        value={themeColor}
        onChange={(e) => setThemeColor(e.target.value)}
      />
    </div>
  );
};

export default ExampleComponent;
