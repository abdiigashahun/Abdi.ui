import React, { useState } from 'react';
import { Copy, Check, Eye, Code } from 'lucide-react';
import { useTheme } from '../App';

interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  preview: React.ReactNode;
}

interface ComponentCardProps {
  component: Component;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(component.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`group relative rounded-xl border transition-all duration-300 hover:shadow-lg ${
      isDark 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {component.name}
            </h3>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {component.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCode(!showCode)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                showCode
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
              title="Toggle code view"
            >
              {showCode ? <Eye size={16} /> : <Code size={16} />}
            </button>
            <button
              onClick={copyToClipboard}
              className={`p-2 rounded-lg transition-all duration-200 ${
                copied
                  ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
              title="Copy code"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {showCode ? (
          <div className="relative">
            <pre className={`text-sm overflow-x-auto p-4 rounded-lg ${
              isDark 
                ? 'bg-gray-900 text-gray-300' 
                : 'bg-gray-50 text-gray-800'
            }`}>
              <code>{component.code}</code>
            </pre>
          </div>
        ) : (
          <div className={`p-6 rounded-lg border-2 border-dashed transition-colors ${
            isDark 
              ? 'border-gray-600 bg-gray-900/50' 
              : 'border-gray-300 bg-gray-50'
          }`}>
            <div className="flex items-center justify-center min-h-[120px]">
              {component.preview}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};
