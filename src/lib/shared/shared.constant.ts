import Hippo from '$lib/assets/hippo.png';
import Panzerdogs from '$lib/assets/panzerdogs.png';
import FUD from '$lib/assets/fud.png';
import Aftermath from '$lib/assets/aftermath.webp';
import Scallop from '$lib/assets/scallop.png';
import Pebble from '$lib/assets/pebble.svg';
import Lemon from '$lib/assets/lemon.png';
import Pugwifhat from '$lib/assets/pugwifhat.webp';

export const SUIPLAY_URL = `https://www.suiplay0x1.com/`;

export const TREASURY_WALLET_URL = `https://suivision.xyz/account/@suiplayrewards`;

export const AIRDROPS = [
  {
    name: 'Fud',
    icon: FUD,
    website: 'https://fudthepug.com/',
    x: 'https://x.com/fudthepug',
    birdeyeLink:
      'https://www.birdeye.so/token/0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD?chain=sui',
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    isOfficial: true,
    estimatedAmount: ''
  },
  {
    name: 'Aftermath',
    icon: Aftermath,
    website: 'https://aftermath.finance/',
    x: 'https://x.com/AftermathFi',
    birdeyeLink: '',
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    isOfficial: true,
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
    isOfficial: true,
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
    isOfficial: true,
    estimatedAmount: ''
  },
  {
    name: 'Panzerdogs',
    icon: Panzerdogs,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://home.panzerdogs.io/',
    x: 'https://x.com/panzerdogs',
    birdeyeLink: '',
    isOfficial: true,
    estimatedAmount: ''
  },
  {
    name: 'Pebble',
    icon: Pebble,
    confirmationSource: 'https://www.suiplay0x1.com/rewards',
    website: 'https://www.pebblestream.io/',
    x: '',
    birdeyeLink: '',
    isOfficial: true,
    estimatedAmount: ''
  },
  // Community
  {
    name: 'Pugwifhat',
    icon: Pugwifhat,
    confirmationSource: TREASURY_WALLET_URL,
    website: 'https://pugwifsui.com/',
    x: 'https://x.com/SuiPugwif',
    birdeyeLink:
      'https://www.birdeye.so/token/0x2cd6f14a4b64c3a0fa9c644e8ed88d9c91d789a071886d67d24e6b435147063d::pugwif::PUGWIF?chain=sui',
    isOfficial: false,
    isCommunity: true,
    estimatedAmount: ''
  },
  {
    name: 'Lemon',
    icon: Lemon,
    confirmationSource: TREASURY_WALLET_URL,
    website: 'https://lemonsofsui.com/',
    x: 'https://x.com/LemonsOfSui',
    birdeyeLink:
      'https://www.birdeye.so/token/0xb6618debe65795bf0ecd5373eec3ab74d38e26742c1b0817c8b00896d2cb7150::lemon::LEMON?chain=sui',
    isOfficial: false,
    isCommunity: true,
    estimatedAmount: ''
  }
];
