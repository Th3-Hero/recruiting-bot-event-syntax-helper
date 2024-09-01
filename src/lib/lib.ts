import { parse } from "./parser";
import { ParsingError } from "./ParsingError";

export const getItemClass = (item: string) => {
    if (item === "(" || item === ")") {
        return "parenthesis";
    } else if (["or", "and"].includes(item)) {
        return "operator";
    } else {
        return "text";
    }
};

export const isValidClanTag = (tag: string): boolean => {
    const regex = /^[A-Za-z0-9_-]{2,5}$/;
    return regex.test(tag);
}

export const isValidPlayerName = (name: string): boolean => {
    const regex = /^[A-Za-z0-9_]{3,24}$/;
    return regex.test(name);
}

export enum EventType {
    CLAN = "clans matches",
    VOTE = "vote matches"
}

/**
 *
 * @throws {ParsingError} Throws an error if failed to generate a valid condition based on the given array.
 */
export const generateListCondition = (arr: string[], type: EventType): string =>{
    if (arr.length === 0) {
        throw new ParsingError("Condition list is empty");
    }
    if (arr.length === 1) {
        let condition = `${ type } ${ arr[0] }`;
        parse(condition);
        return condition;
    }
    let condition = `${ type } any (${ arr.join(", ") })`;
    parse(condition);
    return condition;
};

/**
 * Build a condition string based on the UI input
 * @throws {ParsingError} Throws an error if failed to generate a valid condition based on the given array.
 */
export const buildCondition = (arr: string[], type: EventType): string => {
    if (arr.length === 0) {
        throw new ParsingError("Condition list is empty");
    }

    if (arr.length === 1) {
        let condition = `${ type } ${ arr[0] }`;
        parse(condition);
        return condition;
    }

    let condition = "";
    for (let item of arr) {
        if (item === "or" || item === "and") {
            condition += ` ${ item } `;
        } else if (item.startsWith("and") || item.startsWith("or")) {
            condition += ` ${ item }`;
        } else {
            condition += item;
        }
    }
    let string = `${ type } (${ condition })`;
    parse(string);
    return string;
}