import React from 'react';

const ThemeSelector = ({ theme, setTheme }) => {
  const themes = ['Neon Blue', 'Cyber Pink', 'Aurora Green', 'Tech Orange', 'Dual-Tone'];

  const handleChange = (e) => {
    setTheme(e.target.value);
    document.documentElement.style.setProperty('--theme-color', e.target.value.toLowerCase().replace(' ', '-'));
  };

  return (
    <select className="theme-selector floating" value={theme} onChange={handleChange}>
      {themes.map(t => <option key={t} value={t}>{t}</option>)}
    </select>
  );
};

export default ThemeSelector;
