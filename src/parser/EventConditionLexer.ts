// Generated from ./src/parser/gen/EventCondition.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
    ATN,
    ATNDeserializer,
    CharStream,
    DFA,
    Lexer,
    LexerATNSimulator,
    RuleContext,
    PredictionContextCache,
    Token,
} from "antlr4";

export default class EventConditionLexer extends Lexer {
    public static readonly AND = 1;
    public static readonly OR = 2;
    public static readonly MATCHES = 3;
    public static readonly CLANS = 4;
    public static readonly VOTES = 5;
    public static readonly NA = 6;
    public static readonly EU = 7;
    public static readonly ASIA = 8;
    public static readonly LPAREN = 9;
    public static readonly RPAREN = 10;
    public static readonly TEXT = 11;
    public static readonly WS = 12;
    public static readonly EOF = Token.EOF;

    public static readonly channelNames: string[] = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
    public static readonly literalNames: (string | null)[] = [null, null,
        null, null,
        null, null,
        null, null,
        null, "'('",
        "')'"];
    public static readonly symbolicNames: (string | null)[] = [null, "AND",
        "OR", "MATCHES",
        "CLANS", "VOTES",
        "NA", "EU",
        "ASIA", "LPAREN",
        "RPAREN", "TEXT",
        "WS"];
    public static readonly modeNames: string[] = ["DEFAULT_MODE",];

    public static readonly ruleNames: string[] = [
        "AND", "OR", "MATCHES", "CLANS", "VOTES", "NA", "EU", "ASIA", "LPAREN",
        "RPAREN", "TEXT", "WS",
    ];


    constructor(input: CharStream) {
        super(input);
        this._interp = new LexerATNSimulator(this, EventConditionLexer._ATN, EventConditionLexer.DecisionsToDFA, new PredictionContextCache());
    }

    public get grammarFileName(): string {
        return "EventCondition.g4";
    }

    public get literalNames(): (string | null)[] {
        return EventConditionLexer.literalNames;
    }

    public get symbolicNames(): (string | null)[] {
        return EventConditionLexer.symbolicNames;
    }

    public get ruleNames(): string[] {
        return EventConditionLexer.ruleNames;
    }

    public get serializedATN(): number[] {
        return EventConditionLexer._serializedATN;
    }

    public get channelNames(): string[] {
        return EventConditionLexer.channelNames;
    }

    public get modeNames(): string[] {
        return EventConditionLexer.modeNames;
    }

    public static readonly _serializedATN: number[] = [4, 0, 12, 78, 6, -1, 2, 0, 7,
        0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7,
        9, 2, 10, 7, 10, 2, 11, 7, 11, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
        2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 6, 1,
        6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 4, 10, 68, 8, 10, 11, 10, 12, 10,
        69, 1, 11, 4, 11, 73, 8, 11, 11, 11, 12, 11, 74, 1, 11, 1, 11, 0, 0, 12, 1, 1, 3, 2, 5, 3, 7, 4, 9,
        5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 1, 0, 17, 2, 0, 65, 65, 97, 97, 2, 0, 78, 78,
        110, 110, 2, 0, 68, 68, 100, 100, 2, 0, 79, 79, 111, 111, 2, 0, 82, 82, 114, 114, 2, 0, 77, 77,
        109, 109, 2, 0, 84, 84, 116, 116, 2, 0, 67, 67, 99, 99, 2, 0, 72, 72, 104, 104, 2, 0, 69, 69, 101,
        101, 2, 0, 83, 83, 115, 115, 2, 0, 76, 76, 108, 108, 2, 0, 86, 86, 118, 118, 2, 0, 85, 85, 117,
        117, 2, 0, 73, 73, 105, 105, 5, 0, 45, 45, 48, 57, 65, 90, 95, 95, 97, 122, 3, 0, 9, 10, 12, 13,
        32, 32, 79, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0,
        11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0,
        0, 0, 0, 23, 1, 0, 0, 0, 1, 25, 1, 0, 0, 0, 3, 29, 1, 0, 0, 0, 5, 32, 1, 0, 0, 0, 7, 40, 1, 0, 0, 0, 9,
        46, 1, 0, 0, 0, 11, 51, 1, 0, 0, 0, 13, 54, 1, 0, 0, 0, 15, 57, 1, 0, 0, 0, 17, 62, 1, 0, 0, 0, 19, 64,
        1, 0, 0, 0, 21, 67, 1, 0, 0, 0, 23, 72, 1, 0, 0, 0, 25, 26, 7, 0, 0, 0, 26, 27, 7, 1, 0, 0, 27, 28, 7,
        2, 0, 0, 28, 2, 1, 0, 0, 0, 29, 30, 7, 3, 0, 0, 30, 31, 7, 4, 0, 0, 31, 4, 1, 0, 0, 0, 32, 33, 7, 5, 0,
        0, 33, 34, 7, 0, 0, 0, 34, 35, 7, 6, 0, 0, 35, 36, 7, 7, 0, 0, 36, 37, 7, 8, 0, 0, 37, 38, 7, 9, 0, 0,
        38, 39, 7, 10, 0, 0, 39, 6, 1, 0, 0, 0, 40, 41, 7, 7, 0, 0, 41, 42, 7, 11, 0, 0, 42, 43, 7, 0, 0, 0,
        43, 44, 7, 1, 0, 0, 44, 45, 7, 10, 0, 0, 45, 8, 1, 0, 0, 0, 46, 47, 7, 12, 0, 0, 47, 48, 7, 3, 0, 0,
        48, 49, 7, 6, 0, 0, 49, 50, 7, 9, 0, 0, 50, 10, 1, 0, 0, 0, 51, 52, 7, 1, 0, 0, 52, 53, 7, 0, 0, 0, 53,
        12, 1, 0, 0, 0, 54, 55, 7, 9, 0, 0, 55, 56, 7, 13, 0, 0, 56, 14, 1, 0, 0, 0, 57, 58, 7, 0, 0, 0, 58,
        59, 7, 10, 0, 0, 59, 60, 7, 14, 0, 0, 60, 61, 7, 0, 0, 0, 61, 16, 1, 0, 0, 0, 62, 63, 5, 40, 0, 0, 63,
        18, 1, 0, 0, 0, 64, 65, 5, 41, 0, 0, 65, 20, 1, 0, 0, 0, 66, 68, 7, 15, 0, 0, 67, 66, 1, 0, 0, 0, 68,
        69, 1, 0, 0, 0, 69, 67, 1, 0, 0, 0, 69, 70, 1, 0, 0, 0, 70, 22, 1, 0, 0, 0, 71, 73, 7, 16, 0, 0, 72,
        71, 1, 0, 0, 0, 73, 74, 1, 0, 0, 0, 74, 72, 1, 0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77,
        6, 11, 0, 0, 77, 24, 1, 0, 0, 0, 3, 0, 69, 74, 1, 6, 0, 0];

    private static __ATN: ATN;
    public static get _ATN(): ATN {
        if (!EventConditionLexer.__ATN) {
            EventConditionLexer.__ATN = new ATNDeserializer().deserialize(EventConditionLexer._serializedATN);
        }

        return EventConditionLexer.__ATN;
    }


    static DecisionsToDFA = EventConditionLexer._ATN.decisionToState.map((ds: any, index: number) => new DFA(ds, index));
}