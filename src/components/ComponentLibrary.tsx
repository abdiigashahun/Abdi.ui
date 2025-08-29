import React, { useState } from 'react';
import { ComponentCard } from './ComponentCard';
import { components } from '../data/components';


interface ComponentLibraryProps {
  selectedCategory: string;
  searchQuery: string;
}

export const ComponentLibrary: React.FC<ComponentLibraryProps> = ({
  selectedCategory,
  searchQuery
}) => {
  const filteredComponents = components.filter(component => {
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedComponents = filteredComponents.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, typeof components>);

  return (
    <div className="p-6 lg:p-8">
      {Object.keys(groupedComponents).length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No component found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria¹
          </p>
        </div>
      ) : (
        <>
          {selectedCategory === 'all' ? (
            Object.entries(groupedComponents).map(([category, categoryComponents]) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {categoryComponents.map((component) => (
                    <ComponentCard key={component.id} component={component} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredComponents.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>
          )}
        </>
      )}
    
    </div>
  );
};
