import { ArrayCommand } from "@/entity/adapter/ArrayAdapter";
import { BaseCommand } from "@/entity/adapter/CommonAdapter";

export type Command = BaseCommand | ArrayCommand;
