const envelope = function analyzeEnvelopes(envelopeA, envelopeB) {
  const perimeterA = (+envelopeA.width + +envelopeA.height) * 2;
  const perimeterB = (+envelopeB.width + +envelopeB.height) * 2;
  const bigger = perimeterA > perimeterB ? 1 : 2;

  const calc =
    (2 * envelopeB.width * envelopeB.height * envelopeA.width +
      (envelopeB.width ** 2 - envelopeB.height ** 2) *
        Math.sqrt(
          envelopeB.width ** 2 + envelopeB.height ** 2 - envelopeA.width ** 2,
        )) /
    (envelopeB.width ** 2 + envelopeB.height ** 2);

  if (
    (envelopeB.width < envelopeA.width &&
      envelopeB.height < envelopeA.height) ||
    (envelopeB.width > envelopeA.width && envelopeA.height >= calc)
  ) {
    return bigger;
  }

  return 0;
};

export default envelope;
