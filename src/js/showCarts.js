export default function showCarts(unit) {
  const { special } = unit;
  const carts = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'not available yet',
    } = element;
    carts.push({
      id,
      name,
      icon,
      description,
    });
  });
  return carts;
}
