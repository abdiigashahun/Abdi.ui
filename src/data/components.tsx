import React from 'react';
import { 
  Heart, 
  Star, 
  Download, 
  Mail, 
  User, 
  Lock, 
  Search,
  Bell,
  CheckCircle,
  AlertCircle,
  XCircle,
  Home,
  Settings,
  LogOut
} from 'lucide-react';

export interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  preview: React.ReactNode;
}

export const components: Component[] = [

  {
  id: 'magic-morph-button',
  name: 'Magic Morph Button',
  description: 'A whimsical button that morphs shape, changes colors, and bounces when clicked — ideal for magical or fantasy-themed UIs.',
  category: 'buttons',
  code: `<button
  onClick={(e) => {
    e.currentTarget.classList.add('animate-morph');
    setTimeout(() => {
      e.currentTarget.classList.remove('animate-morph');
    }, 1000);
  }}
  className="relative px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1"
>
  ✨ Cast Spell
  <style>{\`
    @keyframes morph {
      0% {
        border-radius: 9999px;
        transform: scale(1);
        background: linear-gradient(to right, #7e5bef, #fb6f92, #fef08a);
      }
      50% {
        border-radius: 20%;
        transform: scale(1.2) rotate(5deg);
        background: linear-gradient(to right, #fef08a, #fb6f92, #7e5bef);
      }
      100% {
        border-radius: 9999px;
        transform: scale(1);
        background: linear-gradient(to right, #7e5bef, #fb6f92, #fef08a);
      }
    }
    .animate-morph {
      animation: morph 1s ease-in-out;
    }
  \`}</style>
</button>`,
  preview: (
    <button
      onClick={(e) => {
        e.currentTarget.classList.add('animate-morph');
        setTimeout(() => {
          e.currentTarget.classList.remove('animate-morph');
        }, 1000);
      }}
      className="relative px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1"
    >
      ✨ Cast Spell
      <style>{`
        @keyframes morph {
          0% {
            border-radius: 9999px;
            transform: scale(1);
            background: linear-gradient(to right, #7e5bef, #fb6f92, #fef08a);
          }
          50% {
            border-radius: 20%;
            transform: scale(1.2) rotate(5deg);
            background: linear-gradient(to right, #fef08a, #fb6f92, #7e5bef);
          }
          100% {
            border-radius: 9999px;
            transform: scale(1);
            background: linear-gradient(to right, #7e5bef, #fb6f92, #fef08a);
          }
        }
        .animate-morph {
          animation: morph 1s ease-in-out;
        }
      `}</style>
    </button>
  )
}
,
  {
  id: 'hacker-terminal-button',
  name: 'Hacker Terminal Button',
  description: 'A typewriter-style terminal button with a glitch effect, inspired by retro hacking aesthetics. Great for dark/tech/Cyberpunk themes.',
  category: 'buttons',
  code: `<button
  onClick={() => alert('💻 Hacking Initiated...')}
  className="relative px-5 py-3 bg-black text-green-500 font-mono text-sm border border-green-600 overflow-hidden shadow-[0_0_20px_#00ff00] group"
>
  <span className="relative z-10">INITIATE HACK</span>
  
  {/* Glitch overlays */}
  <span className="absolute inset-0 bg-green-500 opacity-10 blur-sm group-hover:animate-glitch" />
  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline" />

  {/* Typewriter border animation */}
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-500" />
  
  <style>{\`
    @keyframes glitch {
      0% { clip-path: inset(0 0 80% 0); }
      20% { clip-path: inset(20% 0 40% 0); }
      40% { clip-path: inset(10% 0 60% 0); }
      60% { clip-path: inset(30% 0 30% 0); }
      80% { clip-path: inset(50% 0 20% 0); }
      100% { clip-path: inset(0 0 80% 0); }
    }
    .animate-glitch {
      animation: glitch 1s steps(2, start) infinite;
    }

    @keyframes scanline {
      0% { transform: translateY(-100%); opacity: 0; }
      50% { transform: translateY(50%); opacity: 0.3; }
      100% { transform: translateY(100%); opacity: 0; }
    }
    .animate-scanline {
      animation: scanline 2s ease-in-out infinite;
    }
  \`}</style>
</button>`,
  preview: (
    <button
      onClick={() => alert('💻 Hacking Initiated...')}
      className="relative px-5 py-3 bg-black text-green-500 font-mono text-sm border border-green-600 overflow-hidden shadow-[0_0_20px_#00ff00] group"
    >
      <span className="relative z-10">INITIATE HACK</span>
      <span className="absolute inset-0 bg-green-500 opacity-10 blur-sm group-hover:animate-glitch" />
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline" />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-500" />
      <style>{`
        @keyframes glitch {
          0% { clip-path: inset(0 0 80% 0); }
          20% { clip-path: inset(20% 0 40% 0); }
          40% { clip-path: inset(10% 0 60% 0); }
          60% { clip-path: inset(30% 0 30% 0); }
          80% { clip-path: inset(50% 0 20% 0); }
          100% { clip-path: inset(0 0 80% 0); }
        }
        .animate-glitch {
          animation: glitch 1s steps(2, start) infinite;
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(50%); opacity: 0.3; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 2s ease-in-out infinite;
        }
      `}</style>
    </button>
  )
}
,
  {
  id: 'neumorphic-profile-card',
  name: 'Neumorphic Profile Card',
  description: 'A soft, neumorphic style user profile card with image, name, and bio.',
  category: 'cards',
  code: `
  <div className="max-w-xs p-6 bg-gray-100 rounded-xl shadow-neumorphic flex flex-col items-center text-center">
    <img
      className="w-24 h-24 rounded-full mb-4 shadow-inner"
      src="https://randomuser.me/api/portraits/women/68.jpg"
      alt="User Avatar"
    />
    <h3 className="text-lg font-semibold text-gray-800">Jane Doe</h3>
    <p className="text-sm text-gray-600 mt-2">Front-end Developer passionate about modern UI/UX and React.</p>
    <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
      Follow
    </button>
  </div>
  `,
  preview: (
    <div className="max-w-xs p-6 bg-gray-100 rounded-xl shadow-neumorphic flex flex-col items-center text-center">
      <img
        className="w-24 h-24 rounded-full mb-4 shadow-inner"
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="User Avatar"
      />
      <h3 className="text-lg font-semibold text-gray-800">Jane Doe</h3>
      <p className="text-sm text-gray-600 mt-2">Front-end Developer passionate about modern UI/UX and React.</p>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
        Follow
      </button>
    </div>
  )
}
,
{
  id: 'glassmorphism-product-card',
  name: 'Glassmorphism Product Card',
  description: 'A frosted glass effect card perfect for product showcase with price and rating.',
  category: 'cards',
  code: `
  <div className="max-w-sm p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 shadow-lg text-white">
    <img
      className="w-full rounded-lg mb-4"
      src="https://images.unsplash.com/photo-1600185364669-33dbbc667bfc?auto=format&fit=crop&w=400&q=80"
      alt="Product"
    />
    <h3 className="text-xl font-bold mb-2">Wireless Headphones</h3>
    <p className="mb-4 text-gray-300">High quality sound with noise cancellation and long battery life.</p>
    <div className="flex items-center justify-between">
      <span className="text-lg font-semibold">$199</span>
      <div className="flex items-center gap-1">
        <span>⭐️⭐️⭐️⭐️☆</span>
        <span className="text-sm">(120 reviews)</span>
      </div>
    </div>
  </div>
  `,
  preview: (
    <div className="max-w-sm p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white border-opacity-20 shadow-lg text-white">
      <img
        className="w-full rounded-lg mb-4"
        src="https://images.unsplash.com/photo-1600185364669-33dbbc667bfc?auto=format&fit=crop&w=400&q=80"
        alt="Product"
      />
      <h3 className="text-xl font-bold mb-2">Wireless Headphones</h3>
      <p className="mb-4 text-gray-300">High quality sound with noise cancellation and long battery life.</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">$199</span>
        <div className="flex items-center gap-1">
          <span>⭐️⭐️⭐️⭐️☆</span>
          <span className="text-sm">(120 reviews)</span>
        </div>
      </div>
    </div>
  )
}
,
{
  id: 'timeline-event-card',
  name: 'Timeline Event Card',
  description: 'A vertical timeline card with event date, title, and description.',
  category: 'cards',
  code: `
  <div className="flex items-start gap-4">
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
      <div className="w-px bg-indigo-600 flex-1"></div>
    </div>
    <div>
      <time className="text-sm text-gray-500">June 8, 2025</time>
      <h4 className="text-lg font-semibold text-gray-900">Project Launch</h4>
      <p className="text-gray-600 mt-1 max-w-md">
        We successfully launched the beta version of our product with great feedback from early users.
      </p>
    </div>
  </div>
  `,
  preview: (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
        <div className="w-px bg-indigo-600 flex-1"></div>
      </div>
      <div>
        <time className="text-sm text-gray-500">June 8, 2025</time>
        <h4 className="text-lg font-semibold text-gray-900">Project Launch</h4>
        <p className="text-gray-600 mt-1 max-w-md">
          We successfully launched the beta version of our product with great feedback from early users.
        </p>
      </div>
    </div>
  )
}
,
{
  id: 'flip-card',
  name: 'Flip Card',
  description: 'A card that flips on hover to show back side content with smooth 3D animation.',
  category: 'cards',
  code: `
  <div className="w-64 h-40 perspective">
    <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
      <div className="absolute w-full h-full bg-white rounded-lg shadow-lg backface-hidden flex flex-col justify-center items-center p-4">
        <h3 className="text-xl font-semibold">Front Side</h3>
        <p className="mt-2 text-gray-700">Hover to see more info</p>
      </div>
      <div className="absolute w-full h-full bg-indigo-600 text-white rounded-lg shadow-lg backface-hidden rotate-y-180 flex flex-col justify-center items-center p-4">
        <h3 className="text-xl font-semibold">Back Side</h3>
        <p className="mt-2">Here is the extra content revealed on flip.</p>
      </div>
    </div>
  </div>

  <style>
    .perspective {
      perspective: 1000px;
    }
    .transform-style-preserve-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
  </style>
  `,
  preview: (
    <div className="w-64 h-40 perspective">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg backface-hidden flex flex-col justify-center items-center p-4">
          <h3 className="text-xl font-semibold">Front Side</h3>
          <p className="mt-2 text-gray-700">Hover to see more info</p>
        </div>
        <div className="absolute w-full h-full bg-indigo-600 text-white rounded-lg shadow-lg backface-hidden rotate-y-180 flex flex-col justify-center items-center p-4">
          <h3 className="text-xl font-semibold">Back Side</h3>
          <p className="mt-2">Here is the extra content revealed on flip.</p>
        </div>
      </div>
    </div>
  )
}
,
{
  id: 'interactive-stats-card',
  name: 'Interactive Stats Card',
  description: 'A card with interactive stats that change on hover with a smooth transition.',
  category: 'cards',
  code: `
  <div className="w-72 p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white cursor-pointer group">
    <h3 className="text-2xl font-bold mb-4">Website Analytics</h3>
    <div className="flex justify-between">
      <div className="text-center">
        <p className="text-4xl font-extrabold group-hover:text-yellow-300 transition">12.5K</p>
        <p className="uppercase tracking-wide text-sm">Visitors</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-extrabold group-hover:text-yellow-300 transition">8.2K</p>
        <p className="uppercase tracking-wide text-sm">Page Views</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-extrabold group-hover:text-yellow-300 transition">1.4K</p>
        <p className="uppercase tracking-wide text-sm">Signups</p>
      </div>
    </div>
  </div>
  `,
  preview: (
    <div className="w-72 p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white cursor-pointer group">
      <h3 className="text-2xl font-bold mb-4">Website Analytics</h3>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-4xl font-extrabold group-hover:text-yellow-300 transition">12.5K</p>
          <p className="uppercase tracking-wide text-sm">Visitors</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-extrabold group-hover:text-yellow-300 transition">8.2K</p>
          <p className="uppercase tracking-wide text-sm">Page Views</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-extrabold group-hover:text-yellow-300 transition">1.4K</p>
          <p className="uppercase tracking-wide text-sm">Signups</p>
        </div>
      </div>
    </div>
  )
}
,
{
  id: 'file-upload-drag-drop',
  name: 'File Upload Drag & Drop',
  description: 'A drag and drop area for file upload with hover effect and fallback button.',
  category: 'forms',
  code: `
  <div className="w-80 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-indigo-600 transition">
    <input type="file" id="fileUpload" className="hidden" />
    <label
      htmlFor="fileUpload"
      className="flex flex-col items-center gap-2 text-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 8v4m0 0l4-4m-4 4l-4-4" />
      </svg>
      <span>Drag & drop your files here or click to upload</span>
    </label>
  </div>
  `,
  preview: (
    <div className="w-80 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-indigo-600 transition">
      <input type="file" id="fileUpload" className="hidden" />
      <label
        htmlFor="fileUpload"
        className="flex flex-col items-center gap-2 text-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 8v4m0 0l4-4m-4 4l-4-4" />
        </svg>
        <span>Drag & drop your files here or click to upload</span>
      </label>
    </div>
  )
}
,
{
  id: 'mobile-hamburger-menu',
  name: 'Responsive Mobile Hamburger',
  description: 'Navigation for small screens with hamburger toggle and slide-in menu.',
  category: 'navigation',
  code: `
  <div className="relative">
    <button className="text-gray-800 p-2 focus:outline-none" onClick={() => alert('Open Menu')}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    {/* Replace this alert with slide-in menu logic */}
  </div>
  `,
  preview: (
    <div className="relative">
      <button className="text-gray-800 p-2 focus:outline-none" onClick={() => alert('Open Menu')}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
,

{
  id: 'multi-step-form',
  name: 'Multi-step Form',
  description: 'A simple two-step form with navigation buttons and progress indicator.',
  category: 'forms',
  code: `
  <form className="w-80 p-6 bg-white rounded-lg shadow-lg">
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">Email Address</label>
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="email@example.com"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">Password</label>
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="••••••••"
      />
    </div>
    <div className="flex justify-between items-center">
      <button type="button" className="text-gray-500 cursor-not-allowed">Back</button>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Next
      </button>
    </div>
  </form>
  `,
  preview: (
    <form className="w-80 p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="••••••••"
        />
      </div>
      <div className="flex justify-between items-center">
        <button type="button" className="text-gray-500 cursor-not-allowed">Back</button>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Next
        </button>
      </div>
    </form>
  )
}
,
{
  id: 'toggle-switch',
  name: 'Custom Toggle Switch',
  description: 'A stylish toggle switch replacing a checkbox with smooth animations.',
  category: 'forms',
  code: `
  <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 relative transition-colors"></div>
    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
    <span className="ml-3 text-gray-700 select-none">Enable Notifications</span>
  </label>
  `,
  preview: (
    <label className="inline-flex items-center cursor-pointer relative">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 relative transition-colors"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform"></div>
      <span className="ml-3 text-gray-700 select-none">Enable Notifications</span>
    </label>
  )
}
,
{
  id: 'input-validation-message',
  name: 'Input with Validation Message',
  description: 'An input field with dynamic validation message below.',
  category: 'forms',
  code: `
  <div className="w-72">
    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
    <input
      type="email"
      id="email"
      placeholder="you@example.com"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
      onChange={(e) => {
        const el = e.target;
        const valid = el.checkValidity();
        if (!valid) {
          el.setCustomValidity("Please enter a valid email address.");
        } else {
          el.setCustomValidity("");
        }
      }}
    />
    <p className="mt-1 text-sm text-red-600" id="email-error">Please enter a valid email address.</p>
  </div>
  `,
  preview: (
    <div className="w-72">
      <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
      <input
        type="email"
        id="email"
        placeholder="you@example.com"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
        onChange={(e) => {
          const el = e.target;
          const valid = el.checkValidity();
          if (!valid) {
            el.setCustomValidity("Please enter a valid email address.");
          } else {
            el.setCustomValidity("");
          }
        }}
      />
      <p className="mt-1 text-sm text-red-600" id="email-error">Please enter a valid email address.</p>
    </div>
  )
}
,

  {
  id: 'terminal-button',
  name: 'Live Terminal Button',
  description: 'A button that simulates a terminal command execution when clicked. Perfect for developer portfolios or tools.',
  category: 'buttons',
  code: `<button
  onClick={(e) => {
    const btn = e.currentTarget;
    const terminal = btn.querySelector('.terminal-output');
    terminal.textContent = '$ git push origin main';
    setTimeout(() => {
      terminal.textContent = '✔ Pushed successfully!';
    }, 2000);
  }}
  className="w-full max-w-xs bg-black text-green-400 font-mono rounded-md shadow-md p-4 hover:shadow-lg transition-all"
>
  <div className="terminal-output text-sm h-5">Click to push</div>
</button>`,
  preview: (
    <button
      onClick={(e) => {
        const btn = e.currentTarget;
        const terminal = btn.querySelector('.terminal-output');
        terminal.textContent = '$ git push origin main';
        setTimeout(() => {
          terminal.textContent = '✔ Pushed successfully!';
        }, 2000);
      }}
      className="w-full max-w-xs bg-black text-green-400 font-mono rounded-md shadow-md p-4 hover:shadow-lg transition-all"
    >
      <div className="terminal-output text-sm h-5">Click to push</div>
    </button>
  )
}
,
  {
  id: 'neon-orbit-button',
  name: 'Neon Orbit Button',
  description: 'A circular button with orbiting neon rings, 3D hover motion, ripple effect on click, and glassy futuristic vibes. Designed to be the best.',
  category: 'buttons',
  code: `<button
  onClick={() => {
    const circle = document.createElement('span');
    circle.className = 'ripple';
    event.currentTarget.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
    alert('🚀 Quantum Action Launched!');
  }}
  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_20px_#7f5af0] hover:rotate-12 hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold overflow-hidden"
>
  <span className="z-10">Go</span>

  {/* Orbit Rings */}
  <span className="absolute w-full h-full border border-purple-500 rounded-full animate-spin-slow opacity-30" />
  <span className="absolute w-3/4 h-3/4 border border-indigo-400 rounded-full animate-spin-reverse-slower opacity-20" />

  {/* Glass Overlay */}
  <span className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm pointer-events-none" />

  {/* Ripple effect (JS added) */}
  <style>{\`
    .ripple {
      position: absolute;
      width: 120%;
      height: 120%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
    @keyframes spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes spin-reverse-slower {
      0% { transform: rotate(360deg); }
      100% { transform: rotate(0deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 5s linear infinite;
    }
    .animate-spin-reverse-slower {
      animation: spin-reverse-slower 8s linear infinite;
    }
  \`}</style>
</button>`,
  preview: (
    <button
      onClick={(event) => {
        const circle = document.createElement('span');
        circle.className = 'ripple';
        event.currentTarget.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
        alert('🚀 Quantum Action Launched!');
      }}
      className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_20px_#7f5af0] hover:rotate-12 hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold overflow-hidden"
    >
      <span className="z-10">Go</span>
      <span className="absolute w-full h-full border border-purple-500 rounded-full animate-spin-slow opacity-30" />
      <span className="absolute w-3/4 h-3/4 border border-indigo-400 rounded-full animate-spin-reverse-slower opacity-20" />
      <span className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm pointer-events-none" />
      <style>{`
        .ripple {
          position: absolute;
          width: 120%;
          height: 120%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slower {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }
        .animate-spin-reverse-slower {
          animation: spin-reverse-slower 8s linear infinite;
        }
      `}</style>
    </button>
  )
}
,
  {
  id: 'quantum-pulse-button',
  name: 'Quantum Pulse Button',
  description: 'An animated, pulsating button with a shimmering gradient and interactive press effect. Designed to feel alive.',
  category: 'buttons',
  code: `<button className="relative px-6 py-3 font-semibold text-white rounded-lg overflow-hidden shadow-[0_0_10px_#9333ea] bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 hover:shadow-[0_0_20px_#d946ef] transition-all duration-300 ease-in-out active:scale-95">
  <span className="relative z-10">Quantum Pulse</span>
  <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-500 via-pink-400 to-red-400 opacity-20 blur-xl"></span>
  <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_80%)]"></span>
</button>`,
  preview: (
    <button className="relative px-6 py-3 font-semibold text-white rounded-lg overflow-hidden shadow-[0_0_10px_#9333ea] bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 hover:shadow-[0_0_20px_#d946ef] transition-all duration-300 ease-in-out active:scale-95">
      <span className="relative z-10">Quantum Pulse</span>
      <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-500 via-pink-400 to-red-400 opacity-20 blur-xl"></span>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_80%)]"></span>
    </button>
  )
}
,
  {
  id: 'shine-button',
  name: 'Shine Button',
  description: 'A sleek button with a gradient shine animation on hover for modern interfaces.',
  category: 'buttons',
  code: `<button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-blue-500 rounded-full shadow-md group hover:shadow-blue-500/50">
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
  <span className="relative z-10">Shine Me</span>
</button>`,
  preview: (
    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-blue-500 rounded-full shadow-md group hover:shadow-blue-500/50">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
      <span className="relative z-10">Shine Me</span>
    </button>
  )
}
,
{
  id: 'neon-glass-button',
  name: 'Neon Glass Button',
  description: 'A futuristic glassmorphism button with neon glow and tap animation. Stunning for modern UI kits.',
  category: 'buttons',
  code: `<button className="relative px-6 py-3 text-white rounded-lg backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_10px_#00f2ff,0_0_20px_#00f2ff] hover:shadow-[0_0_20px_#00f2ff,0_0_30px_#00f2ff]">
  <span className="relative z-10">Neon Glass</span>
  <span className="absolute inset-0 bg-gradient-to-br from-[#00f2ff33] to-[#00f2ff11] rounded-lg blur-sm"></span>
</button>`,
  preview: (
    <button className="relative px-6 py-3 text-white rounded-lg backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_10px_#00f2ff,0_0_20px_#00f2ff] hover:shadow-[0_0_20px_#00f2ff,0_0_30px_#00f2ff]">
      <span className="relative z-10">Neon Glass</span>
      <span className="absolute inset-0 bg-gradient-to-br from-[#00f2ff33] to-[#00f2ff11] rounded-lg blur-sm"></span>
    </button>
  )
}
,
  // Buttons
  {
    id: 'button-primary',
    name: 'Primary Button',
    description: 'Standard primary action button',
    category: 'buttons',
    code: `<button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
  Click me
</button>`,
    preview: (
      <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
        Click me
      </button>
    )
  },
  {
    id: 'button-gradient',
    name: 'Gradient Button',
    description: 'Eye-catching gradient button',
    category: 'buttons',
    code: `<button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
  <Heart className="w-4 h-4 inline mr-2" />
  Like
</button>`,
    preview: (
      <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
        <Heart className="w-4 h-4 inline mr-2" />
        Like
      </button>
    )
  },
  {
    id: 'button-outline',
    name: 'Outline Button',
    description: 'Secondary outline button style',
    category: 'buttons',
    code: `<button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
  Secondary
</button>`,
    preview: (
      <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
        Secondary
      </button>
    )
  },

  // Cards
  {
    id: 'card-basic',
    name: 'Basic Card',
    description: 'Simple content card with shadow',
    category: 'cards',
    code: `<div className="max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Card Title
  </h5>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Here's some content for this card component.
  </p>
</div>`,
    preview: (
      <div className="max-w-sm p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Card Title
        </h5>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Here's some content for this card.
        </p>
      </div>
    )
  },
  {
    id: 'card-product',
    name: 'Product Card',
    description: 'E-commerce style product card',
    category: 'cards',
    code: `<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
  <div className="p-5">
    <div className="flex items-center justify-between mb-2">
      <h5 className="text-xl font-semibold text-gray-900 dark:text-white">Product Name</h5>
      <div className="flex items-center">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">4.8</span>
      </div>
    </div>
    <p className="text-2xl font-bold text-green-600 mb-3">$99.99</p>
    <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
      Add to Cart
    </button>
  </div>
</div>`,
    preview: (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow">
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Product Name</h5>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">4.8</span>
            </div>
          </div>
          <p className="text-xl font-bold text-green-600 mb-3">$99.99</p>
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
            Add to Cart
          </button>
        </div>
      </div>
    )
  },

  // Forms
  {
    id: 'form-input',
    name: 'Text Input',
    description: 'Styled form input with label',
    category: 'forms',
    code: `<div className="mb-4">
  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Email address
  </label>
  <input 
    type="email" 
    id="email"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="john@example.com" 
  />
</div>`,
    preview: (
      <div className="w-full max-w-xs">
        <label htmlFor="email-demo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email address
        </label>
        <input 
          type="email" 
          id="email-demo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="john@example.com" 
        />
      </div>
    )
  },
  {
    id: 'form-search',
    name: 'Search Input',
    description: 'Search input with icon',
    category: 'forms',
    code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
  </div>
  <input 
    type="search" 
    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Search..." 
  />
  <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
    Search
  </button>
</div>`,
    preview: (
      <div className="w-full max-w-md relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input 
          type="search" 
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Search..." 
        />
        <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
          Search
        </button>
      </div>
    )
  },

  // Navigation
  {
    id: 'nav-breadcrumb',
    name: 'Breadcrumb',
    description: 'Navigation breadcrumb component',
    category: 'navigation',
    code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <Home className="w-3 h-3 mr-2.5" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          Current
        </span>
      </div>
    </li>
  </ol>
</nav>`,
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <Home className="w-3 h-3 mr-2.5" />
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                Projects
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Current
              </span>
            </div>
          </li>
        </ol>
      </nav>
    )
  },

  // Feedback
  {
    id: 'alert-success',
    name: 'Success Alert',
    description: 'Success notification alert',
    category: 'feedback',
    code: `<div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <CheckCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
  <span className="sr-only">Success</span>
  <div>
    <span className="font-medium">Success!</span> Your changes have been saved.
  </div>
</div>`,
    preview: (
      <div className="w-full max-w-md flex items-center p-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
        <CheckCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
        <div>
          <span className="font-medium">Success!</span> Changes saved.
        </div>
      </div>
    )
  },
  {
    id: 'alert-warning',
    name: 'Warning Alert',
    description: 'Warning notification alert',
    category: 'feedback',
    code: `<div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
  <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
  <span className="sr-only">Warning</span>
  <div>
    <span className="font-medium">Warning!</span> Please check your input.
  </div>
</div>`,
    preview: (
      <div className="w-full max-w-md flex items-center p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
        <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
        <div>
          <span className="font-medium">Warning!</span> Check input.
        </div>
      </div>
    )
  },

  // Layout
  {
    id: 'layout-container',
    name: 'Container',
    description: 'Responsive container component',
    category: 'layout',
    code: `<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
      Page Title
    </h1>
    <p className="mt-4 text-gray-600 dark:text-gray-400">
      Content goes here...
    </p>
  </div>
</div>`,
    preview: (
      <div className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
          Page Title
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Content goes here...
        </p>
      </div>
    )
  },

  // Typography
  
  {
  id: 'badge-simple',
  name: 'Simple Badge',
  description: 'Small badge for notifications or labels',
  category: 'feedback',
  code: `<span className="inline-block px-2 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-full">
  New
</span>`,
  preview: (
    <span className="inline-block px-2 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-full">
      New
    </span>
  )
},
{
  id: 'section-header',
  name: 'Stylized Section Header',
  description: 'A clean and modern section header with underline effect.',
  category: 'typography',
  code: `<h2 className="text-2xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-blue-500 after:rounded">
  Featured Products
</h2>`,
  preview: (
    <h2 className="text-2xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-blue-500 after:rounded">
      Featured Products
    </h2>
  )
}
,
{
  id: 'faq-accordion',
  name: 'FAQ Accordion',
  description: 'An interactive FAQ section where answers expand and collapse.',
  category: 'layout',
  code: `<div className="w-full max-w-md mx-auto">
  <details className="mb-4 rounded-lg border border-gray-300 dark:border-gray-700 p-4">
    <summary className="font-semibold cursor-pointer">What is your return policy?</summary>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">You can return items within 30 days of purchase.</p>
  </details>
  <details className="rounded-lg border border-gray-300 dark:border-gray-700 p-4">
    <summary className="font-semibold cursor-pointer">How long does shipping take?</summary>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Shipping typically takes 3-7 business days.</p>
  </details>
</div>`,
  preview: (
    <div className="w-full max-w-md mx-auto">
      <details className="mb-4 rounded-lg border border-gray-300 dark:border-gray-700 p-4">
        <summary className="font-semibold cursor-pointer">What is your return policy?</summary>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">You can return items within 30 days of purchase.</p>
      </details>
      <details className="rounded-lg border border-gray-300 dark:border-gray-700 p-4">
        <summary className="font-semibold cursor-pointer">How long does shipping take?</summary>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Shipping typically takes 3-7 business days.</p>
      </details>
    </div>
  )
}
,
{
  id: 'glass-card',
  name: 'Glassmorphism Card',
  description: 'A modern card with a frosted glass effect using backdrop blur.',
  category: 'cards',
  code: `<div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl text-white max-w-sm mx-auto">
  <h3 className="text-xl font-bold mb-2">Frosted Glass Card</h3>
  <p className="text-sm text-white/80">A sleek design trend using transparency and blur.</p>
</div>`,
  preview: (
    <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl text-white max-w-sm mx-auto">
      <h3 className="text-xl font-bold mb-2">Frosted Glass Card</h3>
      <p className="text-sm text-white/80">A sleek design trend using transparency and blur.</p>
    </div>
  )
}
,



{
  id: 'typing-badge',
  name: 'Typing Badge',
  description: 'A pulsing badge indicating someone is typing.',
  category: 'feedback',
  code: `<span className="flex items-center space-x-1 text-xs text-green-600">
  <span className="animate-pulse">●</span>
  <span>Typing...</span>
</span>`,
  preview: (
    <span className="flex items-center space-x-1 text-xs text-green-600">
      <span className="animate-pulse">●</span>
      <span>Typing...</span>
    </span>
  )
}

,
{
  id: 'hero-gradient-title',
  name: 'Hero Title with Gradient Emphasis',
  description: 'A bold hero heading with gradient highlight to draw attention to key text.',
  category: 'typography',
  code: `
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight">
    The Future of <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">Web Interfaces</span> Starts Here
  </h1>
  `,
  preview: (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight">
      The Future of <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">Web Interfaces</span> Starts Here
    </h1>
  )
}
,
{
  id: 'decorative-quote-block',
  name: 'Quote with Accent Bar',
  description: 'A beautifully styled blockquote with a vertical bar accent and italicized text.',
  category: 'typography',
  code: `
  <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 text-lg max-w-xl">
    "Design is not just what it looks like and feels like. Design is how it works." 
    <footer className="mt-2 text-sm text-gray-500">– Steve Jobs</footer>
  </blockquote>
  `,
  preview: (
    <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 text-lg max-w-xl">
      "Design is not just what it looks like and feels like. Design is how it works." 
      <footer className="mt-2 text-sm text-gray-500">– Steve Jobs</footer>
    </blockquote>
  )
}
,
{
  id: 'split-motion-title',
  name: 'Split Motion-style Hero Title',
  description: 'A dynamic hero title that splits emphasis between static and action-oriented text.',
  category: 'typography',
  code: `
  <h2 className="text-4xl sm:text-5xl font-bold text-center leading-tight">
    Empower your <span className="inline-block transform rotate-1 bg-yellow-300 px-2">creativity</span> with <span className="text-indigo-600 underline decoration-wavy">design</span>
  </h2>
  `,
  preview: (
    <h2 className="text-4xl sm:text-5xl font-bold text-center leading-tight">
      Empower your <span className="inline-block transform rotate-1 bg-yellow-300 px-2">creativity</span> with <span className="text-indigo-600 underline decoration-wavy">design</span>
    </h2>
  )
}
,
{
  id: 'numbered-feature-title',
  name: 'Numbered Feature Title',
  description: 'Perfect for highlighting steps or features with an aesthetic number badge.',
  category: 'typography',
  code: `
  <div className="flex items-center space-x-4">
    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">1</span>
    <h3 className="text-xl font-semibold text-gray-900">Instant Deployment</h3>
  </div>
  `,
  preview: (
    <div className="flex items-center space-x-4">
      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">1</span>
      <h3 className="text-xl font-semibold text-gray-900">Instant Deployment</h3>
    </div>
  )
},
{
    id: 'vertical-sidebar-nav',
    name: 'Vertical Sidebar Nav',
    description: 'Sidebar navigation with icons for dashboard applications.',
    category: 'navigation',
    code: `
      <aside className="w-64 bg-gray-800 h-screen p-4">
        <ul className="space-y-2">
          {[
            { name: 'Dashboard', icon: 'M3 12h18M3 6h18M3 18h18' },
            { name: 'Profile', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
            { name: 'Settings', icon: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.3-.06.62-.06.94 0 .32.02.64.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.08-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' }
          ].map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    `,
    preview: (
      <aside className="w-64 bg-gray-800 h-screen p-4">
        <ul className="space-y-2">
          {[
            { name: 'Dashboard', icon: 'M3 12h18M3 6h18M3 18h18' },
            { name: 'Profile', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
            { name: 'Settings', icon: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.3-.06.62-.06.94 0 .32.02.64.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.08-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' }
          ].map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    )
  }
,
  {
  id: 'dashboard-grid-layout',
  name: 'Responsive Dashboard Grid',
  description: 'A clean and flexible grid layout for dashboard stats or widgets.',
  category: 'layout',
  code: `
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="p-4 bg-white rounded-lg shadow">1</div>
    <div className="p-4 bg-white rounded-lg shadow">2</div>
    <div className="p-4 bg-white rounded-lg shadow">3</div>
    <div className="p-4 bg-white rounded-lg shadow">4</div>
  </div>
  `,
  preview: (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="p-4 bg-white rounded-lg shadow"> 1</div>
      <div className="p-4 bg-white rounded-lg shadow">2</div>
      <div className="p-4 bg-white rounded-lg shadow">3</div>
      <div className="p-4 bg-white rounded-lg shadow">4</div>
    </div>
  )
},
{
  id: 'scroll-to-top-button',
  name: 'Scroll to Top Button',
  description: 'A floating button that appears after scrolling down and scrolls back to the top smoothly.',
  category: 'navigation',
  code: `
<div>
  <button
    id="scrollTopBtn"
    className="hidden fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    ↑
  </button>
  <script>
    {(() => {
      window.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollTopBtn');
        if (btn) {
          btn.style.display = window.scrollY > 300 ? 'block' : 'none';
        }
      });
    })()}
  </script>
</div>
  `,
  preview: (
    <div>
      <button
        id="scrollTopBtn"
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        style={{ display: 'none' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              window.addEventListener('scroll', () => {
                const btn = document.getElementById('scrollTopBtn');
                if (btn) {
                  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
                }
              });
            })();
          `,
        }}
      />
    </div>
  )
},




];