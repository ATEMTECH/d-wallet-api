exports.OrbsInfo = {
  'address': {
    'delegate': '0xb97178870f39d4389210086e4bcaccacd715c71d',
    'approve': '0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa',
    'stake': '0x01d59af68e2dcb44e04c50e05f62e7043f2656c3',
    'claim': '0xb5303c22396333d9d27dc45bdcc8e7fc502b4b32',
  },
  'ABI': {
    'delegate': [
      {
      'inputs': [
        {
        'internalType': 'contract IContractRegistry',
        'name': '_contractRegistry',
        'type': 'address',
      },
        {
        'internalType': 'address',
        'name': '_registryAdmin',
        'type': 'address',
      }
      ],
      'stateMutability': 'nonpayable',
      'type': 'constructor',
    },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': false,
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'ContractRegistryAddressUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'from',
          'type': 'address',
        },
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'to',
          'type': 'address',
        }
        ],
        'name': 'Delegated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'selfDelegatedStake',
          'type': 'uint256',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'delegatedStake',
          'type': 'uint256',
        },
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'delegator',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'delegatorContributedStake',
          'type': 'uint256',
        }
        ],
        'name': 'DelegatedStakeChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'from',
          'type': 'address',
        },
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'to',
          'type': 'address',
        }
        ],
        'name': 'DelegationInitialized',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': false,
          'internalType': 'address[]',
          'name': 'from',
          'type': 'address[]',
        },
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'to',
          'type': 'address',
        }
        ],
        'name': 'DelegationsImported',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'InitializationComplete',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'Locked',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'previousRegistryAdmin',
          'type': 'address',
        },
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'newRegistryAdmin',
          'type': 'address',
        }
        ],
        'name': 'RegistryManagementTransferred',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'Unlocked',
        'type': 'event',
      },
      {
        'inputs': [],
        'name': 'VOID_ADDR',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'claimRegistryManagement',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'to',
          'type': 'address',
        }],
        'name': 'delegate',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getContractRegistry',
        'outputs': [{
          'internalType': 'contract IContractRegistry',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'getDelegatedStake',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'getDelegation',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'getDelegationInfo',
        'outputs': [
          {
          'internalType': 'address',
          'name': 'delegation',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': 'delegatorStake',
          'type': 'uint256',
        }
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getTotalDelegatedStake',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address[]',
          'name': 'from',
          'type': 'address[]',
        },
          {
          'internalType': 'address',
          'name': 'to',
          'type': 'address',
        }
        ],
        'name': 'importDelegations',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address',
          'name': 'from',
          'type': 'address',
        },
          {
          'internalType': 'address',
          'name': 'to',
          'type': 'address',
        }
        ],
        'name': 'initDelegation',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'initializationAdmin',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'initializationComplete',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'isInitializationComplete',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'isLocked',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'isRegistryAdmin',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'lock',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'locked',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'pendingRegistryAdmin',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'refreshContracts',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'refreshStake',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address[]',
          'name': 'addrs',
          'type': 'address[]',
        }],
        'name': 'refreshStakeBatch',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'registryAdmin',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'renounceRegistryManagement',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'contract IContractRegistry',
          'name': 'newContractRegistry',
          'type': 'address',
        }],
        'name': 'setContractRegistry',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': '_registryAdmin',
          'type': 'address',
        }],
        'name': 'setRegistryAdmin',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address',
          'name': '_stakeOwner',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        },
          {
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        },
          {
          'internalType': 'uint256',
          'name': '_updatedStake',
          'type': 'uint256',
        }
        ],
        'name': 'stakeChange',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address[]',
          'name': '_stakeOwners',
          'type': 'address[]',
        },
          {
          'internalType': 'uint256[]',
          'name': '_amounts',
          'type': 'uint256[]',
        },
          {
          'internalType': 'bool[]',
          'name': '_signs',
          'type': 'bool[]',
        },
          {
          'internalType': 'uint256[]',
          'name': '_updatedStakes',
          'type': 'uint256[]',
        }
        ],
        'name': 'stakeChangeBatch',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address',
          'name': '_stakeOwner',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': '_amount',
          'type': 'uint256',
        }
        ],
        'name': 'stakeMigration',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'name': 'stakeOwnersData',
        'outputs': [
          {
          'internalType': 'address',
          'name': 'delegation',
          'type': 'address',
        },
          {
          'internalType': 'uint96',
          'name': 'stake',
          'type': 'uint96',
        }
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'newRegistryAdmin',
          'type': 'address',
        }],
        'name': 'transferRegistryManagement',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'name': 'uncappedDelegatedStake',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'unlock',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
    ],
    'approve': [
      {
      'constant': true,
      'inputs': [],
      'name': 'name',
      'outputs': [{
        'name': '',
        'type': 'string',
      }],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function',
    },
      {
        'constant': false,
        'inputs': [
          {
          'name': '_spender',
          'type': 'address',
        },
          {
            'name': '_value',
            'type': 'uint256',
          },
        ],
        'name': 'approve',
        'outputs': [{
          'name': '',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'name': 'token',
          'type': 'address',
        }],
        'name': 'reclaimToken',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'totalSupply',
        'outputs': [{
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'name': '_from',
          'type': 'address',
        },
          {
          'name': '_to',
          'type': 'address',
        },
          {
          'name': '_value',
          'type': 'uint256',
        }
        ],
        'name': 'transferFrom',
        'outputs': [{
          'name': '',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'name': 'contractAddr',
          'type': 'address',
        }],
        'name': 'reclaimContract',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'decimals',
        'outputs': [{
          'name': '',
          'type': 'uint8',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'name': '_spender',
          'type': 'address',
        },
          {
          'name': '_subtractedValue',
          'type': 'uint256',
        }
        ],
        'name': 'decreaseApproval',
        'outputs': [{
          'name': '',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [{
          'name': '_owner',
          'type': 'address',
        }],
        'name': 'balanceOf',
        'outputs': [{
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [{
          'name': '',
          'type': 'address',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'TOTAL_SUPPLY',
        'outputs': [{
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'symbol',
        'outputs': [{
          'name': '',
          'type': 'string',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'name': '_to',
          'type': 'address',
        },
          {
          'name': '_value',
          'type': 'uint256',
        }
        ],
        'name': 'transfer',
        'outputs': [{
          'name': '',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'name': 'from_',
          'type': 'address',
        },
          {
          'name': 'value_',
          'type': 'uint256',
        },
          {
          'name': 'data_',
          'type': 'bytes',
        }
        ],
        'name': 'tokenFallback',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'name': '_spender',
          'type': 'address',
        },
          {
          'name': '_addedValue',
          'type': 'uint256',
        }
        ],
        'name': 'increaseApproval',
        'outputs': [{
          'name': '',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [
          {
          'name': '_owner',
          'type': 'address',
        },
          {
          'name': '_spender',
          'type': 'address',
        }
        ],
        'name': 'allowance',
        'outputs': [{
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'name': 'newOwner',
          'type': 'address',
        }],
        'name': 'transferOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'name': '_distributor',
          'type': 'address',
        }],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'name': 'owner',
          'type': 'address',
        },
          {
          'indexed': true,
          'name': 'spender',
          'type': 'address',
        },
          {
          'indexed': false,
          'name': 'value',
          'type': 'uint256',
        }
        ],
        'name': 'Approval',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'name': 'from',
          'type': 'address',
        },
          {
          'indexed': true,
          'name': 'to',
          'type': 'address',
        },
          {
          'indexed': false,
          'name': 'value',
          'type': 'uint256',
        }
        ],
        'name': 'Transfer',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'name': 'previousOwner',
          'type': 'address',
        },
          {
          'indexed': true,
          'name': 'newOwner',
          'type': 'address',
        }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
      },
    ],
    'stake': [
      {
      'inputs': [
        {
        'internalType': 'uint256',
        'name': '_cooldownPeriodInSec',
        'type': 'uint256',
      },
        {
        'internalType': 'address',
        'name': '_migrationManager',
        'type': 'address',
      },
        {
        'internalType': 'address',
        'name': '_emergencyManager',
        'type': 'address',
      },
        {
        'internalType': 'contract IERC20',
        'name': '_token',
        'type': 'address',
      }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor',
    },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'stakeOwner',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'totalStakedAmount',
          'type': 'uint256',
        }
        ],
        'name': 'AcceptedMigration',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': true,
          'internalType': 'address',
          'name': 'emergencyManager',
          'type': 'address',
        }],
        'name': 'EmergencyManagerUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'stakeOwner',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'totalStakedAmount',
          'type': 'uint256',
        }

        ],
        'name': 'MigratedStake',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': true,
          'internalType': 'contract IMigratableStakingContract',
          'name': 'stakingContract',
          'type': 'address',
        }],
        'name': 'MigrationDestinationAdded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': true,
          'internalType': 'contract IMigratableStakingContract',
          'name': 'stakingContract',
          'type': 'address',
        }],
        'name': 'MigrationDestinationRemoved',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': true,
          'internalType': 'address',
          'name': 'migrationManager',
          'type': 'address',
        }],
        'name': 'MigrationManagerUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'ReleasedAllStakes',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'stakeOwner',
          'type': 'address',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'totalStakedAmount',
            'type': 'uint256',
          },
        ],
        'name': 'Restaked',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': true,
          'internalType': 'contract IStakeChangeNotifier',
          'name': 'notifier',
          'type': 'address',
        }],
        'name': 'StakeChangeNotifierUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'stakeOwner',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'totalStakedAmount',
          'type': 'uint256',
        }
        ],
        'name': 'Staked',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'StoppedAcceptingNewStake',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'stakeOwner',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'totalStakedAmount',
          'type': 'uint256',
        }
        ],
        'name': 'Unstaked',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'stakeOwner',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'amount',
          'type': 'uint256',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'totalStakedAmount',
          'type': 'uint256',
        }
        ],
        'name': 'Withdrew',
        'type': 'event',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'MAX_APPROVED_STAKING_CONTRACTS',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'VERSION',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'internalType': 'address',
          'name': '_stakeOwner',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': '_amount',
          'type': 'uint256',
        }
        ],
        'name': 'acceptMigration',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'acceptingNewStakes',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'contract IMigratableStakingContract',
          'name': '_newStakingContract',
          'type': 'address',
        }],
        'name': 'addMigrationDestination',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'name': 'approvedStakingContracts',
        'outputs': [{
          'internalType': 'contract IMigratableStakingContract',
          'name': '',
          'type': 'address',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'cooldownPeriodInSec',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'internalType': 'uint256',
          'name': '_totalAmount',
          'type': 'uint256',
        },
          {
          'internalType': 'address[]',
          'name': '_stakeOwners',
          'type': 'address[]',
        },
          {
          'internalType': 'uint256[]',
          'name': '_amounts',
          'type': 'uint256[]',
        }
        ],
        'name': 'distributeRewards',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'emergencyManager',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [{
          'internalType': 'address',
          'name': '_stakeOwner',
          'type': 'address',
        }],
        'name': 'getStakeBalanceOf',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'getToken',
        'outputs': [{
          'internalType': 'contract IERC20',
          'name': '',
          'type': 'address',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'getTotalStakedTokens',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [{
          'internalType': 'address',
          'name': '_stakeOwner',
          'type': 'address',
        }],
        'name': 'getUnstakeStatus',
        'outputs': [
          {
          'internalType': 'uint256',
          'name': 'cooldownAmount',
          'type': 'uint256',
        },
          {
            'internalType': 'uint256',
            'name': 'cooldownEndTime',
            'type': 'uint256',
          },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [{
          'internalType': 'contract IMigratableStakingContract',
          'name': '_stakingContract',
          'type': 'address',
        }],
        'name': 'isApprovedStakingContract',
        'outputs': [{
          'internalType': 'bool',
          'name': 'exists',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [
          {
          'internalType': 'contract IMigratableStakingContract',
          'name': '_newStakingContract',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': '_amount',
          'type': 'uint256',
        }
        ],
        'name': 'migrateStakedTokens',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'migrationManager',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'notifier',
        'outputs': [{
          'internalType': 'contract IStakeChangeNotifier',
          'name': '',
          'type': 'address',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [],
        'name': 'releaseAllStakes',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'releasingAllStakes',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'contract IMigratableStakingContract',
          'name': '_stakingContract',
          'type': 'address',
        }],
        'name': 'removeMigrationDestination',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [],
        'name': 'restake',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'address',
          'name': '_newEmergencyManager',
          'type': 'address',
        }],
        'name': 'setEmergencyManager',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'address',
          'name': '_newMigrationManager',
          'type': 'address',
        }],
        'name': 'setMigrationManager',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'contract IStakeChangeNotifier',
          'name': '_newNotifier',
          'type': 'address',
        }],
        'name': 'setStakeChangeNotifier',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'uint256',
          'name': '_amount',
          'type': 'uint256',
        }],
        'name': 'stake',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [],
        'name': 'stopAcceptingNewStakes',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'uint256',
          'name': '_amount',
          'type': 'uint256',
        }],
        'name': 'unstake',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [],
        'name': 'withdraw',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'constant': false,
        'inputs': [{
          'internalType': 'address[]',
          'name': '_stakeOwners',
          'type': 'address[]',
        }],
        'name': 'withdrawReleasedStakes',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
    ],
    'claim': [
      {
      'inputs': [
        {
        'internalType': 'contract IContractRegistry',
        'name': '_contractRegistry',
        'type': 'address',
      },
        {
          'internalType': 'address',
          'name': '_registryAdmin',
          'type': 'address',
        },
        {
          'internalType': 'contract IERC20',
          'name': '_token',
          'type': 'address',
        },
        {
          'internalType': 'uint32',
          'name': 'annualRateInPercentMille',
          'type': 'uint32',
        },
        {
          'internalType': 'uint96',
          'name': 'annualCap',
          'type': 'uint96',
        },
        {
          'internalType': 'uint32',
          'name': 'defaultDelegatorsStakingRewardsPercentMille',
          'type': 'uint32',
        },
        {
          'internalType': 'uint32',
          'name': 'maxDelegatorsStakingRewardsPercentMille',
          'type': 'uint32',
        },
        {
          'internalType': 'contract IStakingRewards',
          'name': 'previousRewardsContract',
          'type': 'address',
        },
        {
          'internalType': 'address[]',
          'name': 'guardiansToMigrate',
          'type': 'address[]',
        },
      ],
      'stateMutability': 'nonpayable',
      'type': 'constructor',
    },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'annualRateInPercentMille',
          'type': 'uint256',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'annualCap',
            'type': 'uint256',
          },
        ],
        'name': 'AnnualStakingRewardsRateChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': false,
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'ContractRegistryAddressUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': false,
          'internalType': 'uint32',
          'name': 'defaultDelegatorsStakingRewardsPercentMille',
          'type': 'uint32',
        }],
        'name': 'DefaultDelegatorsStakingRewardsChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'delegator',
          'type': 'address',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'totalAwarded',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'guardian',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'delegatorRewardsPerToken',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'delegatorRewardsPerTokenDelta',
            'type': 'uint256',
          },
        ],
        'name': 'DelegatorStakingRewardsAssigned',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': false,
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'address',
          'name': 'token',
          'type': 'address',
        }
        ],
        'name': 'EmergencyWithdrawal',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'guardian',
          'type': 'address',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'delegatorsStakingRewardsPercentMille',
            'type': 'uint256',
          },
        ],
        'name': 'GuardianDelegatorsStakingRewardsPercentMilleUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'guardian',
          'type': 'address',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'totalAwarded',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'delegatorRewardsPerToken',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'delegatorRewardsPerTokenDelta',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'stakingRewardsPerWeight',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'stakingRewardsPerWeightDelta',
            'type': 'uint256',
          },
        ],
        'name': 'GuardianStakingRewardsAssigned',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'InitializationComplete',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'Locked',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': false,
          'internalType': 'uint32',
          'name': 'maxDelegatorsStakingRewardsPercentMille',
          'type': 'uint32',
        }],
        'name': 'MaxDelegatorsStakingRewardsChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'previousRegistryAdmin',
          'type': 'address',
        },
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'newRegistryAdmin',
          'type': 'address',
        }
        ],
        'name': 'RegistryManagementTransferred',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [{
          'indexed': false,
          'internalType': 'uint256',
          'name': 'startTime',
          'type': 'uint256',
        }],
        'name': 'RewardDistributionActivated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'RewardDistributionDeactivated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'allocatedRewards',
          'type': 'uint256',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'stakingRewardsPerWeight',
            'type': 'uint256',
          },
        ],
        'name': 'StakingRewardsAllocated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        },
          {
          'indexed': false,
          'internalType': 'uint256',
          'name': 'guardianStakingRewards',
          'type': 'uint256',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'delegatorStakingRewards',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'toRewardsContract',
            'type': 'address',
          },
        ],
        'name': 'StakingRewardsBalanceMigrated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': false,
          'internalType': 'address',
          'name': 'from',
          'type': 'address',
        },
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'guardianStakingRewards',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'delegatorStakingRewards',
            'type': 'uint256',
          },
        ],
        'name': 'StakingRewardsBalanceMigrationAccepted',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
          'indexed': true,
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'claimedDelegatorRewards',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'claimedGuardianRewards',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'totalClaimedDelegatorRewards',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'totalClaimedGuardianRewards',
            'type': 'uint256',
          },
        ],
        'name': 'StakingRewardsClaimed',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [],
        'name': 'Unlocked',
        'type': 'event',
      },
      {
        'inputs': [
          {
          'internalType': 'address[]',
          'name': 'addrs',
          'type': 'address[]',
        },
          {
            'internalType': 'uint256[]',
            'name': 'migratedGuardianStakingRewards',
            'type': 'uint256[]',
          },
          {
            'internalType': 'uint256[]',
            'name': 'migratedDelegatorStakingRewards',
            'type': 'uint256[]',
          },
          {
            'internalType': 'uint256',
            'name': 'totalAmount',
            'type': 'uint256',
          },
        ],
        'name': 'acceptRewardsBalanceMigration',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'uint256',
          'name': 'startTime',
          'type': 'uint256',
        }],
        'name': 'activateRewardDistribution',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'claimRegistryManagement',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'claimStakingRewards',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address',
          'name': 'guardian',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': 'weight',
          'type': 'uint256',
        },
          {
            'internalType': 'uint256',
            'name': 'totalCommitteeWeight',
            'type': 'uint256',
          },
          {
            'internalType': 'bool',
            'name': 'inCommittee',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': 'inCommitteeAfter',
            'type': 'bool',
          },
        ],
        'name': 'committeeMembershipWillChange',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'deactivateRewardDistribution',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address',
          'name': 'guardian',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': 'guardianDelegatedStake',
          'type': 'uint256',
        },
          {
            'internalType': 'address',
            'name': 'delegator',
            'type': 'address',
          },
          {
            'internalType': 'uint256',
            'name': 'delegatorStake',
            'type': 'uint256',
          },
          {
            'internalType': 'address',
            'name': 'nextGuardian',
            'type': 'address',
          },
          {
            'internalType': 'uint256',
            'name': 'nextGuardianDelegatedStake',
            'type': 'uint256',
          },
        ],
        'name': 'delegationWillChange',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'name': 'delegatorsStakingRewards',
        'outputs': [
          {
          'internalType': 'uint96',
          'name': 'balance',
          'type': 'uint96',
        },
          {
          'internalType': 'uint96',
          'name': 'lastDelegatorRewardsPerToken',
          'type': 'uint96',
        },
          {
            'internalType': 'uint96',
            'name': 'claimed',
            'type': 'uint96',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'erc20',
          'type': 'address',
        }],
        'name': 'emergencyWithdraw',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        },
          {
          'internalType': 'uint256',
          'name': 'duration',
          'type': 'uint256',
        }
        ],
        'name': 'estimateFutureRewards',
        'outputs': [
          {
          'internalType': 'uint256',
          'name': 'estimatedDelegatorStakingRewards',
          'type': 'uint256',
        },
          {
            'internalType': 'uint256',
            'name': 'estimatedGuardianStakingRewards',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getAnnualStakingRewardsCap',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getAnnualStakingRewardsRatePercentMille',
        'outputs': [{
          'internalType': 'uint32',
          'name': '',
          'type': 'uint32',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getContractRegistry',
        'outputs': [{
          'internalType': 'contract IContractRegistry',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getCurrentStakingRewardsRatePercentMille',
        'outputs': [{
          'internalType': 'uint256',
          'name': 'annualRate',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getDefaultDelegatorsStakingRewardsPercentMille',
        'outputs': [{
          'internalType': 'uint32',
          'name': '',
          'type': 'uint32',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'delegator',
          'type': 'address',
        }],
        'name': 'getDelegatorStakingRewardsData',
        'outputs': [
          {
          'internalType': 'uint256',
          'name': 'balance',
          'type': 'uint256',
        },
          {
          'internalType': 'uint256',
          'name': 'claimed',
          'type': 'uint256',
        },
          {
            'internalType': 'address',
            'name': 'guardian',
            'type': 'address',
          },
          {
            'internalType': 'uint256',
            'name': 'lastDelegatorRewardsPerToken',
            'type': 'uint256',
          },
          {
            'internalType': 'uint256',
            'name': 'delegatorRewardsPerTokenDelta',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'guardian',
          'type': 'address',
        }],
        'name': 'getGuardianDelegatorsStakingRewardsPercentMille',
        'outputs': [{
          'internalType': 'uint256',
          'name': 'delegatorRewardsRatioPercentMille',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'guardian',
          'type': 'address',
        }],
        'name': 'getGuardianStakingRewardsData',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': 'balance',
            'type': 'uint256',
          },
          {
            'internalType': 'uint256',
            'name': 'claimed',
            'type': 'uint256',
          },
          {
            'internalType': 'uint256',
            'name': 'delegatorRewardsPerToken',
            'type': 'uint256',
          },
          {
            'internalType': 'uint256',
            'name': 'delegatorRewardsPerTokenDelta',
            'type': 'uint256',
          },
          {
            'internalType': 'uint256',
            'name': 'lastStakingRewardsPerWeight',
            'type': 'uint256',
          },
          {
            'internalType': 'uint256',
            'name': 'stakingRewardsPerWeightDelta',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getMaxDelegatorsStakingRewardsPercentMille',
        'outputs': [{
          'internalType': 'uint32',
          'name': '',
          'type': 'uint32',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getSettings',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': 'annualStakingRewardsCap',
            'type': 'uint256',
          },
          {
            'internalType': 'uint32',
            'name': 'annualStakingRewardsRatePercentMille',
            'type': 'uint32',
          },
          {
            'internalType': 'uint32',
            'name': 'defaultDelegatorsStakingRewardsPercentMille',
            'type': 'uint32',
          },
          {
            'internalType': 'uint32',
            'name': 'maxDelegatorsStakingRewardsPercentMille',
            'type': 'uint32',
          },
          {
            'internalType': 'bool',
            'name': 'rewardAllocationActive',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'addr',
          'type': 'address',
        }],
        'name': 'getStakingRewardsBalance',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': 'delegatorStakingRewardsBalance',
            'type': 'uint256',
          },
          {
            'internalType': 'uint256',
            'name': 'guardianStakingRewardsBalance',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getStakingRewardsState',
        'outputs': [
          {
            'internalType': 'uint96',
            'name': 'stakingRewardsPerWeight',
            'type': 'uint96',
          },
          {
            'internalType': 'uint96',
            'name': 'unclaimedStakingRewards',
            'type': 'uint96',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getStakingRewardsWalletAllocatedTokens',
        'outputs': [{
          'internalType': 'uint256',
          'name': 'allocated',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'name': 'guardiansRewardSettings',
        'outputs': [
          {
            'internalType': 'uint32',
            'name': 'delegatorsStakingRewardsPercentMille',
            'type': 'uint32',
          },
          {
            'internalType': 'bool',
            'name': 'overrideDefault',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'name': 'guardiansStakingRewards',
        'outputs': [
          {
            'internalType': 'uint96',
            'name': 'delegatorRewardsPerToken',
            'type': 'uint96',
          },
          {
            'internalType': 'uint96',
            'name': 'lastStakingRewardsPerWeight',
            'type': 'uint96',
          },
          {
            'internalType': 'uint96',
            'name': 'balance',
            'type': 'uint96',
          },
          {
            'internalType': 'uint96',
            'name': 'claimed',
            'type': 'uint96',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'initializationAdmin',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'initializationComplete',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'isInitializationComplete',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'isLocked',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'isRegistryAdmin',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'isRewardAllocationActive',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'lock',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'locked',
        'outputs': [{
          'internalType': 'bool',
          'name': '',
          'type': 'bool',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address[]',
          'name': 'addrs',
          'type': 'address[]',
        }],
        'name': 'migrateRewardsBalance',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'pendingRegistryAdmin',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'refreshContracts',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'registryAdmin',
        'outputs': [{
          'internalType': 'address',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'renounceRegistryManagement',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint32',
            'name': 'annualRateInPercentMille',
            'type': 'uint32',
          },
          {
            'internalType': 'uint96',
            'name': 'annualCap',
            'type': 'uint96',
          },
        ],
        'name': 'setAnnualStakingRewardsRate',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'contract IContractRegistry',
          'name': 'newContractRegistry',
          'type': 'address',
        }],
        'name': 'setContractRegistry',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'uint32',
          'name': 'defaultDelegatorsStakingRewardsPercentMille',
          'type': 'uint32',
        }],
        'name': 'setDefaultDelegatorsStakingRewardsPercentMille',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'uint32',
          'name': 'delegatorRewardsPercentMille',
          'type': 'uint32',
        }],
        'name': 'setGuardianDelegatorsStakingRewardsPercentMille',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'uint32',
          'name': 'maxDelegatorsStakingRewardsPercentMille',
          'type': 'uint32',
        }],
        'name': 'setMaxDelegatorsStakingRewardsPercentMille',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': '_registryAdmin',
          'type': 'address',
        }],
        'name': 'setRegistryAdmin',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'stakingRewardsContractBalance',
        'outputs': [{
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'stakingRewardsState',
        'outputs': [
          {
          'internalType': 'uint96',
          'name': 'stakingRewardsPerWeight',
          'type': 'uint96',
        },
          {
            'internalType': 'uint96',
            'name': 'unclaimedStakingRewards',
            'type': 'uint96',
          },
          {
            'internalType': 'uint32',
            'name': 'lastAssigned',
            'type': 'uint32',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'token',
        'outputs': [{
          'internalType': 'contract IERC20',
          'name': '',
          'type': 'address',
        }],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [{
          'internalType': 'address',
          'name': 'newRegistryAdmin',
          'type': 'address',
        }],
        'name': 'transferRegistryManagement',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'unlock',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
    ],
  },
};
