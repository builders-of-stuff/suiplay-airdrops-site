import Hippo from '$lib/assets/hippo.png';
import Panzerdogs from '$lib/assets/panzerdogs.png';
import FUD from '$lib/assets/fud.png';
import Aftermath from '$lib/assets/aftermath.webp';
import Scallop from '$lib/assets/scallop.png';
import Pebble from '$lib/assets/pebble.svg';

export const SUIPLAY_URL = `https://www.suiplay0x1.com/`;

export const AIRDROPS = [
  {
    name: 'FUD',
    icon: FUD,
    website: 'https://fudthepug.com/',
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    contractAddress:
      '0x5fbad0d3ba9a2fcc7beed9dd3863c75ebda27e7c419fd88d31d4541ed7cb9b57::fud::FUD',
    isConfirmed: true,
    estimatedAmount: '1%'
  },
  {
    name: 'Aftermath',
    icon: Aftermath,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://aftermath.finance/',
    contractAddress: '0x1234...5678',
    isConfirmed: true,
    estimatedAmount: '1%'
  },
  {
    name: 'Scallop',
    icon: Scallop,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://www.scallop.io/',
    contractAddress: '0x1234...5678',
    isConfirmed: true,
    estimatedAmount: '1%'
  },
  {
    name: 'Hippo',
    icon: Hippo,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://x.com/SUDENG_HIPPO',
    contractAddress: '0x1234...5678',
    isConfirmed: true,
    estimatedAmount: '1%'
  },
  {
    name: 'Panzerdogs',
    icon: Panzerdogs,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://home.panzerdogs.io/',
    contractAddress: '0x1234...5678',
    isConfirmed: true,
    estimatedAmount: '1%'
  },
  {
    name: 'Pebble',
    icon: Pebble,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://www.pebblestream.io/',
    contractAddress: '0x1234...5678',
    isConfirmed: true,
    estimatedAmount: '1%'
  }
];
