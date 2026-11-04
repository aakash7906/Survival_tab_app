import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Plus, Minus } from "lucide-react"
import type { ProductItem } from "./PurchaseSection"

export interface CartItem {
  product: ProductItem
  quantity: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (id: string) => void
  onClear: () => void
  onUpdateQuantity?: (id: string, delta: number) => void
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onClear,
  onUpdateQuantity,
}: CartDrawerProps) {
  if (!isOpen) return null

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  const isFreeShipping = subtotal >= 150
  const freeShippingThreshold = Math.max(0, 150 - subtotal)
  const freeShippingPercent = Math.min(100, Math.round((subtotal / 150) * 100))

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm animate-fade-in-up">
      {/* Tap backdrop to dismiss */}
      <div className="flex-1 w-full" onClick={onClose} />

      {/* iOS Bottom Sheet Container */}
      <div className="relative w-full max-w-xl mx-auto bg-card rounded-t-[32px] border-t border-border shadow-2xl flex flex-col max-h-[88vh] overflow-hidden animate-fade-in-up">
        
        {/* Drag Indicator Pill */}
        <div className="w-full flex justify-center pt-3 pb-1 shrink-0 cursor-grab" onClick={onClose}>
          <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-black text-base text-primary uppercase tracking-tight">Your Rations Cart</h3>
              <p className="text-[11px] text-muted-foreground font-medium">
                {totalCount} {totalCount === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-primary active:scale-95 transition-all cursor-pointer"
            aria-label="Close Cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-amber-50/80 px-5 py-3 border-b border-amber-200/70 text-xs text-amber-950 shrink-0 space-y-1.5">
          <div className="flex items-center justify-between font-semibold">
            {isFreeShipping ? (
              <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Free Priority Shipping Unlocked!</span>
              </span>
            ) : (
              <span>
                Add <strong className="text-red-700">${freeShippingThreshold.toFixed(2)}</strong> more for <strong>Free Shipping</strong> (over $150)
              </span>
            )}
            <span className="text-[11px] font-bold text-amber-900">{freeShippingPercent}%</span>
          </div>

          <div className="w-full h-1.5 bg-amber-200/80 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isFreeShipping ? "bg-emerald-600" : "bg-red-600"
              }`}
              style={{ width: `${freeShippingPercent}%` }}
            />
          </div>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 overscroll-contain">
          {items.length === 0 ? (
            <div className="py-14 text-center text-muted-foreground space-y-3">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-secondary border border-border text-muted-foreground/60">
                <ShoppingBag className="h-8 w-8 stroke-1" />
              </div>
              <div className="space-y-1">
                <div className="font-bold text-primary text-base">Your cart is empty</div>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Select a flavor from the Shop tab to pack your emergency rations canister.
                </p>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-border bg-secondary/60 hover:bg-secondary transition-all"
              >
                {/* Product Image & Details */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-card border border-border p-1 flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-primary leading-tight truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-[11px] text-muted-foreground font-medium block">
                      {item.product.flavor}
                    </span>
                    <span className="text-xs font-black text-red-600 block mt-0.5">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Right: Quantity Stepper & Price */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="font-black text-xs sm:text-sm text-primary">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>

                  <div className="flex items-center gap-1 bg-card border border-border rounded-xl p-0.5 shadow-xs">
                    {onUpdateQuantity ? (
                      <>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="h-6 w-6 flex items-center justify-center rounded-lg hover:bg-secondary text-primary active:scale-90 cursor-pointer"
                          title="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-bold px-1.5 min-w-[20px] text-center text-primary">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="h-6 w-6 flex items-center justify-center rounded-lg hover:bg-secondary text-primary active:scale-90 cursor-pointer"
                          title="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </>
                    ) : (
                      <span className="text-xs font-bold px-2 text-primary">
                        Qty: {item.quantity}
                      </span>
                    )}

                    <button
                      onClick={() => onRemove(item.product.id)}
                      className="h-6 w-6 flex items-center justify-center rounded-lg text-muted-foreground hover:text-red-600 hover:bg-red-50 active:scale-90 cursor-pointer ml-0.5"
                      title="Remove item"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Tray: Subtotal, Shipping & Action CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-border bg-card space-y-3 shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-bold text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-emerald-700">
                  {isFreeShipping ? "FREE (Priority)" : "$9.95"}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-black text-primary pt-1.5 border-t border-border">
                <span>Total Due</span>
                <span className="text-red-600">
                  ${(subtotal + (isFreeShipping ? 0 : 9.95)).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Proceeding to secure checkout with $${(subtotal + (isFreeShipping ? 0 : 9.95)).toFixed(2)} in Survival Tabs rations.`)
              }}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black py-3.5 px-6 uppercase tracking-wider text-xs shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={onClear}
              className="w-full text-center text-[11px] font-semibold text-muted-foreground hover:text-red-600 active:scale-95 transition-colors cursor-pointer py-1"
            >
              Clear Entire Cart
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default CartDrawer
