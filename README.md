# ChatApp

## Overview
ChatApp is a real-time messaging application that requires both a client and server to function. The server-side code can be found at [ChatAppServer](https://github.com/Kazamaki76/ChatAppServer). After installing and running the server, you can open the client in multiple browser tabs to send messages in real-time.

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation

### Server Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Kazamaki76/ChatAppServer.git
    ```
2. Navigate to the server directory:
    ```bash
    cd ChatAppServer
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```

### Client Setup
1. Clone the client repository (assuming you have a separate client repository or files).
    ```bash
    git clone <client-repo-url>
    ```
2. Navigate to the client directory:
    ```bash
    cd ChatAppClient
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the client:
    ```bash
    npm start
    ```

## Running the Application
1. Ensure the server is running.
2. Open your browser and navigate to the client URL (e.g., `http://localhost:3000`).
3. Open a second browser tab or a private tab and navigate to the same client URL.
4. You can now send messages between the tabs in real-time.

## Usage
1. Type your message in the input field.
2. Press `Enter` or click the send button to send your message.
3. The message will appear in real-time in all open tabs.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


