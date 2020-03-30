# BeSafe

BeSafe is a React Native App to health, with a purpose to help people in a pandemic.

## Pre-requirements

#### GIT Flow

It's used as a standard for using GIT. The following branches are used:

| Branch name | Description                             |
| ----------- | --------------------------------------- |
| master      | for production version                  |
| develop     | for the development of the next version |
| feature     | for new feature                         |
| bugfix      | for bug fixes                           |
| release     | for next version                        |
| hotfix      | for bug fixes in production             |
| support     | for bug fixing in old versions          |

To learn more about GIT Flow visit
[this article](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04).

### Android

To run the application, you will need the latest version of
[Android Studio](https://developer.android.com/studio).

### iOS

To run the application, you will need the latest version of
[Xcode](https://apps.apple.com/br/app/xcode/id497799835).

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install dependencies.

```bash
yarn install
```

### iOS

Use the package manager [CocoaPods](https://cocoapods.org/) to install dependencies.

```bash
cd ios
pod install
```

## Build

### Android

To run the application, open [Android Studio](https://developer.android.com/studio), select the
project and start for the build.

or

```bash
yarn start
yarn run-android
```

### iOS

To run the application, open [Xcode](https://apps.apple.com/br/app/xcode/id497799835), select the
project and start for the build.

or

```bash
yarn start
yarn run-ios
```

## Standardization Tips

### Importing dependencies.

The project is following this import pattern:

1. react
2. react-native
3. react components
4. settings.
5. styled-components.

#### Example:

```Javascript
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Button from 'components/core/Button';

import COLORS from 'config/colors';

import { LabelContainer, ButtonContainer, FormContainer, Container } from './styles';
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would
like to change.

Please make sure to update the tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
