import { ConfirmationModal } from "./ConfirmationModal"

export const AddToCartModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  return (
    <ConfirmationModal
      open={open}
      onOpenChange={onOpenChange}
      title="Produit ajouté"
      description="Le produit a été ajouté à votre panier avec succès."
    />
  )
}
