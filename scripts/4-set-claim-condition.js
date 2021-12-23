import sdk from './1-initialize-sdk.js'

const bundleDrop = sdk.getBundleDropModule(
  '0x17eefBa8fa5143636A1f2955429264664b325A79'
)

;(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory()
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    })

    await bundleDrop.setClaimCondition(0, claimConditionFactory)
    console.log('✅ Sucessfully set claim condition!')
  } catch (error) {
    console.error('Failed to set claim condition', error)
  }
})()
