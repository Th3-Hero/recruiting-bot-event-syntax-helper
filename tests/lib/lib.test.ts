import { describe, expect, it } from 'vitest';
import { EventType, generateListCondition } from "../../src/lib/lib";
import { ParsingError } from "../../src/lib/ParsingError";

describe('Clan events', () => {

    it('Single clan', () => {
        const arr = ["ExampleClan"];
        const expected = "clans matches ExampleClan";
        expect(generateListCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Two clans with OR operator', () => {
        const arr = ["ExampleClan1", "or", "ExampleClan2"];
        const expected = "clans matches (ExampleClan1 or ExampleClan2)";
        expect(generateListCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Two clans with AND operator', () => {
        const arr = ["ExampleClan1", "and", "ExampleClan2"];
        const expected = "clans matches (ExampleClan1 and ExampleClan2)";
        expect(generateListCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Three clans with OR operator', () => {
        const arr = ["ExampleClan1", "or", "ExampleClan2", "or", "ExampleClan3"];
        const expected = "clans matches (ExampleClan1 or (ExampleClan2 or ExampleClan3))";
        expect(generateListCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Three clans with AND operator', () => {
        const arr = ["ExampleClan1", "and", "ExampleClan2", "and", "ExampleClan3"];
        const expected = "clans matches (ExampleClan1 and (ExampleClan2 and ExampleClan3))";
        expect(generateListCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Three clans with mixed operators', () => {
        const arr = ["ExampleClan1", "or", "ExampleClan2", "and", "ExampleClan3"];
        const expected = "clans matches (ExampleClan1 or (ExampleClan2 and ExampleClan3))";
        expect(generateListCondition(arr, EventType.CLAN)).toBe(expected);
    });

    it('Empty array', () => {
        expect(() => generateListCondition([], EventType.CLAN))
            .toThrow("Condition list is empty");
    });
    it('invalid array for valid condition', () => {
        expect(() => generateListCondition(["ExampleClan1", "ExampleClan2"], EventType.CLAN))
            .toThrow("Invalid condition for parsing");
        expect(() => generateListCondition(["ExampleClan1", "and", "or"], EventType.CLAN))
            .toThrow(ParsingError);
    });
});

describe('Vote events', () => {

    it('Single vote', () => {
        const arr = ["name na"];
        const expected = "vote matches name na";
        expect(generateListCondition(arr, EventType.VOTE)).toBe(expected);
    });
    it('Two votes with OR operator', () => {
        const arr = ["name na", "or", "name eu"];
        const expected = "vote matches (name na or name eu)";
        expect(generateListCondition(arr, EventType.VOTE)).toBe(expected);
    });
    it('Three votes with OR operator', () => {
        const arr = ["name na", "or", "name eu", "or", "name eu"];
        const expected = "vote matches (name na or (name eu or name eu))";
        expect(generateListCondition(arr, EventType.VOTE)).toBe(expected);
    });

    it('Empty array', () => {
        expect(() => generateListCondition([], EventType.VOTE))
            .toThrow("Condition list is empty");
    });
    it('invalid array for valid condition', () => {
        expect(() => generateListCondition(["name na", "name eu"], EventType.VOTE))
            .toThrow("Invalid condition for parsing");
        expect(() => generateListCondition(["name na", "or", "and"], EventType.VOTE))
            .toThrow(ParsingError);
        expect(() => generateListCondition(["name na", "or"], EventType.VOTE))
            .toThrow(ParsingError);
        expect(() => generateListCondition(["name na", "and"], EventType.VOTE))
            .toThrow(ParsingError);
    });
    it('and operator', () => {
        expect(() => generateListCondition(["name na", "and", "name eu"], EventType.VOTE))
            .toThrow(ParsingError);
    });
});