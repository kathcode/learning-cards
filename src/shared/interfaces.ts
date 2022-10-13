
export interface CardState {
  cards: CardInfo[]
}

export interface CardInfo {
  id: string,
  title: string,
  description: string,
  category: string
}