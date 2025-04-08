
CSS to Sass Converter

This package allows you to convert CSS files into Sass syntax (`.scss`) through a simple command-line tool. Below are the steps to install, run, and debug the tool.

Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Debugging](#debugging)
- [Troubleshooting](#troubleshooting)


Installation

Follow these steps to install and use the `css2sass` package.

1. Clone the Repository

If you haven't already, start by cloning the repository to your local machine:

```bash
git clone https://github.com/yourusername/css-to-sass-converter.git
cd css-to-sass-converter
```

2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

This will install all the required dependencies defined in `package.json`.
3. Link the Package Globally (Optional)

If you want to be able to use `css2sass` from anywhere on your system, you can link the package globally using the following command:

```bash
npm link
```

This will create a global symlink for the package, allowing you to run the `css2sass` command from any terminal window.



 Usage

Once the package is installed and linked, you can use the `css2sass` command to convert a CSS file into Sass.

1. Run the Command

Use the following syntax to run the tool:

```bash
css2sass <input-file> <output-file>
```

Example:

```bash
css2sass styles.css styles.scss
```

This will read the contents of `styles.css`, convert it into Sass format, and save it in `styles.scss`.

2. Command Line Arguments

- `<input-file>`: The path to the `.css` file you want to convert.
- `<output-file>`: The path where the converted `.scss` file should be saved.



Debugging

If you encounter issues while using the tool, you can follow these steps to troubleshoot:

1. Check for Errors

If an error occurs when you run the `css2sass` command, carefully check the output message. Errors are often caused by:

- Missing files or incorrect paths
- Incorrect syntax in the CSS file
- Missing or incorrect package dependencies

2. Check `package.json` for Bin Configuration

Ensure the `bin` configuration in `package.json` is correct:

```json
"bin": {
  "css2sass": "./bin/index.js"
}
```

The `css2sass` entry should point to the correct file that handles the conversion logic.

3. Verify Executable Permissions

If you’re on a Unix-based system (Linux/macOS), ensure that your `index.js` file has executable permissions:

```bash
chmod +x bin/index.js
```

4. Check the Global Bin Path

If you’ve linked the package globally but it’s still not working, verify the global bin directory:

```bash
npm bin -g
```

Ensure that the `css2sass` command is available in the global bin directory.

5. Reinstall the Package

If nothing else works, try uninstalling and reinstalling the package globally:

1. Unlink the current global package:

   ```bash
   npm unlink -g css-to-sass-converter
   ```

2. Reinstall the package globally:

   ```bash
   npm install -g .
   ```



Troubleshooting

If you still face issues after following the above steps, check the following common problems:

1. Command Not Found

- If the `css2sass` command is not recognized, ensure that you've run `npm link` to link the package globally, or check the global installation path using `npm bin -g`.

2. Errors Related to Node.js or npm

- Make sure you have the latest version of Node.js and npm installed. Update them if necessary:

  ```bash
  node -v
  npm -v
  ```

  If they are outdated, download the latest versions from the official [Node.js website](https://nodejs.org/).

3. Permissions Issues

- Ensure that your project files have the correct permissions to be executed. On Unix-based systems, you can use the `chmod +x` command to make the script executable.


License

This package is licensed under the MIT License. See the LICENSE file for more information.


