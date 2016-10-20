This is a base template for writing Serverless
services that run on AWS Lambda and NodeJS.

Setup
=====

1. Have serverless version 1.0.0-rc.2 or higher installed.
2. Run `npm init` in this directory.
3. Replace 'my-service' in `package.json` and `serverless.yml` with your service's name.
4. Make sure you have a proper aws profile set up in your `~/.aws/credentials` and set the name in `serverless.yml`.

Deployment
==========

`sls deploy -s <stage>`

Environment Variables
=====================

The `serverless.yml` file contains a `custom` block
with a `writeEnvVars` section which sets the enviroment
variables for this service's lambdas when they run.

IAM Role Statements
===================

Here are some basic statements you can add for
common use cases. Note that the `iamRoleStatements.json`
file is an array, that you place the following
type of objects into.


_Call Any Other Lambda in the Same AWS Account_
```json
{
  "Effect": "Allow",
  "Action": [
    "lambda:InvokeFunction"
  ],
  "Resource": "*"
}
```

_Do Anything with any DynamoDB Table in the Same AWS Account_
```json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:*"
  ],
  "Resource": "*"
}
```

_Do Anything with S3 in the Same AWS Account_
```json
{
  "Effect": "Allow",
  "Action": [
    "s3:*"
  ],
  "Resource": "*"
}
```