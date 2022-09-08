// p: phosphorus,
export const calculatePral = (protein, p, k, mg, ca) =>
  0.49 * protein + 0.037 * p - 0.021 * k - 0.026 * mg - 0.013 * ca;
