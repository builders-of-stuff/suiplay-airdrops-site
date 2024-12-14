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
    x: 'https://x.com/fudthepug',
    birdeyeLink:
      'https://www.birdeye.so/token/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD?chain=sui',
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    isConfirmed: true,
    estimatedAmount: ''
  },
  {
    name: 'Aftermath',
    icon: Aftermath,
    website: 'https://aftermath.finance/',
    x: 'https://x.com/AftermathFi',
    birdeyeLink:
      'https://www.birdeye.so/token/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD?chain=sui',
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    isConfirmed: true,
    estimatedAmount: ''
  },
  {
    name: 'Scallop',
    icon: Scallop,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://www.scallop.io/',
    x: 'https://x.com/Scallop_io',
    birdeyeLink:
      'https://www.birdeye.so/token/0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA?chain=sui',
    isConfirmed: true,
    estimatedAmount: ''
  },
  {
    name: 'Hippo',
    icon: Hippo,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://x.com/SUDENG_HIPPO',
    x: 'https://x.com/SUDENG_HIPPO',
    birdeyeLink:
      'https://www.birdeye.so/token/0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b::sudeng::SUDENG?chain=sui',
    isConfirmed: true,
    estimatedAmount: ''
  },
  {
    name: 'Panzerdogs',
    icon: Panzerdogs,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://home.panzerdogs.io/',
    x: 'https://x.com/panzerdogs',
    birdeyeLink: '',
    isConfirmed: true,
    estimatedAmount: ''
  },
  {
    name: 'Pebble',
    icon: Pebble,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://www.pebblestream.io/',
    x: '',
    birdeyeLink: '',
    isConfirmed: true,
    estimatedAmount: ''
  }
];
