import { ConfirmationModal } from "./ConfirmationModal"

export const PaymentSuccessModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  return (
    <ConfirmationModal
      open={open}
      onOpenChange={onOpenChange}
      title="Paiement réussi"
      description="Votre paiement a été traité avec succès. Merci pour votre achat !"
    />
  )
}
