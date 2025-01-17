# 1. How to run and test the application
This guide provides instructions to set up and run your Expo project on iOS and Android platforms.

## Prerequisites
1. **Mobile Emulator or Device**:
   - **iOS**: Xcode must be installed for the iOS simulator.
   - **Android**: Install Android Studio and configure an emulator.
   - Alternatively, use a physical device with the Expo Go app installed.

## Steps to Run the Project
### 1. Load .env file
Please find the .env file in the zip file I sent.

### 2. Install Dependencies
Install all required dependencies by running:
```bash
npm install
```

### 3. Start the Expo Development Server

Start the development server by running command below, then select the platform you want:
```bash
npx expo start
``` 
---

## Or you can choose to run iOS or Android directly in the way below
### Running on iOS

#### Using iOS Simulator:
1. Ensure Xcode is installed and the simulator is set up.
2. Run the following command in your terminal:
   ```bash
   expo start --ios
   ```

#### Using a Physical iOS Device:
1. Install the Expo Go app from the App Store.
2. Scan the QR code displayed in the Expo Dev Tools using your device's camera.

---

### Running on Android

#### Using Android Emulator:
1. Open Android Studio and start a configured emulator.
3. Run the following command in your terminal:
   ```bash
   expo start --android
   ```

#### Using a Physical Android Device:
1. Install the Expo Go app from the Google Play Store.
2. Enable USB debugging on your device and connect it to your computer.
3. Scan the QR code displayed in the Expo Dev Tools using the Expo Go app.

---

## Resources

- [Expo Documentation](https://docs.expo.dev)

---

# 2. Reasoning Behind the Approach Taken
### Project Structure:
 - The project is organized into logical modules (api, components, constants, models, navigation, utils, views) to maintain separation of concerns, improve maintainability, and simplify testing.
### Use of Expo:
 - Using Expo simplifies development by providing built-in tools for testing, debugging, and deployment.
### TypeScript:
 - TypeScript improves code quality by enabling static type checking, which reduces runtime errors.
### Environment Variables:
 - Using .env for environment-specific variables ensures security and flexibility.

# 3. Assumptions Made
 - The API being consumed is a Giphy API.
 - The .env file contains required configurations: API keys, base URLs.
 - The application is primarily for mobile platforms and targets modern devices.

# 4. Total Time Taken
### Feature Breakdown:
1. Initial Setup & Environment Configuration: 15 minutes
2. Building Project Structure: 10 minutes
3. Install the necessary libraries: 15 minutes
4. Setting up API Integration (Giphy API): 10 minutes
4. Building Reusable Components: ~1 hours
5. Navigation Setup: 10 minutes
6. Building UI for each screen, fetch data and handle logic: ~2 hours
#### Total Time: ~4 hours

# 5. Solutions Relying on AI or Googling
1. API Integration:
Consulted official Giphy API documentation for endpoints and query parameters.
2. Expo Setup:
Referred to Expo documentation for app configuration and debugging tips.
