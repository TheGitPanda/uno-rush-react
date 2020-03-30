export function compareCardValidity(pileCard, attemptingCard) {

  if (attemptingCard.type.startsWith('wild')) {
    return true
  }

  if (attemptingCard.type === 'standard') {
    if (pileCard.color === attemptingCard.color || pileCard.value === attemptingCard.value) {
      return true
    }
  }

  return false
}

export function resetCard(card) {

  if (card.type.startsWith('wild')) {
    card.color = null
  }

  return card
}
