export const formatContractAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const caToBirdeyeUrl = (address: string) => {
  return `https://birdeye.so/token/${address}`;
};
