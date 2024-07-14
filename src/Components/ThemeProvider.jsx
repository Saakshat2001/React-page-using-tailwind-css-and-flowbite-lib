import React from 'react'

function ThemeProvider({children}) {
  return (
    <div className='dark'>
        <div className='bg-white text-gray-100 dark:text-white-700 dark:bg-[rgb(16,23,42)]'>
            {children}
        </div>
    </div>
  )
}

export default ThemeProvider