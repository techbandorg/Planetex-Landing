import { getTokenSaleContract } from './contracts';

export const getRoundEndTime = async () => {
  const chainId = 97
  const contract = await getTokenSaleContract(chainId)
  return await contract.methods.getRoundEndTime(0).call()
};

export const getRoundAmounts = async (chainId: number ) => {
  const contract = await getTokenSaleContract(chainId)
  const { totalPurchaseAmount, tokensSold } = await contract.methods.rounds(0).call()
  return { totalPurchaseAmount, tokensSold }
}

export const getFormattedRoundAmounts = async () => {
  const { totalPurchaseAmount: usdtTotalPurchaseAmount, tokensSold: usdtTokensSold } = await getRoundAmounts(5)
  const { totalPurchaseAmount, tokensSold } = await getRoundAmounts(97)

  function findSum(first: string, second: string) {
    let sum = '';
    let carry = 0;
    const diff = second.length - first.length;
    for (let i = first.length - 1; i >= 0; i--) {
      const temp =
        (Number(first.charAt(i)) % 10) +
        (Number(second.charAt(i + diff)) % 10) +
        carry;
      if (temp >= 10) {
        sum = (temp % 10) + sum;
        carry = Math.floor(temp / 10);
      } else {
        sum = temp + sum;
        carry = 0;
      }
    }
    if (carry) {
      sum = carry + sum;
    }
    return sum;
  }

  const totalAmount = (+findSum(totalPurchaseAmount, usdtTotalPurchaseAmount) / 10 ** 18)
  const totalSold = (+findSum(usdtTokensSold, tokensSold) / 10 ** 18)
};

