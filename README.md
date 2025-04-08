🎨 CSS-to-SASS Converter
A simple CLI tool and library to convert standard .css files into .scss (SASS) format. Ideal for developers looking to migrate CSS projects to SASS without manually editing stylesheets.

📦 Installation
Global (recommended for CLI use)
bash
npm install -g css-to-sass-converter,

Local (for project or library use)
bash
npm install css-to-sass-converter,

🚀 Usage
Convert a CSS file to SCSS

bash
css2sass styles.css,

By default, this will create a styles.scss file in the same directory.

🧪 Development Setup
Clone the Repo
bash
git clone https://github.com/your-username/css-to-sass-converter.git,

cd css-to-sass-converter,

Install Dependencies,

bash
npm install,

Test Conversion Script
bash
node bin/index.js styles.css,

Or use the test script:

bash
npm test,

🐛 Debugging Tips
If you're seeing errors like:

SyntaxError: Cannot use import statement outside a module

Make sure:

You're using Node.js 14+.

You have "type": "module" set in your package.json.

You run your script with node and not a non-module aware runner.

If you're getting a permission error:

bash
Permission denied or cannot execute
Make sure your CLI file is executable:

bash
chmod +x bin/index.js,

📁 Project Structure,

css-to-sass-converter/,

│
├── bin/
│   └── index.js         # CLI entry
├── lib/
│   └── converter.js     # Conversion logic
├── styles.css           # Sample input for testing
├── package.json
└── README.md
👨‍💻 Author
Dev Segun P. Omoni

📄 License
This project is licensed under the ISC License.

