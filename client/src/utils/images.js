const params = "auto=format&fit=crop&q=82";

export const image = (id, width = 1200, height = 900) =>
  `https://images.unsplash.com/${id}?${params}&w=${width}&h=${height}`;

export const images = {
  hero: image("photo-1534438327276-14e5300c3a48", 1800, 1200),
  strength: image("photo-1583454110551-21f2fa2afe61", 900, 700),
  cardio: image("photo-1571019614242-c5c5dee9f50b", 900, 700),
  yoga: image("photo-1599901860904-17e6ed7083a0", 900, 700),
  trainer: image("photo-1571388208497-71bedc66e932", 900, 900),
  equipment: image("photo-1593079831268-3381b0db4a77", 1200, 900),
  interior: image("photo-1558611848-73f7eb4001a1", 1200, 900),
  boxing: image("photo-1549719386-74dfcbf7dbed", 900, 700),
  team: image("photo-1605296867304-46d5465a13f1", 1200, 800),
  recovery: image("photo-1518611012118-696072aa579a", 900, 700)
};
