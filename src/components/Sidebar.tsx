import React from 'react';
import { 
  Palette, 
  Square, 
  FileText, 
  Layout, 
  Navigation,
  Layers,
  Grid,
  Type
} from 'lucide-react';
import { useTheme } from '../App';

interface SidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 'all', name: 'All Components', icon: Grid },
  { id: 'buttons', name: 'Buttons', icon: Square },
  { id: 'cards', name: 'Cards', icon: Layers },
  { id: 'forms', name: 'Forms', icon: FileText },
  { id: 'navigation', name: 'Navigation', icon: Navigation },
  { id: 'layout', name: 'Layout', icon: Layout },
  { id: 'typography', name: 'Typography', icon: Type },
  { id: 'feedback', name: 'Feedback', icon: Palette }
];

export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onCategorySelect,
  isOpen,
  onClose
}) => {
  const { isDark } = useTheme();

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect(categoryId);
    onClose();
  };

  return (
    <>
      <aside className={`fixed left-0 top-16 bottom-0 w-64 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${
        isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
      } border-r overflow-y-auto`}>
        <div className="p-6">
          <div className="mb-6">
            <h2 className={`text-sm font-semibold uppercase tracking-wider ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Categories
            </h2>
          </div>
          
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                    isSelected
                      ? isDark
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                      : isDark
                        ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <p className="mb-2">Built By:</p>
              <div className="flex flex-col gap-1">
               
                <span>• Abdi Gashahun</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};