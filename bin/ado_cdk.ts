#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AdoCdkStack } from '../lib/ado_cdk-stack';

const app = new cdk.App();
new AdoCdkStack(app, 'AdoCdkStack');
