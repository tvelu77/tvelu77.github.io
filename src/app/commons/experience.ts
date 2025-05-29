import { Location } from "./location";
import { Period } from "./period";

export class Experience {

  constructor(readonly title: string,
    readonly location: Location,
    readonly period: Period,
    readonly description: string,
    readonly details: string[],
    readonly type: string) {}

}
