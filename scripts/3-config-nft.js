import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const bundleDrop = sdk.getBundleDropModule(
  '0x17eefBa8fa5143636A1f2955429264664b325A79'
)

;(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Taco',
        description: 'This NFT will give you access to TacoDAO!',
        image: readFileSync('scripts/assets/taco.gif'),
      },
    ])
    console.log('✅ Successfully created a new NFT in the drop!')
  } catch (error) {
    console.error('failed to create the new NFT', error)
  }
})()
