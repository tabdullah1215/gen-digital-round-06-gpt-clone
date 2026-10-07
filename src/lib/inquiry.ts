export type InquiryInput = {
  productSlug: string;
  email: string;
  question: string;
};

export type InquiryReceipt = {
  reference: string;
};

/** Local stand-in for the support request endpoint used by the interview ticket. */
export async function submitProductInquiry(input: InquiryInput): Promise<InquiryReceipt> {
  await new Promise((resolve) => setTimeout(resolve, 80));
  if (input.email === 'unavailable@example.com') throw new Error('Inquiry service unavailable');
  const key = input.productSlug.toUpperCase().replace(/[^A-Z0-9]+/g, '-');
  return { reference: `Q-${key}-001` };
}
