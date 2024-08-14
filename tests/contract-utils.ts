import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnerChanged,
  OwnerNominated,
  Upgraded,
  FeatureFlagAllowAllSet,
  FeatureFlagAllowlistAdded,
  FeatureFlagAllowlistRemoved,
  FeatureFlagDeniersReset,
  FeatureFlagDenyAllSet,
  AccountCreated,
  PermissionGranted,
  PermissionRevoked,
  DebtAssociated,
  AssociatedSystemSet,
  CollateralLockCreated,
  CollateralLockExpired,
  Deposited,
  Withdrawn,
  CollateralConfigured,
  TransferCrossChainInitiated,
  IssuanceFeePaid,
  UsdBurned,
  UsdMinted,
  Liquidation,
  VaultLiquidation,
  MarketCollateralDeposited,
  MarketCollateralWithdrawn,
  MaximumMarketCollateralConfigured,
  MarketRegistered,
  MarketSystemFeePaid,
  MarketUsdDeposited,
  MarketUsdWithdrawn,
  SetMarketMinLiquidityRatio,
  SetMinDelegateTime,
  PoolApprovedAdded,
  PoolApprovedRemoved,
  PreferredPoolSet,
  PoolCollateralConfigurationUpdated,
  PoolCollateralDisabledByDefaultSet,
  PoolConfigurationSet,
  PoolCreated,
  PoolNameUpdated,
  PoolNominationRenounced,
  PoolNominationRevoked,
  PoolOwnerNominated,
  PoolOwnershipAccepted,
  PoolOwnershipRenounced,
  SetMinLiquidityRatio,
  RewardsClaimed,
  RewardsDistributed,
  RewardsDistributorRegistered,
  RewardsDistributorRemoved,
  NewSupportedCrossChainNetwork,
  DelegationUpdated
} from "../generated/Contract/Contract"

export function createOwnerChangedEvent(
  oldOwner: Address,
  newOwner: Address
): OwnerChanged {
  let ownerChangedEvent = changetype<OwnerChanged>(newMockEvent())

  ownerChangedEvent.parameters = new Array()

  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerChangedEvent
}

export function createOwnerNominatedEvent(newOwner: Address): OwnerNominated {
  let ownerNominatedEvent = changetype<OwnerNominated>(newMockEvent())

  ownerNominatedEvent.parameters = new Array()

  ownerNominatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerNominatedEvent
}

export function createUpgradedEvent(
  self: Address,
  implementation: Address
): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam("self", ethereum.Value.fromAddress(self))
  )
  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createFeatureFlagAllowAllSetEvent(
  feature: Bytes,
  allowAll: boolean
): FeatureFlagAllowAllSet {
  let featureFlagAllowAllSetEvent = changetype<FeatureFlagAllowAllSet>(
    newMockEvent()
  )

  featureFlagAllowAllSetEvent.parameters = new Array()

  featureFlagAllowAllSetEvent.parameters.push(
    new ethereum.EventParam("feature", ethereum.Value.fromFixedBytes(feature))
  )
  featureFlagAllowAllSetEvent.parameters.push(
    new ethereum.EventParam("allowAll", ethereum.Value.fromBoolean(allowAll))
  )

  return featureFlagAllowAllSetEvent
}

export function createFeatureFlagAllowlistAddedEvent(
  feature: Bytes,
  account: Address
): FeatureFlagAllowlistAdded {
  let featureFlagAllowlistAddedEvent = changetype<FeatureFlagAllowlistAdded>(
    newMockEvent()
  )

  featureFlagAllowlistAddedEvent.parameters = new Array()

  featureFlagAllowlistAddedEvent.parameters.push(
    new ethereum.EventParam("feature", ethereum.Value.fromFixedBytes(feature))
  )
  featureFlagAllowlistAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return featureFlagAllowlistAddedEvent
}

export function createFeatureFlagAllowlistRemovedEvent(
  feature: Bytes,
  account: Address
): FeatureFlagAllowlistRemoved {
  let featureFlagAllowlistRemovedEvent =
    changetype<FeatureFlagAllowlistRemoved>(newMockEvent())

  featureFlagAllowlistRemovedEvent.parameters = new Array()

  featureFlagAllowlistRemovedEvent.parameters.push(
    new ethereum.EventParam("feature", ethereum.Value.fromFixedBytes(feature))
  )
  featureFlagAllowlistRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return featureFlagAllowlistRemovedEvent
}

export function createFeatureFlagDeniersResetEvent(
  feature: Bytes,
  deniers: Array<Address>
): FeatureFlagDeniersReset {
  let featureFlagDeniersResetEvent = changetype<FeatureFlagDeniersReset>(
    newMockEvent()
  )

  featureFlagDeniersResetEvent.parameters = new Array()

  featureFlagDeniersResetEvent.parameters.push(
    new ethereum.EventParam("feature", ethereum.Value.fromFixedBytes(feature))
  )
  featureFlagDeniersResetEvent.parameters.push(
    new ethereum.EventParam("deniers", ethereum.Value.fromAddressArray(deniers))
  )

  return featureFlagDeniersResetEvent
}

export function createFeatureFlagDenyAllSetEvent(
  feature: Bytes,
  denyAll: boolean
): FeatureFlagDenyAllSet {
  let featureFlagDenyAllSetEvent = changetype<FeatureFlagDenyAllSet>(
    newMockEvent()
  )

  featureFlagDenyAllSetEvent.parameters = new Array()

  featureFlagDenyAllSetEvent.parameters.push(
    new ethereum.EventParam("feature", ethereum.Value.fromFixedBytes(feature))
  )
  featureFlagDenyAllSetEvent.parameters.push(
    new ethereum.EventParam("denyAll", ethereum.Value.fromBoolean(denyAll))
  )

  return featureFlagDenyAllSetEvent
}

export function createAccountCreatedEvent(
  accountId: BigInt,
  owner: Address
): AccountCreated {
  let accountCreatedEvent = changetype<AccountCreated>(newMockEvent())

  accountCreatedEvent.parameters = new Array()

  accountCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return accountCreatedEvent
}

export function createPermissionGrantedEvent(
  accountId: BigInt,
  permission: Bytes,
  user: Address,
  sender: Address
): PermissionGranted {
  let permissionGrantedEvent = changetype<PermissionGranted>(newMockEvent())

  permissionGrantedEvent.parameters = new Array()

  permissionGrantedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  permissionGrantedEvent.parameters.push(
    new ethereum.EventParam(
      "permission",
      ethereum.Value.fromFixedBytes(permission)
    )
  )
  permissionGrantedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  permissionGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return permissionGrantedEvent
}

export function createPermissionRevokedEvent(
  accountId: BigInt,
  permission: Bytes,
  user: Address,
  sender: Address
): PermissionRevoked {
  let permissionRevokedEvent = changetype<PermissionRevoked>(newMockEvent())

  permissionRevokedEvent.parameters = new Array()

  permissionRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  permissionRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "permission",
      ethereum.Value.fromFixedBytes(permission)
    )
  )
  permissionRevokedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  permissionRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return permissionRevokedEvent
}

export function createDebtAssociatedEvent(
  marketId: BigInt,
  poolId: BigInt,
  collateralType: Address,
  accountId: BigInt,
  amount: BigInt,
  updatedDebt: BigInt
): DebtAssociated {
  let debtAssociatedEvent = changetype<DebtAssociated>(newMockEvent())

  debtAssociatedEvent.parameters = new Array()

  debtAssociatedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  debtAssociatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  debtAssociatedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  debtAssociatedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  debtAssociatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  debtAssociatedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedDebt",
      ethereum.Value.fromSignedBigInt(updatedDebt)
    )
  )

  return debtAssociatedEvent
}

export function createAssociatedSystemSetEvent(
  kind: Bytes,
  id: Bytes,
  proxy: Address,
  impl: Address
): AssociatedSystemSet {
  let associatedSystemSetEvent = changetype<AssociatedSystemSet>(newMockEvent())

  associatedSystemSetEvent.parameters = new Array()

  associatedSystemSetEvent.parameters.push(
    new ethereum.EventParam("kind", ethereum.Value.fromFixedBytes(kind))
  )
  associatedSystemSetEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  associatedSystemSetEvent.parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  )
  associatedSystemSetEvent.parameters.push(
    new ethereum.EventParam("impl", ethereum.Value.fromAddress(impl))
  )

  return associatedSystemSetEvent
}

export function createCollateralLockCreatedEvent(
  accountId: BigInt,
  collateralType: Address,
  tokenAmount: BigInt,
  expireTimestamp: BigInt
): CollateralLockCreated {
  let collateralLockCreatedEvent = changetype<CollateralLockCreated>(
    newMockEvent()
  )

  collateralLockCreatedEvent.parameters = new Array()

  collateralLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  collateralLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  collateralLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  collateralLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "expireTimestamp",
      ethereum.Value.fromUnsignedBigInt(expireTimestamp)
    )
  )

  return collateralLockCreatedEvent
}

export function createCollateralLockExpiredEvent(
  accountId: BigInt,
  collateralType: Address,
  tokenAmount: BigInt,
  expireTimestamp: BigInt
): CollateralLockExpired {
  let collateralLockExpiredEvent = changetype<CollateralLockExpired>(
    newMockEvent()
  )

  collateralLockExpiredEvent.parameters = new Array()

  collateralLockExpiredEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  collateralLockExpiredEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  collateralLockExpiredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  collateralLockExpiredEvent.parameters.push(
    new ethereum.EventParam(
      "expireTimestamp",
      ethereum.Value.fromUnsignedBigInt(expireTimestamp)
    )
  )

  return collateralLockExpiredEvent
}

export function createDepositedEvent(
  accountId: BigInt,
  collateralType: Address,
  tokenAmount: BigInt,
  sender: Address
): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return depositedEvent
}

export function createWithdrawnEvent(
  accountId: BigInt,
  collateralType: Address,
  tokenAmount: BigInt,
  sender: Address
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return withdrawnEvent
}

export function createCollateralConfiguredEvent(
  collateralType: Address,
  config: ethereum.Tuple
): CollateralConfigured {
  let collateralConfiguredEvent = changetype<CollateralConfigured>(
    newMockEvent()
  )

  collateralConfiguredEvent.parameters = new Array()

  collateralConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  collateralConfiguredEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return collateralConfiguredEvent
}

export function createTransferCrossChainInitiatedEvent(
  destChainId: BigInt,
  amount: BigInt,
  sender: Address
): TransferCrossChainInitiated {
  let transferCrossChainInitiatedEvent =
    changetype<TransferCrossChainInitiated>(newMockEvent())

  transferCrossChainInitiatedEvent.parameters = new Array()

  transferCrossChainInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "destChainId",
      ethereum.Value.fromUnsignedBigInt(destChainId)
    )
  )
  transferCrossChainInitiatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  transferCrossChainInitiatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return transferCrossChainInitiatedEvent
}

export function createIssuanceFeePaidEvent(
  accountId: BigInt,
  poolId: BigInt,
  collateralType: Address,
  feeAmount: BigInt
): IssuanceFeePaid {
  let issuanceFeePaidEvent = changetype<IssuanceFeePaid>(newMockEvent())

  issuanceFeePaidEvent.parameters = new Array()

  issuanceFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  issuanceFeePaidEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  issuanceFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  issuanceFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )

  return issuanceFeePaidEvent
}

export function createUsdBurnedEvent(
  accountId: BigInt,
  poolId: BigInt,
  collateralType: Address,
  amount: BigInt,
  sender: Address
): UsdBurned {
  let usdBurnedEvent = changetype<UsdBurned>(newMockEvent())

  usdBurnedEvent.parameters = new Array()

  usdBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  usdBurnedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  usdBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  usdBurnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  usdBurnedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return usdBurnedEvent
}

export function createUsdMintedEvent(
  accountId: BigInt,
  poolId: BigInt,
  collateralType: Address,
  amount: BigInt,
  sender: Address
): UsdMinted {
  let usdMintedEvent = changetype<UsdMinted>(newMockEvent())

  usdMintedEvent.parameters = new Array()

  usdMintedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  usdMintedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  usdMintedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  usdMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  usdMintedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return usdMintedEvent
}

export function createLiquidationEvent(
  accountId: BigInt,
  poolId: BigInt,
  collateralType: Address,
  liquidationData: ethereum.Tuple,
  liquidateAsAccountId: BigInt,
  sender: Address
): Liquidation {
  let liquidationEvent = changetype<Liquidation>(newMockEvent())

  liquidationEvent.parameters = new Array()

  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationData",
      ethereum.Value.fromTuple(liquidationData)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "liquidateAsAccountId",
      ethereum.Value.fromUnsignedBigInt(liquidateAsAccountId)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return liquidationEvent
}

export function createVaultLiquidationEvent(
  poolId: BigInt,
  collateralType: Address,
  liquidationData: ethereum.Tuple,
  liquidateAsAccountId: BigInt,
  sender: Address
): VaultLiquidation {
  let vaultLiquidationEvent = changetype<VaultLiquidation>(newMockEvent())

  vaultLiquidationEvent.parameters = new Array()

  vaultLiquidationEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  vaultLiquidationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  vaultLiquidationEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationData",
      ethereum.Value.fromTuple(liquidationData)
    )
  )
  vaultLiquidationEvent.parameters.push(
    new ethereum.EventParam(
      "liquidateAsAccountId",
      ethereum.Value.fromUnsignedBigInt(liquidateAsAccountId)
    )
  )
  vaultLiquidationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return vaultLiquidationEvent
}

export function createMarketCollateralDepositedEvent(
  marketId: BigInt,
  collateralType: Address,
  tokenAmount: BigInt,
  sender: Address,
  creditCapacity: BigInt,
  netIssuance: BigInt,
  depositedCollateralValue: BigInt,
  reportedDebt: BigInt
): MarketCollateralDeposited {
  let marketCollateralDepositedEvent = changetype<MarketCollateralDeposited>(
    newMockEvent()
  )

  marketCollateralDepositedEvent.parameters = new Array()

  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "creditCapacity",
      ethereum.Value.fromSignedBigInt(creditCapacity)
    )
  )
  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "netIssuance",
      ethereum.Value.fromSignedBigInt(netIssuance)
    )
  )
  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "depositedCollateralValue",
      ethereum.Value.fromUnsignedBigInt(depositedCollateralValue)
    )
  )
  marketCollateralDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "reportedDebt",
      ethereum.Value.fromUnsignedBigInt(reportedDebt)
    )
  )

  return marketCollateralDepositedEvent
}

export function createMarketCollateralWithdrawnEvent(
  marketId: BigInt,
  collateralType: Address,
  tokenAmount: BigInt,
  sender: Address,
  creditCapacity: BigInt,
  netIssuance: BigInt,
  depositedCollateralValue: BigInt,
  reportedDebt: BigInt
): MarketCollateralWithdrawn {
  let marketCollateralWithdrawnEvent = changetype<MarketCollateralWithdrawn>(
    newMockEvent()
  )

  marketCollateralWithdrawnEvent.parameters = new Array()

  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "creditCapacity",
      ethereum.Value.fromSignedBigInt(creditCapacity)
    )
  )
  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "netIssuance",
      ethereum.Value.fromSignedBigInt(netIssuance)
    )
  )
  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "depositedCollateralValue",
      ethereum.Value.fromUnsignedBigInt(depositedCollateralValue)
    )
  )
  marketCollateralWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "reportedDebt",
      ethereum.Value.fromUnsignedBigInt(reportedDebt)
    )
  )

  return marketCollateralWithdrawnEvent
}

export function createMaximumMarketCollateralConfiguredEvent(
  marketId: BigInt,
  collateralType: Address,
  systemAmount: BigInt,
  owner: Address
): MaximumMarketCollateralConfigured {
  let maximumMarketCollateralConfiguredEvent =
    changetype<MaximumMarketCollateralConfigured>(newMockEvent())

  maximumMarketCollateralConfiguredEvent.parameters = new Array()

  maximumMarketCollateralConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  maximumMarketCollateralConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  maximumMarketCollateralConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "systemAmount",
      ethereum.Value.fromUnsignedBigInt(systemAmount)
    )
  )
  maximumMarketCollateralConfiguredEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return maximumMarketCollateralConfiguredEvent
}

export function createMarketRegisteredEvent(
  market: Address,
  marketId: BigInt,
  sender: Address
): MarketRegistered {
  let marketRegisteredEvent = changetype<MarketRegistered>(newMockEvent())

  marketRegisteredEvent.parameters = new Array()

  marketRegisteredEvent.parameters.push(
    new ethereum.EventParam("market", ethereum.Value.fromAddress(market))
  )
  marketRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketRegisteredEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return marketRegisteredEvent
}

export function createMarketSystemFeePaidEvent(
  marketId: BigInt,
  feeAmount: BigInt
): MarketSystemFeePaid {
  let marketSystemFeePaidEvent = changetype<MarketSystemFeePaid>(newMockEvent())

  marketSystemFeePaidEvent.parameters = new Array()

  marketSystemFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketSystemFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )

  return marketSystemFeePaidEvent
}

export function createMarketUsdDepositedEvent(
  marketId: BigInt,
  target: Address,
  amount: BigInt,
  market: Address,
  creditCapacity: BigInt,
  netIssuance: BigInt,
  depositedCollateralValue: BigInt
): MarketUsdDeposited {
  let marketUsdDepositedEvent = changetype<MarketUsdDeposited>(newMockEvent())

  marketUsdDepositedEvent.parameters = new Array()

  marketUsdDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketUsdDepositedEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  marketUsdDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  marketUsdDepositedEvent.parameters.push(
    new ethereum.EventParam("market", ethereum.Value.fromAddress(market))
  )
  marketUsdDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "creditCapacity",
      ethereum.Value.fromSignedBigInt(creditCapacity)
    )
  )
  marketUsdDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "netIssuance",
      ethereum.Value.fromSignedBigInt(netIssuance)
    )
  )
  marketUsdDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "depositedCollateralValue",
      ethereum.Value.fromUnsignedBigInt(depositedCollateralValue)
    )
  )

  return marketUsdDepositedEvent
}

export function createMarketUsdWithdrawnEvent(
  marketId: BigInt,
  target: Address,
  amount: BigInt,
  market: Address,
  creditCapacity: BigInt,
  netIssuance: BigInt,
  depositedCollateralValue: BigInt
): MarketUsdWithdrawn {
  let marketUsdWithdrawnEvent = changetype<MarketUsdWithdrawn>(newMockEvent())

  marketUsdWithdrawnEvent.parameters = new Array()

  marketUsdWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketUsdWithdrawnEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  marketUsdWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  marketUsdWithdrawnEvent.parameters.push(
    new ethereum.EventParam("market", ethereum.Value.fromAddress(market))
  )
  marketUsdWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "creditCapacity",
      ethereum.Value.fromSignedBigInt(creditCapacity)
    )
  )
  marketUsdWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "netIssuance",
      ethereum.Value.fromSignedBigInt(netIssuance)
    )
  )
  marketUsdWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "depositedCollateralValue",
      ethereum.Value.fromUnsignedBigInt(depositedCollateralValue)
    )
  )

  return marketUsdWithdrawnEvent
}

export function createSetMarketMinLiquidityRatioEvent(
  marketId: BigInt,
  minLiquidityRatio: BigInt
): SetMarketMinLiquidityRatio {
  let setMarketMinLiquidityRatioEvent = changetype<SetMarketMinLiquidityRatio>(
    newMockEvent()
  )

  setMarketMinLiquidityRatioEvent.parameters = new Array()

  setMarketMinLiquidityRatioEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  setMarketMinLiquidityRatioEvent.parameters.push(
    new ethereum.EventParam(
      "minLiquidityRatio",
      ethereum.Value.fromUnsignedBigInt(minLiquidityRatio)
    )
  )

  return setMarketMinLiquidityRatioEvent
}

export function createSetMinDelegateTimeEvent(
  marketId: BigInt,
  minDelegateTime: BigInt
): SetMinDelegateTime {
  let setMinDelegateTimeEvent = changetype<SetMinDelegateTime>(newMockEvent())

  setMinDelegateTimeEvent.parameters = new Array()

  setMinDelegateTimeEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  setMinDelegateTimeEvent.parameters.push(
    new ethereum.EventParam(
      "minDelegateTime",
      ethereum.Value.fromUnsignedBigInt(minDelegateTime)
    )
  )

  return setMinDelegateTimeEvent
}

export function createPoolApprovedAddedEvent(
  poolId: BigInt
): PoolApprovedAdded {
  let poolApprovedAddedEvent = changetype<PoolApprovedAdded>(newMockEvent())

  poolApprovedAddedEvent.parameters = new Array()

  poolApprovedAddedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )

  return poolApprovedAddedEvent
}

export function createPoolApprovedRemovedEvent(
  poolId: BigInt
): PoolApprovedRemoved {
  let poolApprovedRemovedEvent = changetype<PoolApprovedRemoved>(newMockEvent())

  poolApprovedRemovedEvent.parameters = new Array()

  poolApprovedRemovedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )

  return poolApprovedRemovedEvent
}

export function createPreferredPoolSetEvent(poolId: BigInt): PreferredPoolSet {
  let preferredPoolSetEvent = changetype<PreferredPoolSet>(newMockEvent())

  preferredPoolSetEvent.parameters = new Array()

  preferredPoolSetEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )

  return preferredPoolSetEvent
}

export function createPoolCollateralConfigurationUpdatedEvent(
  poolId: BigInt,
  collateralType: Address,
  config: ethereum.Tuple
): PoolCollateralConfigurationUpdated {
  let poolCollateralConfigurationUpdatedEvent =
    changetype<PoolCollateralConfigurationUpdated>(newMockEvent())

  poolCollateralConfigurationUpdatedEvent.parameters = new Array()

  poolCollateralConfigurationUpdatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolCollateralConfigurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  poolCollateralConfigurationUpdatedEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return poolCollateralConfigurationUpdatedEvent
}

export function createPoolCollateralDisabledByDefaultSetEvent(
  poolId: BigInt,
  disabled: boolean
): PoolCollateralDisabledByDefaultSet {
  let poolCollateralDisabledByDefaultSetEvent =
    changetype<PoolCollateralDisabledByDefaultSet>(newMockEvent())

  poolCollateralDisabledByDefaultSetEvent.parameters = new Array()

  poolCollateralDisabledByDefaultSetEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolCollateralDisabledByDefaultSetEvent.parameters.push(
    new ethereum.EventParam("disabled", ethereum.Value.fromBoolean(disabled))
  )

  return poolCollateralDisabledByDefaultSetEvent
}

export function createPoolConfigurationSetEvent(
  poolId: BigInt,
  markets: Array<ethereum.Tuple>,
  sender: Address
): PoolConfigurationSet {
  let poolConfigurationSetEvent = changetype<PoolConfigurationSet>(
    newMockEvent()
  )

  poolConfigurationSetEvent.parameters = new Array()

  poolConfigurationSetEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolConfigurationSetEvent.parameters.push(
    new ethereum.EventParam("markets", ethereum.Value.fromTupleArray(markets))
  )
  poolConfigurationSetEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return poolConfigurationSetEvent
}

export function createPoolCreatedEvent(
  poolId: BigInt,
  owner: Address,
  sender: Address
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return poolCreatedEvent
}

export function createPoolNameUpdatedEvent(
  poolId: BigInt,
  name: string,
  sender: Address
): PoolNameUpdated {
  let poolNameUpdatedEvent = changetype<PoolNameUpdated>(newMockEvent())

  poolNameUpdatedEvent.parameters = new Array()

  poolNameUpdatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolNameUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  poolNameUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return poolNameUpdatedEvent
}

export function createPoolNominationRenouncedEvent(
  poolId: BigInt,
  owner: Address
): PoolNominationRenounced {
  let poolNominationRenouncedEvent = changetype<PoolNominationRenounced>(
    newMockEvent()
  )

  poolNominationRenouncedEvent.parameters = new Array()

  poolNominationRenouncedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolNominationRenouncedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return poolNominationRenouncedEvent
}

export function createPoolNominationRevokedEvent(
  poolId: BigInt,
  owner: Address
): PoolNominationRevoked {
  let poolNominationRevokedEvent = changetype<PoolNominationRevoked>(
    newMockEvent()
  )

  poolNominationRevokedEvent.parameters = new Array()

  poolNominationRevokedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolNominationRevokedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return poolNominationRevokedEvent
}

export function createPoolOwnerNominatedEvent(
  poolId: BigInt,
  nominatedOwner: Address,
  owner: Address
): PoolOwnerNominated {
  let poolOwnerNominatedEvent = changetype<PoolOwnerNominated>(newMockEvent())

  poolOwnerNominatedEvent.parameters = new Array()

  poolOwnerNominatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolOwnerNominatedEvent.parameters.push(
    new ethereum.EventParam(
      "nominatedOwner",
      ethereum.Value.fromAddress(nominatedOwner)
    )
  )
  poolOwnerNominatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return poolOwnerNominatedEvent
}

export function createPoolOwnershipAcceptedEvent(
  poolId: BigInt,
  owner: Address
): PoolOwnershipAccepted {
  let poolOwnershipAcceptedEvent = changetype<PoolOwnershipAccepted>(
    newMockEvent()
  )

  poolOwnershipAcceptedEvent.parameters = new Array()

  poolOwnershipAcceptedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolOwnershipAcceptedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return poolOwnershipAcceptedEvent
}

export function createPoolOwnershipRenouncedEvent(
  poolId: BigInt,
  owner: Address
): PoolOwnershipRenounced {
  let poolOwnershipRenouncedEvent = changetype<PoolOwnershipRenounced>(
    newMockEvent()
  )

  poolOwnershipRenouncedEvent.parameters = new Array()

  poolOwnershipRenouncedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolOwnershipRenouncedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return poolOwnershipRenouncedEvent
}

export function createSetMinLiquidityRatioEvent(
  minLiquidityRatio: BigInt
): SetMinLiquidityRatio {
  let setMinLiquidityRatioEvent = changetype<SetMinLiquidityRatio>(
    newMockEvent()
  )

  setMinLiquidityRatioEvent.parameters = new Array()

  setMinLiquidityRatioEvent.parameters.push(
    new ethereum.EventParam(
      "minLiquidityRatio",
      ethereum.Value.fromUnsignedBigInt(minLiquidityRatio)
    )
  )

  return setMinLiquidityRatioEvent
}

export function createRewardsClaimedEvent(
  accountId: BigInt,
  poolId: BigInt,
  collateralType: Address,
  distributor: Address,
  amount: BigInt
): RewardsClaimed {
  let rewardsClaimedEvent = changetype<RewardsClaimed>(newMockEvent())

  rewardsClaimedEvent.parameters = new Array()

  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "distributor",
      ethereum.Value.fromAddress(distributor)
    )
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardsClaimedEvent
}

export function createRewardsDistributedEvent(
  poolId: BigInt,
  collateralType: Address,
  distributor: Address,
  amount: BigInt,
  start: BigInt,
  duration: BigInt
): RewardsDistributed {
  let rewardsDistributedEvent = changetype<RewardsDistributed>(newMockEvent())

  rewardsDistributedEvent.parameters = new Array()

  rewardsDistributedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  rewardsDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  rewardsDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "distributor",
      ethereum.Value.fromAddress(distributor)
    )
  )
  rewardsDistributedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  rewardsDistributedEvent.parameters.push(
    new ethereum.EventParam("start", ethereum.Value.fromUnsignedBigInt(start))
  )
  rewardsDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return rewardsDistributedEvent
}

export function createRewardsDistributorRegisteredEvent(
  poolId: BigInt,
  collateralType: Address,
  distributor: Address
): RewardsDistributorRegistered {
  let rewardsDistributorRegisteredEvent =
    changetype<RewardsDistributorRegistered>(newMockEvent())

  rewardsDistributorRegisteredEvent.parameters = new Array()

  rewardsDistributorRegisteredEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  rewardsDistributorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  rewardsDistributorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "distributor",
      ethereum.Value.fromAddress(distributor)
    )
  )

  return rewardsDistributorRegisteredEvent
}

export function createRewardsDistributorRemovedEvent(
  poolId: BigInt,
  collateralType: Address,
  distributor: Address
): RewardsDistributorRemoved {
  let rewardsDistributorRemovedEvent = changetype<RewardsDistributorRemoved>(
    newMockEvent()
  )

  rewardsDistributorRemovedEvent.parameters = new Array()

  rewardsDistributorRemovedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  rewardsDistributorRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  rewardsDistributorRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "distributor",
      ethereum.Value.fromAddress(distributor)
    )
  )

  return rewardsDistributorRemovedEvent
}

export function createNewSupportedCrossChainNetworkEvent(
  newChainId: BigInt
): NewSupportedCrossChainNetwork {
  let newSupportedCrossChainNetworkEvent =
    changetype<NewSupportedCrossChainNetwork>(newMockEvent())

  newSupportedCrossChainNetworkEvent.parameters = new Array()

  newSupportedCrossChainNetworkEvent.parameters.push(
    new ethereum.EventParam(
      "newChainId",
      ethereum.Value.fromUnsignedBigInt(newChainId)
    )
  )

  return newSupportedCrossChainNetworkEvent
}

export function createDelegationUpdatedEvent(
  accountId: BigInt,
  poolId: BigInt,
  collateralType: Address,
  amount: BigInt,
  leverage: BigInt,
  sender: Address
): DelegationUpdated {
  let delegationUpdatedEvent = changetype<DelegationUpdated>(newMockEvent())

  delegationUpdatedEvent.parameters = new Array()

  delegationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  delegationUpdatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  delegationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralType",
      ethereum.Value.fromAddress(collateralType)
    )
  )
  delegationUpdatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  delegationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "leverage",
      ethereum.Value.fromUnsignedBigInt(leverage)
    )
  )
  delegationUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return delegationUpdatedEvent
}
