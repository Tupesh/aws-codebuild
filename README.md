# AWS CodeBuild Sample Application

A simple Node.js Express application configured for deployment using AWS CodeBuild and CodeDeploy.

## Project Structure

```
.
├── server.js              # Main Express application
├── package.json           # Node.js dependencies
├── buildspec.yml          # AWS CodeBuild configuration
├── appspec.yml            # AWS CodeDeploy configuration
├── scripts/               # Deployment scripts
│   ├── install_dependencies.sh
│   ├── start_server.sh
│   └── validate_service.sh
└── README.md              # This file
```

## Features

- ✅ Simple Express.js server
- ✅ Beautiful deployment confirmation page
- ✅ Health check endpoint (`/health`)
- ✅ AWS CodeBuild integration (buildspec.yml)
- ✅ AWS CodeDeploy integration (appspec.yml)
- ✅ Deployment scripts for EC2 instances

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm package manager

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

The application will run on `http://localhost:3000`

### Development Mode

For development with auto-reload:

```bash
npm run dev
```

## API Endpoints

- **GET /**: Main page with deployment confirmation
- **GET /health**: Health check endpoint (returns JSON status)

## AWS Deployment

### Prerequisites
- AWS Account
- CodeBuild project configured
- CodeDeploy application and deployment group
- EC2 instance(s) with CodeDeploy agent installed
- CodeBuild and CodeDeploy IAM permissions

### CodeBuild Configuration

The `buildspec.yml` file defines the build process:

1. **Install Phase**: Installs Node.js 18 and npm dependencies
2. **Pre-build Phase**: Runs tests
3. **Build Phase**: Builds the application
4. **Post-build Phase**: Prepares for deployment

### CodeDeploy Configuration

The `appspec.yml` file defines the deployment process:

1. **BeforeInstall**: Installs system dependencies
2. **AfterInstall**: Sets up the application
3. **ApplicationStart**: Starts the application
4. **ValidateService**: Validates the deployment

### Deployment Scripts

#### `scripts/install_dependencies.sh`
Installs system-level dependencies and Node.js on the EC2 instance.

#### `scripts/start_server.sh`
Installs npm dependencies and starts the application using PM2.

#### `scripts/validate_service.sh`
Validates that the application is running correctly.

## Environment Variables

The application respects the following environment variable:

- `PORT`: Server port (default: 3000)

Example:
```bash
PORT=8080 npm start
```

## Troubleshooting

### Application won't start
- Check that Node.js 18+ is installed
- Ensure port 3000 is not in use
- Run `npm install` to ensure dependencies are installed

### CodeBuild failures
- Check CodeBuild logs in AWS Console
- Verify buildspec.yml syntax
- Ensure IAM permissions are correct

### CodeDeploy failures
- Check CodeDeploy agent is running on EC2 instances
- Verify appspec.yml syntax
- Check deployment scripts permissions
- Review CodeDeploy logs in AWS Console

## License

MIT

## Support

For issues with AWS CodeBuild and CodeDeploy, refer to:
- [AWS CodeBuild Documentation](https://docs.aws.amazon.com/codebuild/)
- [AWS CodeDeploy Documentation](https://docs.aws.amazon.com/codedeploy/)
