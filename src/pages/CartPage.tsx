import { Trash2, ArrowRight, ShieldCheck, ShoppingBag, Plus, Minus, ArrowLeft, Lock, CheckCircle2 } from "lucide-react"
import type { ProductItem } from "../components/PurchaseSection"

export interface CartItem {
  product: ProductItem
  quantity: number
}

interface CartPageProps {
  items: CartItem[]
  onUpdateQuantity: (id: string, delta: number) => void
  onRemoveItem: (id: string) => void
  onClearCart: () => void
  onContinueShopping: () => void
}

export function CartPage({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
}: CartPageProps) {
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  const isFreeShipping = subtotal >= 150
  const freeShippingThreshold = Math.max(0, 150 - subtotal)
  const freeShippingPercent = Math.min(100, Math.round((subtotal / 150) * 100))
  const shippingCost = isFreeShipping ? 0 : 9.95
  const totalDue = subtotal + (items.length > 0 ? shippingCost : 0)

  return (
    <div className="w-full max-w-2xl mx-auto px-4 space-y-4 pt-2 pb-12 font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
        <button
          onClick={onContinueShopping}
          className="hover:text-foreground transition-colors cursor-pointer"
        >
          Shop
        </button>
        <span>/</span>
        <span className="text-foreground font-semibold">Shopping Cart</span>
      </nav>

      {/* Cart Page Title Header */}
      <div className="flex items-center justify-between py-1">
        <div className="space-y-0.5">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
            Your Rations Cart
          </h1>
          <p className="text-xs text-muted-foreground font-medium">
            {totalCount} {totalCount === 1 ? "canister" : "canisters"} selected for emergency reserve
          </p>
        </div>

        {items.length > 0 && (
          <button
            onClick={onClearCart}
            className="text-xs font-semibold text-muted-foreground hover:text-destructive active:scale-95 transition-colors cursor-pointer"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Free Shipping Progress Meter */}
      <div className="rounded-2xl bg-secondary border border-border p-3.5 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          {isFreeShipping ? (
            <span className="flex items-center gap-1.5 text-accent font-bold">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Free Priority Shipping Unlocked!</span>
            </span>
          ) : (
            <span className="text-foreground">
              Add <strong className="text-destructive font-black">${freeShippingThreshold.toFixed(2)}</strong> more for <strong>Free Priority Shipping</strong> (over $150)
            </span>
          )}
          <span className="text-[11px] font-bold text-muted-foreground">{freeShippingPercent}%</span>
        </div>

        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              isFreeShipping ? "bg-accent" : "bg-destructive"
            }`}
            style={{ width: `${freeShippingPercent}%` }}
          />
        </div>
      </div>

      {/* Empty State or Cart Items List */}
      {items.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-secondary border border-border text-muted-foreground">
            <ShoppingBag className="h-8 w-8 stroke-1" />
          </div>

          <div className="space-y-1">
            <h2 className="font-black text-lg text-foreground">Your cart is currently empty</h2>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
              You haven&apos;t added any Survival Tabs canisters yet. Choose from our 5 disaster-ready flavors to begin building your emergency ration supply.
            </p>
          </div>

          <button
            onClick={onContinueShopping}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-destructive hover:bg-destructive/90 text-destructive-foreground font-black py-3 px-6 text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Rations Catalog</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Item Cards */}
          <div className="space-y-2.5">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-border bg-card shadow-xs transition-all"
              >
                {/* Product Image & Details */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-16 w-16 shrink-0 rounded-xl bg-secondary border border-border p-1.5 flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 space-y-0.5">
                    <h3 className="font-bold text-xs sm:text-sm text-foreground leading-tight truncate">
                      {item.product.name}
                    </h3>
                    <span className="text-[11px] text-muted-foreground font-medium block">
                      {item.product.flavor} &bull; 15-Day Canister
                    </span>
                    <span className="text-xs font-black text-destructive block">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Stepper & Total */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="font-black text-sm text-foreground">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>

                  <div className="flex items-center gap-1 bg-secondary border border-border rounded-xl p-0.5 shadow-xs">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-background text-foreground active:scale-90 transition-all cursor-pointer"
                      title="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-xs font-bold px-1.5 min-w-[22px] text-center text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-background text-foreground active:scale-90 transition-all cursor-pointer"
                      title="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="h-7 w-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-90 transition-all cursor-pointer ml-1"
                      title="Remove item"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Card */}
          <div className="rounded-3xl border border-border bg-card p-5 space-y-4 shadow-xs">
            <h2 className="text-sm font-black uppercase tracking-wider text-foreground border-b border-border pb-2.5">
              Order Summary
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({totalCount} {totalCount === 1 ? "unit" : "units"})</span>
                <span className="font-bold text-foreground">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-muted-foreground">
                <span>Estimated Priority Shipping</span>
                <span className={`font-semibold ${isFreeShipping ? "text-accent font-bold" : "text-foreground"}`}>
                  {isFreeShipping ? "FREE (Orders over $150)" : "$9.95"}
                </span>
              </div>

              <div className="flex justify-between text-muted-foreground">
                <span>Certified Shelf Life</span>
                <span className="font-semibold text-accent flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>25 Years Nitrogen-Sealed</span>
                </span>
              </div>

              <div className="flex justify-between items-baseline text-base font-black text-foreground pt-2.5 border-t border-border">
                <span>Total Due</span>
                <span className="text-destructive text-lg font-black">
                  ${totalDue.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Action CTA */}
            <div className="pt-1 space-y-2.5">
              <button
                onClick={() => {
                  alert(`Proceeding to secure checkout with $${totalDue.toFixed(2)} in Survival Tabs rations.`)
                }}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-destructive hover:bg-destructive/90 text-destructive-foreground font-black py-3.5 px-6 uppercase tracking-wider text-xs shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Lock className="h-4 w-4" />
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onContinueShopping}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Continue Shopping</span>
              </button>
            </div>

            {/* Security Guarantee Strip */}
            <div className="pt-2 border-t border-border flex flex-wrap items-center justify-around gap-2 text-[10px] text-muted-foreground font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>256-Bit SSL Encryption</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5 text-accent" />
                <span>Authorize.Net Verified</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                <span>100% Made in USA</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
