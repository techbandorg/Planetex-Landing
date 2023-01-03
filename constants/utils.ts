import { getTokenSaleContract } from './contracts';

export const getRoundEndTime = async () => {
  const chainId = 1;
  const contract = await getTokenSaleContract(chainId);
  return await contract.methods.getRoundEndTime(1).call();
};

export const getRoundAmounts = async (chainId: number) => {
  const contract = await getTokenSaleContract(chainId);
  const { totalPurchaseAmount, tokensSold } = await contract.methods
    .rounds(1)
    .call();
  return { totalPurchaseAmount, tokensSold };
};

export const getFormattedRoundAmounts = async () => {
  const {
    totalPurchaseAmount: usdtTotalPurchaseAmount,
    tokensSold: usdtTokensSold,
  } = await getRoundAmounts(1);
  const { totalPurchaseAmount, tokensSold } = await getRoundAmounts(56);
  const purchaseSum = (
    BigInt(totalPurchaseAmount) + BigInt(usdtTotalPurchaseAmount)
  ).toString();
  const soldSum = (BigInt(tokensSold) + BigInt(usdtTokensSold)).toString();

  const totalAmount = +purchaseSum / 10 ** 18;
  const totalSold = +soldSum / 10 ** 18;

  return { totalAmount, totalSold };
};
