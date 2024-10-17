import { describe, expect, it } from 'vitest';
import { buildCondition, EventType, generateListCondition } from "../../src/lib/lib";
import { ParsingError } from "../../src/lib/ParsingError";

describe('Clan events', () => {
    it('Empty array', () => {
        expect(() => buildCondition([], EventType.CLAN))
            .toThrow("Condition list is empty");
    });
    it('invalid array for valid condition', () => {
        expect(() => buildCondition(["ExampleClan1", "ExampleClan2"], EventType.CLAN))
            .toThrow();
        expect(() => buildCondition(["ExampleClan1", "and", "or"], EventType.CLAN))
            .toThrow(ParsingError);
    });

    it('Single clan', () => {
        const arr = ["ExampleClan"];
        const expected = "clans matches ExampleClan";
        expect(buildCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Two clans with OR operator', () => {
        const arr = ["ExampleClan1", "or", "ExampleClan2"];
        const expected = "clans matches (ExampleClan1 or ExampleClan2)";
        expect(buildCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Two clans with AND operator', () => {
        const arr = ["ExampleClan1", "and", "ExampleClan2"];
        const expected = "clans matches (ExampleClan1 and ExampleClan2)";
        expect(buildCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Three clans with OR operator', () => {
        const arr = ["ExampleClan1", "or", "(", "ExampleClan2", "or", "ExampleClan3", ")"];
        const expected = "clans matches (ExampleClan1 or (ExampleClan2 or ExampleClan3))";
        expect(buildCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Three clans with AND operator', () => {
        const arr = ["ExampleClan1", "and", "(", "ExampleClan2", "and", "ExampleClan3", ")"];
        const expected = "clans matches (ExampleClan1 and (ExampleClan2 and ExampleClan3))";
        expect(buildCondition(arr, EventType.CLAN)).toBe(expected);
    });
    it('Three clans with mixed operators', () => {
        const arr = ["ExampleClan1", "or", "(", "ExampleClan2", "and", "ExampleClan3", ")"];
        const expected = "clans matches (ExampleClan1 or (ExampleClan2 and ExampleClan3))";
        expect(buildCondition(arr, EventType.CLAN)).toBe(expected);
    });
});

describe('Vote events', () => {
    it('Empty array', () => {
        expect(() => buildCondition([], EventType.VOTE))
            .toThrow("Condition list is empty");
    });

    it('Single vote', () => {
        const arr = ["name na"];
        const expected = "vote matches name na";
        expect(buildCondition(arr, EventType.VOTE)).toBe(expected);
    });
    it('Two votes with OR operator', () => {
        const arr = ["name na", "or", "name eu"];
        const expected = "vote matches (name na or name eu)";
        expect(buildCondition(arr, EventType.VOTE)).toBe(expected);
    });
    it('Three votes with OR operator', () => {
        const arr = ["name na", "or", "(", "name eu", "or", "name eu", ")"];
        const expected = "vote matches (name na or (name eu or name eu))";
        expect(buildCondition(arr, EventType.VOTE)).toBe(expected);
    });
});

describe('generateListCondition for clans', () => {
    it('Empty array', () => {
        expect(() => generateListCondition([]))
            .toThrow("Condition list is empty");
    });

    it('Single clan', () => {
        const arr = ["ExampleClan"];
        const expected = "clans matches ExampleClan";
        expect(generateListCondition(arr)).toBe(expected);
    });

    it('Two clans', () => {
        const arr = ["ExampleClan1", "ExampleClan2"];
        const expected = "clans matches any (ExampleClan1, ExampleClan2)";
        expect(generateListCondition(arr)).toBe(expected);
    });

    it('Three clans', () => {
        const arr = ["ExampleClan1", "ExampleClan2", "ExampleClan3"];
        const expected = "clans matches any (ExampleClan1, ExampleClan2, ExampleClan3)";
        expect(generateListCondition(arr)).toBe(expected);
    })
});