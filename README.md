# Personal Website

Hello. This repository contains my personal website.

My personal website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

To install and run this on your own device:

1. Clone this repository.

    ```shell
    git clone https://github.com/kevin8999/kevin8999.github.io
    ```

2. Change into the project directory.

    ```shell
    cd kevin8999.github.io/
    ```

3. Install project dependencies.

    ```shell
    npm install
    ```

4. Run the project.

    ```shell
    npm run start
    ```

The project should now be running at http://localhost:3000/.

## Deploying

> [!note]
> Before deploying make sure to run:
> 
> ```shell
> npm run start
> ```
> 
> and ensure that the preview website looks the way you want it to.

To deploy to a remote server:

1. Build the website.

    ```shell
    npm run build
    ```

2. Test the website locally. **Ensure ALL changes are correct before proceeding to the next step!**

    ```shell
    npm run serve
    ```

3. Deploy to GitHub Pages.

    ```shell
    npm run deploy
    ```
