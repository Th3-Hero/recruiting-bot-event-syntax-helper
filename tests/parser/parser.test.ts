import {describe, expect, it} from 'vitest';
import {parse} from '../../src/lib/parser';
import { ParsingError } from "../../src/lib/ParsingError";

describe('clans matches', () => {

    // Valid
    it('TAG', () => {
        expect(parse("clans matches ExampleClan")).toBe(true);
    });
    it('(TAG or TAG)', () => {
        expect(parse("clans matches (ExampleClan1 or ExampleClan2)")).toBe(true);
    });
    it('(TAG and TAG)', () => {
        expect(parse("clans matches (ExampleClan1 and ExampleClan2)")).toBe(true);
    });
    it('((TAG and TAG) or TAG)', () => {
        expect(parse("clans matches ((ExampleClan1 and ExampleClan2) or ExampleClan3)")).toBe(true);
    });
    it('(((TAG and TAG) or TAG) and TAG))', () => {
        expect(parse("clans matches (((ExampleClan1 and ExampleClan2) or ExampleClan3) and ExampleClan4)")).toBe(true);
    });
    it('any (TAG, TAG, TAG)', () => {
        expect(parse("clans matches any (ExampleClan1, ExampleClan2, ExampleClan3)")).toBe(true);
    });
    it('any (TAG, TAG, TAG) and TAG', () => {
        expect(parse("clans matches (any (ExampleClan1, ExampleClan2, ExampleClan3) and ExampleClan4)")).toBe(true);
    });
    it('all (TAG, TAG, TAG)', () => {
        expect(parse("clans matches all (ExampleClan1, ExampleClan2, ExampleClan3)")).toBe(true);
    });
    it('all (TAG, TAG, TAG) or TAG', () => {
        expect(parse("clans matches (all (ExampleClan1, ExampleClan2, ExampleClan3) or ExampleClan4)")).toBe(true);
    });

    // Invalid
    it('(TAG)', () => {
        expect(() => parse("clans matches (ExampleClan)")).toThrow(ParsingError);
    });
    it('(TAG and TAG', () => {
        expect(() => parse("clans matches (ExampleClan1 and ExampleClan2")).toThrow(ParsingError);
    });
    it('TAG and TAG)', () => {
        expect(() => parse("clans matches ExampleClan1 and ExampleClan2)")).toThrow(ParsingError);
    });
    it('TAG and/or TAG', () => {
        expect(() => parse("clans matches ExampleClan1 and ExampleClan2")).toThrow(ParsingError);
        expect(() => parse("clans matches ExampleClan1 or ExampleClan2")).toThrow(ParsingError);
    });
    it('TAG TAG', () => {
        expect(() => parse("clans matches ExampleClan1 ExampleClan2")).toThrow(ParsingError);
    });
    it('TAG and/or and/or TAG', () => {
        expect(() => parse("clans matches and and")).toThrow(ParsingError);
        expect(() => parse("clans matches or or")).toThrow(ParsingError);
        expect(() => parse("clans matches TAG and and TAG")).toThrow(ParsingError);
        expect(() => parse("clans matches TAG or or TAG")).toThrow(ParsingError);
    });
    it('TAG or/and', () => {
        expect(() => parse("clans matches ExampleClan1 or")).toThrow(ParsingError);
        expect(() => parse("clans matches ExampleClan1 and")).toThrow(ParsingError);
    });
    it('TAG or TAG and', () => {
        expect(() => parse("clans matches ExampleClan1 or ExampleClan2 and")).toThrow(ParsingError);
    });
    it('any TAG, TAG', () => {
        expect(() => parse("clans matches any ExampleClan1 ExampleClan2")).toThrow(ParsingError);
    });
    it('all TAG, TAG', () => {
        expect(() => parse("clans matches all ExampleClan1 ExampleClan2")).toThrow(ParsingError);
    });
    it('any (TAG, TAG) or TAG', () => {
        expect(() => parse("clans matches any (ExampleClan1, ExampleClan2) or ExampleClan3")).toThrow(ParsingError);
    });

});

describe('vote matches', () => {
    // valid
    it('NAME SERVER', () => {
        expect(parse("vote matches name na")).toBe(true);
    });
    it('(NAME SERVER or NAME SERVER)', () => {
        expect(parse("vote matches (name na or name eu)")).toBe(true);
    });
    it('((NAME SERVER and NAME SERVER) and NAME SERVER)', () => {
        expect(parse("vote matches ((name na or name eu) or name eu)")).toBe(true);
    });

    // invalid
    it('(NAME SERVER)', () => {
        expect(() => parse("vote matches (name na)")).toThrow(ParsingError);
    });
    it('((NAME or NAME) SERVER)', () => {
        expect(() => parse("vote matches (name1 or name2) na")).toThrow(ParsingError);
    });
    it('NAME SERVER or', () => {
        expect(() => parse("vote matches name na or")).toThrow(ParsingError);
    });
    it('NAME NAME', () => {
        expect(() => parse("vote matches name1 name2")).toThrow(ParsingError);
    });
});