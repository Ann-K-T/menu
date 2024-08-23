import { useState } from 'react';
import Menu from './components/Menu';
import Title from './components/Title';
import dataMenu from './data.js';
import Categories from './components/Categories';

const allCategories = [
  'all',
  ...new Set(dataMenu.map((item) => item.category)),
];

const App = () => {
  // HOOKS
  const [menuItems, setMenuItems] = useState(dataMenu);
  const [categories, setCategories] = useState(allCategories);
  // END OF HOOKS

  // FUNCTIONS
  const filterItems = (category) => {
    if (category == 'all') {
      setMenuItems(dataMenu);
      return;
    }
    const newItems = dataMenu.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuItems(newItems);
  };
  // END OF FUNCTIONS

  // JSX
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
  // END OF JSX
};
export default App;
