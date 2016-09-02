# react-native-mobix-relay-apolo

## Goal

Create a seed project with the following tech:
 - react-native
 - mobix
 - graphQL
 - relay
 - apolo

that adopts the concepts proposed by mantra js
these concepts are around how to structure a UI application and UI modules

"One of" the benefits of using react-native is the **opportunity** to share code amongst iOS, Android and web mobile implementations.

The mobile app for these 3 platforms will share most *features* (+/- 95%). The 5% correspond to the features that are specific to the platform.

As a result of the % of code sharing/reuse also improves and grows, but it is not % :) . Other metrics also improve: maintainability, testing especially automated testing.

In summary that brings a lot of value and benefits for the software development cycle and the product lifetime.

In order to take this **opportunity**, we need to first "be able to".

## Hypothesis
The hypothesis is that by using the principles and concepts from mantra js we will be able to have UI modules that contain:
 - common js code (reducers, basic app wiring, layout, data massage, components communication and etc.)
 - common UI resources (images, icons and etc)
 - iOS native code
 - Android native code
 - CSS, Images and any content for web mobile.
 -

## Success measure
1. Simplicity (all tech fits together in a nice and easy to develop and maintain way)
2. Robust
3. ...
4.

## Plan/Ideas/Approach

 - Create a react-native app that uses the mantra structure.
 - Fork mantrajs and make it mobile friendly - mantrajs was created for the web and has web concepts. we need to re-think mantra for mobile apps .. that also works for web mobile :) (e.g. routes? we don't have these in mobile apps.)
 - ....
 -

## How to contribute
 1. Get out of the couch
 2. clone this repository
 3. have fun
 4. send pull requests
