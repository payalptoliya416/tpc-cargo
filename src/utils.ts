// Turns "Reliable [Sea Freight] Shipping" into html with the [part] in orange
export function highlight(text: string) {
  return text.replace(/\[(.*?)\]/g, '<span class="text-[#FE7E01]">$1</span>');
}
