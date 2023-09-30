

import React from 'react'

const Input = ({
    type = 'text',
    errors,
    required,
    register,
    id,
    disabled,
    label,
    icon: Icon
}) => {
  return (
    <div className="w-full relative">
           
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder="   "
                type={type}
                className={`
        peer
        w-full
        px-4
        py-2
     
        font-light 
        bg-white 
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        pl-4
        ${errors[id] ? 'border-rose-500' : 'border-slate-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-slate-600'}
      `}
            />
            <label
                className={`
        absolute 
        
        duration-150 
        transform 
        top-1/2
        left-4
        
        origin-[0] 
        pointer-events-none
        invisible
        peer-placeholder-shown:visible
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:-translate-y-1/2 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        isolate

        `}
            >
                {label}
              
            </label>
            {Icon && <span className='text-neutral-400 absolute right-4 top-[50%] -translate-y-[50%]'>
              {Icon}
            </span>}
        </div>
  )
}

export default Input

