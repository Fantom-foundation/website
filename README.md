<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://fantom.foundation/">
    <h1 align="center">
       Fantom Foundation
    </h1>
  </a>
</p>


Fantom is a distributed ledger technology stack. At its foundation, it is a DAG-based distributed ledger incorporating new methods of scalability, combined with a high-performance virtual machine and safe, secure smart contract execution.


## 🚀 Quick start

1.  **Clone repository from git.**

    Use the  CLI to clone website.

    ```shell
    # create a new folder and clone website
    git clone https://github.com/Fantom-foundation/website.git
    ```

1.  **Start server loacally.**

    Navigate into your  directory and start it up.

    ```shell
    cd website/
    npm install
    npm start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. 


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  To edit content all the files avaliable in  src component folder

5. To edit content or text goto folder intl folder
     ```shell
        en.json: for english version
        ko.json: for korean version
        zh.json: for chinese version
      ```

6. To Deploy : Configure aws https://linuxhint.com/install_aws_cli_ubuntu/ follow this link install awscli and configure
    
     ```shell
    aws configure
    AWS Access Key ID [****************ZX3Q]: XXXXXXXXXXX
    AWS Secret Access Key [****************67hz]:  XXXXXXX
    Default region name [us-east-2]: us-east-2
    Default output format [json]: json

    ```
7. Deploy to server: 

    ```shell
    npm run deploy:dev
    ```


8. If you see this error  

```
"window" is not available during server side rendering.
 ```
 Then goto src/components/wow and open wow.js, copy the code and paste that code into node_modules/wowjs/dist/wow.js 
 There is a error in new update of wow.js module.