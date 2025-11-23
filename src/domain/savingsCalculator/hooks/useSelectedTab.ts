import { useState } from 'react';

type TabValue = 'products' | 'results';

export default function useSelectedTab() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('products');

  const handleTabChange = (value: string) => {
    const selectedValue = value as TabValue;
    setSelectedTab(selectedValue);
  };

  return { selectedTab, handleTabChange };
}
