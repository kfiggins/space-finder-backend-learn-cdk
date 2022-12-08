import { SpaceStack } from "./SpaceStack";
import * as cdk from "aws-cdk-lib";

const app = new cdk.App();
new SpaceStack(app, "Space-finder", { stackName: "SpaceFinder" });
