import React from 'react';

const CLIENTS = [
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/client01.svg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/client02.svg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/client03.svg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/client04.svg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/client05.svg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/client06.svg',
];

export default function Clients() {
  return (
    <section className="py-[71px] bg-[#F4F4F4] border-t border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {CLIENTS.map((url, idx) => (
            <div key={idx} className="p-3 transition-all duration-300">
              <img
                src={url}
                alt={`Client ${idx + 1}`}
                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
