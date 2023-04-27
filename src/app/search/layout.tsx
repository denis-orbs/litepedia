import { SearchInput } from '@/components/SearchInput';
import React from 'react'

function layout({ children}: {children: React.ReactNode}) {
  return (
    <div className="search-page">
      <SearchInput />
      {children}
    </div>
  );
}

export default layout