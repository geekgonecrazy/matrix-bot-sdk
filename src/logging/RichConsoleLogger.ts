import { ILogger } from "./ILogger";
import chalk from "chalk";

export class RichConsoleLogger implements ILogger {

    protected chalkDebug = chalk.cyan;
    protected chalkInfo = chalk.green;
    protected chalkWarning = chalk.yellow;
    protected chalkError = chalk.bold.red;
    protected chalkTimestamp = chalk.grey;
    protected chalkModule = chalk.grey;

    protected getTimestamp(): string {
        const now = new Date(Date.now()).toUTCString();
        return this.chalkTimestamp(now);
    }

    public debug(module: string, ...messageOrObject: any[]) {
        console.debug(
            this.getTimestamp(),
            this.chalkDebug("[DEBUG]"),
            this.chalkModule(`[${module}]`),
            ...messageOrObject,
        );
    }

    public error(module: string, ...messageOrObject: any[]) {
        console.error(
            this.getTimestamp(),
            this.chalkError("[ERROR]"),
            this.chalkModule(`[${module}]`),
            ...messageOrObject,
        );
    }

    public info(module: string, ...messageOrObject: any[]) {
        console.log(
            this.getTimestamp(),
            this.chalkInfo("[INFO]"),
            this.chalkModule(`[${module}]`),
            ...messageOrObject,
        );
    }

    public warn(module: string, ...messageOrObject: any[]) {
        console.warn(
            this.getTimestamp(),
            this.chalkWarning("[WARN]"),
            this.chalkModule(`[${module}]`),
            ...messageOrObject,
        );
    }

}