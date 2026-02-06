# [3.1.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v3.0.2...v3.1.0) (2026-02-06)


### Bug Fixes

* upgrade node red to v4.1.4 ([#340](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/340)) ([20126b1](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/20126b184568d57ce117b1d969e92e89f0e97206))


### Features

* update to websdk version 1023 and nodejs 24 ([#339](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/339)) ([bbeca18](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/bbeca189af0d5bab0fab15e7ef0c0296f08a373e))

## [3.0.2](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v3.0.1...v3.0.2) (2026-01-07)


### Bug Fixes

* ensure deployed blueprint actually also loads all plugins ([8195539](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/8195539ac9419b722baade219dc11f6ac6bd0f3d))

## [3.0.1](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v3.0.0...v3.0.1) (2026-01-07)


### Bug Fixes

* remove wrong readme file in order to have correct readme included ([11ba011](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/11ba011d7285e282ee4d22ab56f6329e33ef4b2d))

# [3.0.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.7.1...v3.0.0) (2025-12-19)


### Features

* add gainsight tracking ([#333](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/333)) ([cecbaa9](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/cecbaa9960145f2b3a23d95bd3c604565ba0522d))
* add support for different dashboarding package (`@flowfuse/node-red-dashboard`) ([#332](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/332)) ([4811f96](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/4811f963b190e03c950564c658330c2caa9c8400))


### BREAKING CHANGES

* The dashboarding of `node-red-dashboard` package has been deprecated for a while by Node-RED. There is an unofficial successor: `@flowfuse/node-red-dashboard`. With this change the `node-red-dashboard` package will no longer be included by default. If users require dashboarding functionality they will have add one of either `node-red-dashboard` or `@flowfuse/node-red-dashboard` packages via Node-REDs palette manager.

## [2.7.1](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.7.0...v2.7.1) (2025-11-06)


### Bug Fixes

* bump node red version from 4.1.0 to 4.1.1 ([#331](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/331)) ([ef87194](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/ef87194bbc815e356b2755878a0935a7bb692bee))

# [2.7.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.6.1...v2.7.0) (2025-08-25)


### Features

* upgrade node-red to latest version ([#311](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/311)) ([dc3ca9f](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/dc3ca9fb021bc351c3f2be5eaee11196ca528593))
* upgrade to websdk v1022 ([#310](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/310)) ([caa08d3](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/caa08d3c2c6b6940e0cad636d78d9328b63322db))

## [2.6.1](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.6.0...v2.6.1) (2025-05-07)


### Bug Fixes

* only use standalone components to ensure compatibility with WebSDK version 1022.0.0 ([0ab9853](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/0ab98537ecab9706cde9dd450c4c5b791773c63f))

# [2.6.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.5.0...v2.6.0) (2025-03-14)


### Bug Fixes

* bump dependencies ([1e03557](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/1e03557b1698179800f6e81e148d50a1334bdd92))


### Features

* update node-red logo ([f6daf2c](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/f6daf2c21bfaca5e8c71dbcbe67832261ac4af0c))

# [2.5.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.4.0...v2.5.0) (2025-03-13)


### Features

* upgrade Web SDK to 1021 ([#246](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/246)) ([91ed290](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/91ed29037c3d0f1f49d4ce684020bb16cfa10f75))

# [2.5.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.4.0...v2.5.0) (2025-03-13)


### Features

* upgrade Web SDK to 1021 ([#246](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/246)) ([91ed290](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/91ed29037c3d0f1f49d4ce684020bb16cfa10f75))

# [2.4.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.3.0...v2.4.0) (2024-10-15)


### Bug Fixes

* adjust versions of angular packages ([7c074d7](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/7c074d71fb65aca431540341b301986de4876042))
* resubscribe on reconnect to different core node ([#222](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/222)) ([53f4a2e](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/53f4a2e1441a80e46a314e3281c0a928ffd8c355))
* use node 20 in semantic release workflow ([803542f](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/803542ff0bb73d4cece676108364446ce72ce787))


### Features

* upgrade nodered to version 4.0.5 ([#227](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/227)) ([21b676c](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/21b676ca67079d4f0fccb3414aee94597790b2ab))

# [2.4.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.3.0...v2.4.0) (2024-10-15)


### Bug Fixes

* adjust versions of angular packages ([7c074d7](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/7c074d71fb65aca431540341b301986de4876042))
* resubscribe on reconnect to different core node ([#222](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/222)) ([53f4a2e](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/53f4a2e1441a80e46a314e3281c0a928ffd8c355))


### Features

* upgrade nodered to version 4.0.5 ([#227](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/227)) ([21b676c](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/21b676ca67079d4f0fccb3414aee94597790b2ab))

# [2.3.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.2.4...v2.3.0) (2024-06-16)


### Bug Fixes

* ng upgrade ([#205](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/205)) ([9a9aa8c](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/9a9aa8c497cf5bcd4f22dee6ebbb20ad691f670c))


### Features

* upgrade to angular 17 and websdk 1020 ([#203](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/203)) ([0af7dd4](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/0af7dd45a0ff6c7d78ced6cc1f33f982a4ef388f))

## [2.2.4](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.2.3...v2.2.4) (2024-05-24)


### Bug Fixes

* set iframe src correctly ([f4b10cf](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/f4b10cf41f14616efa6b6017b2aa995b62b52f95))

## [2.2.3](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.2.2...v2.2.3) (2024-05-24)


### Bug Fixes

* add missing license into UI build ([2d82e20](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/2d82e20f3aa04dec6c6269cd21e262924719ee91))

## [2.2.2](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.2.1...v2.2.2) (2024-05-15)


### Bug Fixes

* **microservice:** resolve issue if microservice is installed for the first time on tenant ([c157e27](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/c157e277f8b1d41c6b3557671183781412ec4501))

## [2.2.1](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.2.0...v2.2.1) (2024-05-01)


### Bug Fixes

* add missing ui package to releases ([aef2ec5](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/aef2ec541e8e28aa5381a1d36d01015ebeb6e859))

# [2.2.0](https://github.com/Cumulocity-IoT/cumulocity-node-red/compare/v2.1.2...v2.2.0) (2024-05-01)


### Features

* restructure project ([#182](https://github.com/Cumulocity-IoT/cumulocity-node-red/issues/182)) ([ce91adc](https://github.com/Cumulocity-IoT/cumulocity-node-red/commit/ce91adc1335484092bdc27d92202cf63ee75faed))
