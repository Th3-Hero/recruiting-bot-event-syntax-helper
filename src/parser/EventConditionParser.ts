// Generated from ./src/parser/gen/EventCondition.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token,
	Interval, IntervalSet
} from 'antlr4';
import EventConditionListener from "./EventConditionListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class EventConditionParser extends Parser {
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
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_condition = 0;
	public static readonly RULE_clanCondition = 1;
	public static readonly RULE_voteCondition = 2;
	public static readonly RULE_gameServer = 3;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "AND", 
                                                             "OR", "MATCHES", 
                                                             "CLANS", "VOTES", 
                                                             "NA", "EU", 
                                                             "ASIA", "LPAREN", 
                                                             "RPAREN", "TEXT", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"condition", "clanCondition", "voteCondition", "gameServer",
	];
	public get grammarFileName(): string { return "EventCondition.g4"; }
	public get literalNames(): (string | null)[] { return EventConditionParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return EventConditionParser.symbolicNames; }
	public get ruleNames(): string[] { return EventConditionParser.ruleNames; }
	public get serializedATN(): number[] { return EventConditionParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: any) {
		super(input);
		this._interp = new ParserATNSimulator(this, EventConditionParser._ATN, EventConditionParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, EventConditionParser.RULE_condition);
		try {
			this.state = 18;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 8;
				this.match(EventConditionParser.CLANS);
				this.state = 9;
				this.match(EventConditionParser.MATCHES);
				this.state = 10;
				this.clanCondition();
				this.state = 11;
				this.match(EventConditionParser.EOF);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 13;
				this.match(EventConditionParser.VOTES);
				this.state = 14;
				this.match(EventConditionParser.MATCHES);
				this.state = 15;
				this.voteCondition();
				this.state = 16;
				this.match(EventConditionParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clanCondition(): ClanConditionContext {
		let localctx: ClanConditionContext = new ClanConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, EventConditionParser.RULE_clanCondition);
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 20;
				this.match(EventConditionParser.LPAREN);
				this.state = 21;
				this.clanCondition();
				this.state = 22;
				this.match(EventConditionParser.AND);
				this.state = 23;
				this.clanCondition();
				this.state = 24;
				this.match(EventConditionParser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 26;
				this.match(EventConditionParser.LPAREN);
				this.state = 27;
				this.clanCondition();
				this.state = 28;
				this.match(EventConditionParser.OR);
				this.state = 29;
				this.clanCondition();
				this.state = 30;
				this.match(EventConditionParser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 32;
				this.match(EventConditionParser.TEXT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public voteCondition(): VoteConditionContext {
		let localctx: VoteConditionContext = new VoteConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, EventConditionParser.RULE_voteCondition);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 35;
				this.match(EventConditionParser.LPAREN);
				this.state = 36;
				this.voteCondition();
				this.state = 37;
				this.match(EventConditionParser.OR);
				this.state = 38;
				this.voteCondition();
				this.state = 39;
				this.match(EventConditionParser.RPAREN);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 41;
				this.match(EventConditionParser.TEXT);
				this.state = 42;
				this.gameServer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gameServer(): GameServerContext {
		let localctx: GameServerContext = new GameServerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, EventConditionParser.RULE_gameServer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,12,48,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,19,8,
	0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,34,8,1,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,44,8,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,
	6,8,47,0,18,1,0,0,0,2,33,1,0,0,0,4,43,1,0,0,0,6,45,1,0,0,0,8,9,5,4,0,0,
	9,10,5,3,0,0,10,11,3,2,1,0,11,12,5,0,0,1,12,19,1,0,0,0,13,14,5,5,0,0,14,
	15,5,3,0,0,15,16,3,4,2,0,16,17,5,0,0,1,17,19,1,0,0,0,18,8,1,0,0,0,18,13,
	1,0,0,0,19,1,1,0,0,0,20,21,5,9,0,0,21,22,3,2,1,0,22,23,5,1,0,0,23,24,3,
	2,1,0,24,25,5,10,0,0,25,34,1,0,0,0,26,27,5,9,0,0,27,28,3,2,1,0,28,29,5,
	2,0,0,29,30,3,2,1,0,30,31,5,10,0,0,31,34,1,0,0,0,32,34,5,11,0,0,33,20,1,
	0,0,0,33,26,1,0,0,0,33,32,1,0,0,0,34,3,1,0,0,0,35,36,5,9,0,0,36,37,3,4,
	2,0,37,38,5,2,0,0,38,39,3,4,2,0,39,40,5,10,0,0,40,44,1,0,0,0,41,42,5,11,
	0,0,42,44,3,6,3,0,43,35,1,0,0,0,43,41,1,0,0,0,44,5,1,0,0,0,45,46,7,0,0,
	0,46,7,1,0,0,0,3,18,33,43];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!EventConditionParser.__ATN) {
			EventConditionParser.__ATN = new ATNDeserializer().deserialize(EventConditionParser._serializedATN);
		}

		return EventConditionParser.__ATN;
	}


	static DecisionsToDFA = EventConditionParser._ATN.decisionToState.map( (ds: any, index: number) => new DFA(ds, index) );

}

export class ConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLANS(): TerminalNode {
		return this.getToken(EventConditionParser.CLANS, 0);
	}
	public MATCHES(): TerminalNode {
		return this.getToken(EventConditionParser.MATCHES, 0);
	}
	public clanCondition(): ClanConditionContext {
		return this.getTypedRuleContext(ClanConditionContext, 0) as ClanConditionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(EventConditionParser.EOF, 0);
	}
	public VOTES(): TerminalNode {
		return this.getToken(EventConditionParser.VOTES, 0);
	}
	public voteCondition(): VoteConditionContext {
		return this.getTypedRuleContext(VoteConditionContext, 0) as VoteConditionContext;
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_condition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterCondition) {
	 		listener.enterCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitCondition) {
	 		listener.exitCondition(this);
		}
	}
}


export class ClanConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.LPAREN, 0);
	}
	public clanCondition_list(): ClanConditionContext[] {
		return this.getTypedRuleContexts(ClanConditionContext) as ClanConditionContext[];
	}
	public clanCondition(i: number): ClanConditionContext {
		return this.getTypedRuleContext(ClanConditionContext, i) as ClanConditionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(EventConditionParser.AND, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.RPAREN, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(EventConditionParser.OR, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(EventConditionParser.TEXT, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_clanCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterClanCondition) {
	 		listener.enterClanCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitClanCondition) {
	 		listener.exitClanCondition(this);
		}
	}
}


export class VoteConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.LPAREN, 0);
	}
	public voteCondition_list(): VoteConditionContext[] {
		return this.getTypedRuleContexts(VoteConditionContext) as VoteConditionContext[];
	}
	public voteCondition(i: number): VoteConditionContext {
		return this.getTypedRuleContext(VoteConditionContext, i) as VoteConditionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(EventConditionParser.OR, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.RPAREN, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(EventConditionParser.TEXT, 0);
	}
	public gameServer(): GameServerContext {
		return this.getTypedRuleContext(GameServerContext, 0) as GameServerContext;
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_voteCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterVoteCondition) {
	 		listener.enterVoteCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitVoteCondition) {
	 		listener.exitVoteCondition(this);
		}
	}
}


export class GameServerContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NA(): TerminalNode {
		return this.getToken(EventConditionParser.NA, 0);
	}
	public EU(): TerminalNode {
		return this.getToken(EventConditionParser.EU, 0);
	}
	public ASIA(): TerminalNode {
		return this.getToken(EventConditionParser.ASIA, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_gameServer;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterGameServer) {
	 		listener.enterGameServer(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitGameServer) {
	 		listener.exitGameServer(this);
		}
	}
}
