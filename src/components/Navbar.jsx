import React from 'react';

function Navbar({
  cartCount,
  onOpenCart,
  searchTerm,
  setSearchTerm,
  searchFound,
}) {
  return (
    <nav className='bg-white shadow sticky top-0 z-10'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='text-2xl font-extrabold text-blue-600 font-mono'>
            Apple Kingdom
          </div>
        </div>

        <div className='flex items-center gap-3 relative'>
          <input
            placeholder='Search your Products'
            className='sm:block border rounded-lg px-3 py-2 w-72 focus:outline-none focus:ring-1 focus:ring-blue-50'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchFound.length > 0 && (
            <div className='absolute top-full left-0 bg-white shadow rounded w-72 max-h-60 overflow-y-auto z-50'>
              <ul>
                {searchFound.map((item) => (
                  <li
                    key={item.id}
                    className='px-2 py-1 hover:bg-gray-100 cursor-pointer'
                    onClick={() => console.log('Selected:', item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={onOpenCart}
            className='relative bg-blue-600 text-white px-4 py-2 rounded-lg shadow  transition hover:bg-blue-500'
          >
            &#128722;
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2'>
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
