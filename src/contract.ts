import { Bytes } from "@graphprotocol/graph-ts";
import {
	OwnerChanged as OwnerChangedEvent,
	OwnerNominated as OwnerNominatedEvent,
	Upgraded as UpgradedEvent,
	FeatureFlagAllowAllSet as FeatureFlagAllowAllSetEvent,
	FeatureFlagAllowlistAdded as FeatureFlagAllowlistAddedEvent,
	FeatureFlagAllowlistRemoved as FeatureFlagAllowlistRemovedEvent,
	FeatureFlagDeniersReset as FeatureFlagDeniersResetEvent,
	FeatureFlagDenyAllSet as FeatureFlagDenyAllSetEvent,
	AccountCreated as AccountCreatedEvent,
	PermissionGranted as PermissionGrantedEvent,
	PermissionRevoked as PermissionRevokedEvent,
	DebtAssociated as DebtAssociatedEvent,
	AssociatedSystemSet as AssociatedSystemSetEvent,
	CollateralLockCreated as CollateralLockCreatedEvent,
	CollateralLockExpired as CollateralLockExpiredEvent,
	Deposited as DepositedEvent,
	Withdrawn as WithdrawnEvent,
	CollateralConfigured as CollateralConfiguredEvent,
	TransferCrossChainInitiated as TransferCrossChainInitiatedEvent,
	IssuanceFeePaid as IssuanceFeePaidEvent,
	UsdBurned as UsdBurnedEvent,
	UsdMinted as UsdMintedEvent,
	Liquidation as LiquidationEvent,
	VaultLiquidation as VaultLiquidationEvent,
	MarketCollateralDeposited as MarketCollateralDepositedEvent,
	MarketCollateralWithdrawn as MarketCollateralWithdrawnEvent,
	MaximumMarketCollateralConfigured as MaximumMarketCollateralConfiguredEvent,
	MarketRegistered as MarketRegisteredEvent,
	MarketSystemFeePaid as MarketSystemFeePaidEvent,
	MarketUsdDeposited as MarketUsdDepositedEvent,
	MarketUsdWithdrawn as MarketUsdWithdrawnEvent,
	SetMarketMinLiquidityRatio as SetMarketMinLiquidityRatioEvent,
	SetMinDelegateTime as SetMinDelegateTimeEvent,
	PoolApprovedAdded as PoolApprovedAddedEvent,
	PoolApprovedRemoved as PoolApprovedRemovedEvent,
	PreferredPoolSet as PreferredPoolSetEvent,
	PoolCollateralConfigurationUpdated as PoolCollateralConfigurationUpdatedEvent,
	PoolCollateralDisabledByDefaultSet as PoolCollateralDisabledByDefaultSetEvent,
	PoolConfigurationSet as PoolConfigurationSetEvent,
	PoolCreated as PoolCreatedEvent,
	PoolNameUpdated as PoolNameUpdatedEvent,
	PoolNominationRenounced as PoolNominationRenouncedEvent,
	PoolNominationRevoked as PoolNominationRevokedEvent,
	PoolOwnerNominated as PoolOwnerNominatedEvent,
	PoolOwnershipAccepted as PoolOwnershipAcceptedEvent,
	PoolOwnershipRenounced as PoolOwnershipRenouncedEvent,
	SetMinLiquidityRatio as SetMinLiquidityRatioEvent,
	RewardsClaimed as RewardsClaimedEvent,
	RewardsDistributed as RewardsDistributedEvent,
	RewardsDistributorRegistered as RewardsDistributorRegisteredEvent,
	RewardsDistributorRemoved as RewardsDistributorRemovedEvent,
	NewSupportedCrossChainNetwork as NewSupportedCrossChainNetworkEvent,
	DelegationUpdated as DelegationUpdatedEvent,
} from "../generated/Contract/Contract";
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
	DelegationUpdated,
} from "../generated/schema";

export function handleOwnerChanged(event: OwnerChangedEvent): void {
	let entity = new OwnerChanged(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.oldOwner = event.params.oldOwner;
	entity.newOwner = event.params.newOwner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleOwnerNominated(event: OwnerNominatedEvent): void {
	let entity = new OwnerNominated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.newOwner = event.params.newOwner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleUpgraded(event: UpgradedEvent): void {
	let entity = new Upgraded(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.self = event.params.self;
	entity.implementation = event.params.implementation;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleFeatureFlagAllowAllSet(
	event: FeatureFlagAllowAllSetEvent
): void {
	let entity = new FeatureFlagAllowAllSet(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.feature = event.params.feature;
	entity.allowAll = event.params.allowAll;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleFeatureFlagAllowlistAdded(
	event: FeatureFlagAllowlistAddedEvent
): void {
	let entity = new FeatureFlagAllowlistAdded(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.feature = event.params.feature;
	entity.account = event.params.account;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleFeatureFlagAllowlistRemoved(
	event: FeatureFlagAllowlistRemovedEvent
): void {
	let entity = new FeatureFlagAllowlistRemoved(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.feature = event.params.feature;
	entity.account = event.params.account;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleFeatureFlagDeniersReset(
	event: FeatureFlagDeniersResetEvent
): void {
	let entity = new FeatureFlagDeniersReset(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.feature = event.params.feature;
	entity.deniers = changetype<Bytes[]>(event.params.deniers);

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleFeatureFlagDenyAllSet(
	event: FeatureFlagDenyAllSetEvent
): void {
	let entity = new FeatureFlagDenyAllSet(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.feature = event.params.feature;
	entity.denyAll = event.params.denyAll;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleAccountCreated(event: AccountCreatedEvent): void {
	let entity = new AccountCreated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.owner = event.params.owner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePermissionGranted(event: PermissionGrantedEvent): void {
	let entity = new PermissionGranted(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.permission = event.params.permission;
	entity.user = event.params.user;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePermissionRevoked(event: PermissionRevokedEvent): void {
	let entity = new PermissionRevoked(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.permission = event.params.permission;
	entity.user = event.params.user;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleDebtAssociated(event: DebtAssociatedEvent): void {
	let entity = new DebtAssociated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.accountId = event.params.accountId;
	entity.amount = event.params.amount;
	entity.updatedDebt = event.params.updatedDebt;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleAssociatedSystemSet(
	event: AssociatedSystemSetEvent
): void {
	let entity = new AssociatedSystemSet(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.kind = event.params.kind;
	entity.Contract_id = event.params.id;
	entity.proxy = event.params.proxy;
	entity.impl = event.params.impl;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleCollateralLockCreated(
	event: CollateralLockCreatedEvent
): void {
	let entity = new CollateralLockCreated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.collateralType = event.params.collateralType;
	entity.tokenAmount = event.params.tokenAmount;
	entity.expireTimestamp = event.params.expireTimestamp;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleCollateralLockExpired(
	event: CollateralLockExpiredEvent
): void {
	let entity = new CollateralLockExpired(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.collateralType = event.params.collateralType;
	entity.tokenAmount = event.params.tokenAmount;
	entity.expireTimestamp = event.params.expireTimestamp;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleDeposited(event: DepositedEvent): void {
	let entity = new Deposited(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.collateralType = event.params.collateralType;
	entity.tokenAmount = event.params.tokenAmount;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleWithdrawn(event: WithdrawnEvent): void {
	let entity = new Withdrawn(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.collateralType = event.params.collateralType;
	entity.tokenAmount = event.params.tokenAmount;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleCollateralConfigured(
	event: CollateralConfiguredEvent
): void {
	let entity = new CollateralConfigured(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.collateralType = event.params.collateralType;
	entity.config_depositingEnabled = event.params.config.depositingEnabled;
	entity.config_issuanceRatioD18 = event.params.config.issuanceRatioD18;
	entity.config_liquidationRatioD18 = event.params.config.liquidationRatioD18;
	entity.config_liquidationRewardD18 = event.params.config.liquidationRewardD18;
	entity.config_oracleNodeId = event.params.config.oracleNodeId;
	entity.config_tokenAddress = event.params.config.tokenAddress;
	entity.config_minDelegationD18 = event.params.config.minDelegationD18;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleTransferCrossChainInitiated(
	event: TransferCrossChainInitiatedEvent
): void {
	let entity = new TransferCrossChainInitiated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.destChainId = event.params.destChainId;
	entity.amount = event.params.amount;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleIssuanceFeePaid(event: IssuanceFeePaidEvent): void {
	let entity = new IssuanceFeePaid(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.feeAmount = event.params.feeAmount;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleUsdBurned(event: UsdBurnedEvent): void {
	let entity = new UsdBurned(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.amount = event.params.amount;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleUsdMinted(event: UsdMintedEvent): void {
	let entity = new UsdMinted(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.amount = event.params.amount;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleLiquidation(event: LiquidationEvent): void {
	let entity = new Liquidation(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.liquidationData_debtLiquidated =
		event.params.liquidationData.debtLiquidated;
	entity.liquidationData_collateralLiquidated =
		event.params.liquidationData.collateralLiquidated;
	entity.liquidationData_amountRewarded =
		event.params.liquidationData.amountRewarded;
	entity.liquidateAsAccountId = event.params.liquidateAsAccountId;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleVaultLiquidation(event: VaultLiquidationEvent): void {
	let entity = new VaultLiquidation(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.liquidationData_debtLiquidated =
		event.params.liquidationData.debtLiquidated;
	entity.liquidationData_collateralLiquidated =
		event.params.liquidationData.collateralLiquidated;
	entity.liquidationData_amountRewarded =
		event.params.liquidationData.amountRewarded;
	entity.liquidateAsAccountId = event.params.liquidateAsAccountId;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMarketCollateralDeposited(
	event: MarketCollateralDepositedEvent
): void {
	let entity = new MarketCollateralDeposited(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.collateralType = event.params.collateralType;
	entity.tokenAmount = event.params.tokenAmount;
	entity.sender = event.params.sender;
	entity.creditCapacity = event.params.creditCapacity;
	entity.netIssuance = event.params.netIssuance;
	entity.depositedCollateralValue = event.params.depositedCollateralValue;
	entity.reportedDebt = event.params.reportedDebt;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMarketCollateralWithdrawn(
	event: MarketCollateralWithdrawnEvent
): void {
	let entity = new MarketCollateralWithdrawn(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.collateralType = event.params.collateralType;
	entity.tokenAmount = event.params.tokenAmount;
	entity.sender = event.params.sender;
	entity.creditCapacity = event.params.creditCapacity;
	entity.netIssuance = event.params.netIssuance;
	entity.depositedCollateralValue = event.params.depositedCollateralValue;
	entity.reportedDebt = event.params.reportedDebt;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMaximumMarketCollateralConfigured(
	event: MaximumMarketCollateralConfiguredEvent
): void {
	let entity = new MaximumMarketCollateralConfigured(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.collateralType = event.params.collateralType;
	entity.systemAmount = event.params.systemAmount;
	entity.owner = event.params.owner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMarketRegistered(event: MarketRegisteredEvent): void {
	let entity = new MarketRegistered(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.market = event.params.market;
	entity.marketId = event.params.marketId;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMarketSystemFeePaid(
	event: MarketSystemFeePaidEvent
): void {
	let entity = new MarketSystemFeePaid(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.feeAmount = event.params.feeAmount;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMarketUsdDeposited(event: MarketUsdDepositedEvent): void {
	let entity = new MarketUsdDeposited(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.target = event.params.target;
	entity.amount = event.params.amount;
	entity.market = event.params.market;
	entity.creditCapacity = event.params.creditCapacity;
	entity.netIssuance = event.params.netIssuance;
	entity.depositedCollateralValue = event.params.depositedCollateralValue;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleMarketUsdWithdrawn(event: MarketUsdWithdrawnEvent): void {
	let entity = new MarketUsdWithdrawn(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.target = event.params.target;
	entity.amount = event.params.amount;
	entity.market = event.params.market;
	entity.creditCapacity = event.params.creditCapacity;
	entity.netIssuance = event.params.netIssuance;
	entity.depositedCollateralValue = event.params.depositedCollateralValue;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleSetMarketMinLiquidityRatio(
	event: SetMarketMinLiquidityRatioEvent
): void {
	let entity = new SetMarketMinLiquidityRatio(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.minLiquidityRatio = event.params.minLiquidityRatio;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleSetMinDelegateTime(event: SetMinDelegateTimeEvent): void {
	let entity = new SetMinDelegateTime(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.marketId = event.params.marketId;
	entity.minDelegateTime = event.params.minDelegateTime;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolApprovedAdded(event: PoolApprovedAddedEvent): void {
	let entity = new PoolApprovedAdded(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolApprovedRemoved(
	event: PoolApprovedRemovedEvent
): void {
	let entity = new PoolApprovedRemoved(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePreferredPoolSet(event: PreferredPoolSetEvent): void {
	let entity = new PreferredPoolSet(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolCollateralConfigurationUpdated(
	event: PoolCollateralConfigurationUpdatedEvent
): void {
	let entity = new PoolCollateralConfigurationUpdated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.config_collateralLimitD18 = event.params.config.collateralLimitD18;
	entity.config_issuanceRatioD18 = event.params.config.issuanceRatioD18;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolCollateralDisabledByDefaultSet(
	event: PoolCollateralDisabledByDefaultSetEvent
): void {
	let entity = new PoolCollateralDisabledByDefaultSet(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.disabled = event.params.disabled;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolConfigurationSet(
	event: PoolConfigurationSetEvent
): void {
	let entity = new PoolConfigurationSet(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.markets = changetype<Bytes[]>(event.params.markets);
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolCreated(event: PoolCreatedEvent): void {
	let entity = new PoolCreated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.owner = event.params.owner;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolNameUpdated(event: PoolNameUpdatedEvent): void {
	let entity = new PoolNameUpdated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.name = event.params.name;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolNominationRenounced(
	event: PoolNominationRenouncedEvent
): void {
	let entity = new PoolNominationRenounced(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.owner = event.params.owner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolNominationRevoked(
	event: PoolNominationRevokedEvent
): void {
	let entity = new PoolNominationRevoked(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.owner = event.params.owner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolOwnerNominated(event: PoolOwnerNominatedEvent): void {
	let entity = new PoolOwnerNominated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.nominatedOwner = event.params.nominatedOwner;
	entity.owner = event.params.owner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolOwnershipAccepted(
	event: PoolOwnershipAcceptedEvent
): void {
	let entity = new PoolOwnershipAccepted(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.owner = event.params.owner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePoolOwnershipRenounced(
	event: PoolOwnershipRenouncedEvent
): void {
	let entity = new PoolOwnershipRenounced(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.owner = event.params.owner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleSetMinLiquidityRatio(
	event: SetMinLiquidityRatioEvent
): void {
	let entity = new SetMinLiquidityRatio(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.minLiquidityRatio = event.params.minLiquidityRatio;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleRewardsClaimed(event: RewardsClaimedEvent): void {
	let entity = new RewardsClaimed(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.distributor = event.params.distributor;
	entity.amount = event.params.amount;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleRewardsDistributed(event: RewardsDistributedEvent): void {
	let entity = new RewardsDistributed(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.distributor = event.params.distributor;
	entity.amount = event.params.amount;
	entity.start = event.params.start;
	entity.duration = event.params.duration;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleRewardsDistributorRegistered(
	event: RewardsDistributorRegisteredEvent
): void {
	let entity = new RewardsDistributorRegistered(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.distributor = event.params.distributor;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleRewardsDistributorRemoved(
	event: RewardsDistributorRemovedEvent
): void {
	let entity = new RewardsDistributorRemoved(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.distributor = event.params.distributor;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleNewSupportedCrossChainNetwork(
	event: NewSupportedCrossChainNetworkEvent
): void {
	let entity = new NewSupportedCrossChainNetwork(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.newChainId = event.params.newChainId;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handleDelegationUpdated(event: DelegationUpdatedEvent): void {
	let entity = new DelegationUpdated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.accountId = event.params.accountId;
	entity.poolId = event.params.poolId;
	entity.collateralType = event.params.collateralType;
	entity.amount = event.params.amount;
	entity.leverage = event.params.leverage;
	entity.sender = event.params.sender;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}
