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
	public static readonly ANY = 3;
	public static readonly ALL = 4;
	public static readonly MATCHES = 5;
	public static readonly CLANS = 6;
	public static readonly VOTES = 7;
	public static readonly NA = 8;
	public static readonly EU = 9;
	public static readonly ASIA = 10;
	public static readonly LPAREN = 11;
	public static readonly RPAREN = 12;
	public static readonly COMMA = 13;
	public static readonly TEXT = 14;
	public static readonly WS = 15;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_eventCondition = 0;
	public static readonly RULE_voteCondition = 1;
	public static readonly RULE_voteOrCondition = 2;
	public static readonly RULE_playerInfo = 3;
	public static readonly RULE_condition = 4;
	public static readonly RULE_basicCondition = 5;
	public static readonly RULE_compositeCondition = 6;
	public static readonly RULE_andCondition = 7;
	public static readonly RULE_orCondition = 8;
	public static readonly RULE_anyCondition = 9;
	public static readonly RULE_allCondition = 10;
	public static readonly RULE_basicConditionList = 11;
	public static readonly RULE_gameServer = 12;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'('", 
                                                            "')'", "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "AND", 
                                                             "OR", "ANY", 
                                                             "ALL", "MATCHES", 
                                                             "CLANS", "VOTES", 
                                                             "NA", "EU", 
                                                             "ASIA", "LPAREN", 
                                                             "RPAREN", "COMMA", 
                                                             "TEXT", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"eventCondition", "voteCondition", "voteOrCondition", "playerInfo", "condition", 
		"basicCondition", "compositeCondition", "andCondition", "orCondition", 
		"anyCondition", "allCondition", "basicConditionList", "gameServer",
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
	public eventCondition(): EventConditionContext {
		let localctx: EventConditionContext = new EventConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, EventConditionParser.RULE_eventCondition);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 26;
				this.match(EventConditionParser.CLANS);
				this.state = 27;
				this.match(EventConditionParser.MATCHES);
				this.state = 28;
				this.condition();
				this.state = 29;
				this.match(EventConditionParser.EOF);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 31;
				this.match(EventConditionParser.VOTES);
				this.state = 32;
				this.match(EventConditionParser.MATCHES);
				this.state = 33;
				this.voteCondition();
				this.state = 34;
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
	public voteCondition(): VoteConditionContext {
		let localctx: VoteConditionContext = new VoteConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, EventConditionParser.RULE_voteCondition);
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 38;
				this.voteOrCondition();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 39;
				this.playerInfo();
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
	public voteOrCondition(): VoteOrConditionContext {
		let localctx: VoteOrConditionContext = new VoteOrConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, EventConditionParser.RULE_voteOrCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this.match(EventConditionParser.LPAREN);
			this.state = 43;
			this.voteCondition();
			this.state = 44;
			this.match(EventConditionParser.OR);
			this.state = 45;
			this.voteCondition();
			this.state = 46;
			this.match(EventConditionParser.RPAREN);
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
	public playerInfo(): PlayerInfoContext {
		let localctx: PlayerInfoContext = new PlayerInfoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, EventConditionParser.RULE_playerInfo);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.basicCondition();
			this.state = 49;
			this.gameServer();
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
	public condition(): ConditionContext {
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, EventConditionParser.RULE_condition);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 51;
				this.basicCondition();
				}
				break;
			case 3:
			case 4:
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 52;
				this.compositeCondition();
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
	public basicCondition(): BasicConditionContext {
		let localctx: BasicConditionContext = new BasicConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, EventConditionParser.RULE_basicCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.match(EventConditionParser.TEXT);
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
	public compositeCondition(): CompositeConditionContext {
		let localctx: CompositeConditionContext = new CompositeConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, EventConditionParser.RULE_compositeCondition);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 57;
				this.andCondition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 58;
				this.orCondition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 59;
				this.anyCondition();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 60;
				this.allCondition();
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
	public andCondition(): AndConditionContext {
		let localctx: AndConditionContext = new AndConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, EventConditionParser.RULE_andCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(EventConditionParser.LPAREN);
			this.state = 64;
			this.condition();
			this.state = 65;
			this.match(EventConditionParser.AND);
			this.state = 66;
			this.condition();
			this.state = 67;
			this.match(EventConditionParser.RPAREN);
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
	public orCondition(): OrConditionContext {
		let localctx: OrConditionContext = new OrConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, EventConditionParser.RULE_orCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(EventConditionParser.LPAREN);
			this.state = 70;
			this.condition();
			this.state = 71;
			this.match(EventConditionParser.OR);
			this.state = 72;
			this.condition();
			this.state = 73;
			this.match(EventConditionParser.RPAREN);
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
	public anyCondition(): AnyConditionContext {
		let localctx: AnyConditionContext = new AnyConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, EventConditionParser.RULE_anyCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(EventConditionParser.ANY);
			this.state = 76;
			this.match(EventConditionParser.LPAREN);
			this.state = 77;
			this.basicConditionList(0);
			this.state = 78;
			this.match(EventConditionParser.RPAREN);
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
	public allCondition(): AllConditionContext {
		let localctx: AllConditionContext = new AllConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, EventConditionParser.RULE_allCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.match(EventConditionParser.ALL);
			this.state = 81;
			this.match(EventConditionParser.LPAREN);
			this.state = 82;
			this.basicConditionList(0);
			this.state = 83;
			this.match(EventConditionParser.RPAREN);
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

	public basicConditionList(): BasicConditionListContext;
	public basicConditionList(_p: number): BasicConditionListContext;
	// @RuleVersion(0)
	public basicConditionList(_p?: number): BasicConditionListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: BasicConditionListContext = new BasicConditionListContext(this, this._ctx, _parentState);
		let _prevctx: BasicConditionListContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, EventConditionParser.RULE_basicConditionList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 86;
			this.basicCondition();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 93;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new BasicConditionListContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, EventConditionParser.RULE_basicConditionList);
					this.state = 88;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 89;
					this.match(EventConditionParser.COMMA);
					this.state = 90;
					this.basicCondition();
					}
					}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gameServer(): GameServerContext {
		let localctx: GameServerContext = new GameServerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, EventConditionParser.RULE_gameServer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0))) {
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.basicConditionList_sempred(localctx as BasicConditionListContext, predIndex);
		}
		return true;
	}
	private basicConditionList_sempred(localctx: BasicConditionListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,15,99,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,
	37,8,0,1,1,1,1,3,1,41,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,3,
	4,54,8,4,1,5,1,5,1,6,1,6,1,6,1,6,3,6,62,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,
	1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,
	11,1,11,1,11,1,11,1,11,5,11,92,8,11,10,11,12,11,95,9,11,1,12,1,12,1,12,
	0,1,22,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,1,1,0,8,10,92,0,36,1,0,0,
	0,2,40,1,0,0,0,4,42,1,0,0,0,6,48,1,0,0,0,8,53,1,0,0,0,10,55,1,0,0,0,12,
	61,1,0,0,0,14,63,1,0,0,0,16,69,1,0,0,0,18,75,1,0,0,0,20,80,1,0,0,0,22,85,
	1,0,0,0,24,96,1,0,0,0,26,27,5,6,0,0,27,28,5,5,0,0,28,29,3,8,4,0,29,30,5,
	0,0,1,30,37,1,0,0,0,31,32,5,7,0,0,32,33,5,5,0,0,33,34,3,2,1,0,34,35,5,0,
	0,1,35,37,1,0,0,0,36,26,1,0,0,0,36,31,1,0,0,0,37,1,1,0,0,0,38,41,3,4,2,
	0,39,41,3,6,3,0,40,38,1,0,0,0,40,39,1,0,0,0,41,3,1,0,0,0,42,43,5,11,0,0,
	43,44,3,2,1,0,44,45,5,2,0,0,45,46,3,2,1,0,46,47,5,12,0,0,47,5,1,0,0,0,48,
	49,3,10,5,0,49,50,3,24,12,0,50,7,1,0,0,0,51,54,3,10,5,0,52,54,3,12,6,0,
	53,51,1,0,0,0,53,52,1,0,0,0,54,9,1,0,0,0,55,56,5,14,0,0,56,11,1,0,0,0,57,
	62,3,14,7,0,58,62,3,16,8,0,59,62,3,18,9,0,60,62,3,20,10,0,61,57,1,0,0,0,
	61,58,1,0,0,0,61,59,1,0,0,0,61,60,1,0,0,0,62,13,1,0,0,0,63,64,5,11,0,0,
	64,65,3,8,4,0,65,66,5,1,0,0,66,67,3,8,4,0,67,68,5,12,0,0,68,15,1,0,0,0,
	69,70,5,11,0,0,70,71,3,8,4,0,71,72,5,2,0,0,72,73,3,8,4,0,73,74,5,12,0,0,
	74,17,1,0,0,0,75,76,5,3,0,0,76,77,5,11,0,0,77,78,3,22,11,0,78,79,5,12,0,
	0,79,19,1,0,0,0,80,81,5,4,0,0,81,82,5,11,0,0,82,83,3,22,11,0,83,84,5,12,
	0,0,84,21,1,0,0,0,85,86,6,11,-1,0,86,87,3,10,5,0,87,93,1,0,0,0,88,89,10,
	2,0,0,89,90,5,13,0,0,90,92,3,10,5,0,91,88,1,0,0,0,92,95,1,0,0,0,93,91,1,
	0,0,0,93,94,1,0,0,0,94,23,1,0,0,0,95,93,1,0,0,0,96,97,7,0,0,0,97,25,1,0,
	0,0,5,36,40,53,61,93];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!EventConditionParser.__ATN) {
			EventConditionParser.__ATN = new ATNDeserializer().deserialize(EventConditionParser._serializedATN);
		}

		return EventConditionParser.__ATN;
	}


	static DecisionsToDFA = EventConditionParser._ATN.decisionToState.map( (ds: any, index: number) => new DFA(ds, index) );

}

export class EventConditionContext extends ParserRuleContext {
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
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
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
    	return EventConditionParser.RULE_eventCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterEventCondition) {
	 		listener.enterEventCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitEventCondition) {
	 		listener.exitEventCondition(this);
		}
	}
}


export class VoteConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public voteOrCondition(): VoteOrConditionContext {
		return this.getTypedRuleContext(VoteOrConditionContext, 0) as VoteOrConditionContext;
	}
	public playerInfo(): PlayerInfoContext {
		return this.getTypedRuleContext(PlayerInfoContext, 0) as PlayerInfoContext;
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


export class VoteOrConditionContext extends ParserRuleContext {
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
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_voteOrCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterVoteOrCondition) {
	 		listener.enterVoteOrCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitVoteOrCondition) {
	 		listener.exitVoteOrCondition(this);
		}
	}
}


export class PlayerInfoContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicCondition(): BasicConditionContext {
		return this.getTypedRuleContext(BasicConditionContext, 0) as BasicConditionContext;
	}
	public gameServer(): GameServerContext {
		return this.getTypedRuleContext(GameServerContext, 0) as GameServerContext;
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_playerInfo;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterPlayerInfo) {
	 		listener.enterPlayerInfo(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitPlayerInfo) {
	 		listener.exitPlayerInfo(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicCondition(): BasicConditionContext {
		return this.getTypedRuleContext(BasicConditionContext, 0) as BasicConditionContext;
	}
	public compositeCondition(): CompositeConditionContext {
		return this.getTypedRuleContext(CompositeConditionContext, 0) as CompositeConditionContext;
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


export class BasicConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEXT(): TerminalNode {
		return this.getToken(EventConditionParser.TEXT, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_basicCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterBasicCondition) {
	 		listener.enterBasicCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitBasicCondition) {
	 		listener.exitBasicCondition(this);
		}
	}
}


export class CompositeConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andCondition(): AndConditionContext {
		return this.getTypedRuleContext(AndConditionContext, 0) as AndConditionContext;
	}
	public orCondition(): OrConditionContext {
		return this.getTypedRuleContext(OrConditionContext, 0) as OrConditionContext;
	}
	public anyCondition(): AnyConditionContext {
		return this.getTypedRuleContext(AnyConditionContext, 0) as AnyConditionContext;
	}
	public allCondition(): AllConditionContext {
		return this.getTypedRuleContext(AllConditionContext, 0) as AllConditionContext;
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_compositeCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterCompositeCondition) {
	 		listener.enterCompositeCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitCompositeCondition) {
	 		listener.exitCompositeCondition(this);
		}
	}
}


export class AndConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.LPAREN, 0);
	}
	public condition_list(): ConditionContext[] {
		return this.getTypedRuleContexts(ConditionContext) as ConditionContext[];
	}
	public condition(i: number): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, i) as ConditionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(EventConditionParser.AND, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_andCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterAndCondition) {
	 		listener.enterAndCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitAndCondition) {
	 		listener.exitAndCondition(this);
		}
	}
}


export class OrConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.LPAREN, 0);
	}
	public condition_list(): ConditionContext[] {
		return this.getTypedRuleContexts(ConditionContext) as ConditionContext[];
	}
	public condition(i: number): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, i) as ConditionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(EventConditionParser.OR, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_orCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterOrCondition) {
	 		listener.enterOrCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitOrCondition) {
	 		listener.exitOrCondition(this);
		}
	}
}


export class AnyConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANY(): TerminalNode {
		return this.getToken(EventConditionParser.ANY, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.LPAREN, 0);
	}
	public basicConditionList(): BasicConditionListContext {
		return this.getTypedRuleContext(BasicConditionListContext, 0) as BasicConditionListContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_anyCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterAnyCondition) {
	 		listener.enterAnyCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitAnyCondition) {
	 		listener.exitAnyCondition(this);
		}
	}
}


export class AllConditionContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(EventConditionParser.ALL, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.LPAREN, 0);
	}
	public basicConditionList(): BasicConditionListContext {
		return this.getTypedRuleContext(BasicConditionListContext, 0) as BasicConditionListContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(EventConditionParser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_allCondition;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterAllCondition) {
	 		listener.enterAllCondition(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitAllCondition) {
	 		listener.exitAllCondition(this);
		}
	}
}


export class BasicConditionListContext extends ParserRuleContext {
	constructor(parser?: EventConditionParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicCondition(): BasicConditionContext {
		return this.getTypedRuleContext(BasicConditionContext, 0) as BasicConditionContext;
	}
	public basicConditionList(): BasicConditionListContext {
		return this.getTypedRuleContext(BasicConditionListContext, 0) as BasicConditionListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(EventConditionParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return EventConditionParser.RULE_basicConditionList;
	}
	public enterRule(listener: EventConditionListener): void {
	    if(listener.enterBasicConditionList) {
	 		listener.enterBasicConditionList(this);
		}
	}
	public exitRule(listener: EventConditionListener): void {
	    if(listener.exitBasicConditionList) {
	 		listener.exitBasicConditionList(this);
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
