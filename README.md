# **ioncap-starter-kit**

## **Introduction**
**ioncap-starter-kit** is a foundational project aimed at demonstrating the integration of Ionic React and Capacitor to build native mobile and desktop applications. This starter kit supports iOS, Android, Electron, and web platforms, serving as a learning resource to help developers get started with these technologies.

## **Features**
- **Ionic React framework** for building cross-platform applications.
- **Capacitor** for deploying the application on native mobile platforms like iOS and Android.
- **Electron** for building desktop applications.
- **Sample code** for basic application setup and configuration.

## **Prerequisites**
Before you begin, ensure you have the following installed:
- **Node.js** (version 14.x or later)
- **Ionic CLI**
- **Capacitor CLI**
- **Electron** (if building for desktop)

## **Installation**
Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Iryna-Vyshniak/ioncap-starter-kit.git
    cd ioncap-starter-kit
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

## **Usage**

### **Running the Development Server**
To start the development server, run:
```bash
ionic serve
 ```
This command will launch the application in your default web browser at http://localhost:8100.


Building the Application
To build the application, run:

```bash
ionic build
```

This will generate a www directory with the compiled application.

Adding Platforms
To add iOS, Android, and Electron platforms, run:

```bash
ionic cap add ios
ionic cap add android
ionic cap add @capacitor-community/electron
```

Copying Assets
After building the application, copy the web assets to the native projects:

```bash
ionic cap copy
```

Opening IDE for Native Projects
To open the native projects in their respective IDEs, run:

```bash
npx cap open ios
npx cap open android
npx cap open @capacitor-community/electron
```

Running on Android
For running the app on an Android device/emulator with live reload:

```bash
ionic cap run android -l --external
```
Running on iOS
For running the app on an iOS device/emulator with live reload:

```bash
ionic cap run ios -l --external
```

Running on Electron
To start the Electron app, run:

```bash
npx cap open @capacitor-community/electron
```

### **Project on Android Platform**
Below is a screenshot showcasing the app running on the Android platform:
![Screenshot](/assets/screenshots/collage.jpg)

### **Project Structure**
Here is an overview of the project's directory structure:

```plaintext
ioncap-starter-kit/
├── android/                    # Android native project
├── electron/                   # Electron desktop project
├── ios/                        # iOS native project
├── public/                     # Public assets
├── src/                        # Source code for the Ionic application
│   ├── assets/                 # Asset files
│   ├── components/             # React components
│   │   ├── ExploreContainer.tsx
│   │   ├── List.tsx
│   │   ├── ListSkeleton.tsx
│   │   ├── Menu.tsx
│   │   ├── Settings.tsx
│   │   ├── Tab2.tsx
│   │   ├── UserModal.tsx
│   │   └── UserSkeleton.tsx
│   ├── pages/                  # Page components
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Menu.tsx
│   ├── theme/                  # Theme files
│   │   ├── variables.css
│   │   └── main.css
│   ├── App.tsx                 # Main App component
│   └── index.tsx               # Entry point
├── .vscode/                    # VSCode configuration
├── .gitignore                  # Git ignore file
├── capacitor.config.ts         # Capacitor configuration
├── ionic.config.json           # Ionic configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation

```

### **Contributing**
Contributions are welcome! Please follow these steps to contribute:

``` bash
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature-name).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature-name).
- Open a Pull Request.
- Please ensure your code follows the project's coding standards and passes all tests.
```

