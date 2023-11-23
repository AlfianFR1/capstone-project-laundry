# Express Backend

## Installation

1. Go to the backend folder

```bash
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Copy the .env.example file to .env

```bash
cp .env.example .env
```

4. Set the environment variables in .env

```

APP_NAME = Vocasia Backend Framework
APP_PORT = 3000
APP_URL = http://localhost
NODE_ENV=development

# database
DB_HOST=127.0.0.1
DB_DRIVER=mysql
DB_NAME=vocasia
DB_USER=root
DB_PASS=root
DB_PORT=3306

```

5. Run the app

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to generate controller

1. Run the command below in backend folder

```bash
npm run generate-controller <your_controller_name>
```

2. The controller will be generated in the controllers folder
