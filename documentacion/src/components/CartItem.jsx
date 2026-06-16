import React from 'react'

export default function CartItem({ item, index, onChangeQuantity, onRemove }) {
  return (
    <div className="flex gap-4 items-center">
      <div
        className="w-16 h-16 bg-neutral-50 rounded-md overflow-hidden"
        dangerouslySetInnerHTML={{ __html: item.svg || item.customSvg }}
      />
      <div className="flex-grow">
        <div className="font-bold text-sm">{item.name}</div>
        <div className="text-xs text-neutral-500">${item.price.toFixed(2)}</div>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => onChangeQuantity(index, -1)} className="px-2">-</button>
          <span className="font-black">{item.quantity}</span>
          <button onClick={() => onChangeQuantity(index, 1)} className="px-2">+</button>
          <button onClick={() => onRemove(index)} className="ml-4 text-red-500 text-sm">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
