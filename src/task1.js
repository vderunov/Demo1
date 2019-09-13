export default function showChessBoard(length, width, symbol) {
  const light = ` ${symbol}`;
  const dark = `${symbol} `;

  return `${light.repeat(length / 2)}\n${dark.repeat(width / 2)}\n`.repeat(width / 2);
}
