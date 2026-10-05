// Turns "Reliable [Sea Freight] Shipping" into html with the [part] in orange
export function highlight(text: string) {
  return text.replace(/\[(.*?)\]/g, '<span class="text-brand">$1</span>');
}
