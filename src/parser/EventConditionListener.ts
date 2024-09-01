// Generated from ./src/parser/gen/EventCondition.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { EventConditionContext } from "./EventConditionParser.js";
import { VoteConditionContext } from "./EventConditionParser.js";
import { VoteOrConditionContext } from "./EventConditionParser.js";
import { PlayerInfoContext } from "./EventConditionParser.js";
import { ConditionContext } from "./EventConditionParser.js";
import { BasicConditionContext } from "./EventConditionParser.js";
import { CompositeConditionContext } from "./EventConditionParser.js";
import { AndConditionContext } from "./EventConditionParser.js";
import { OrConditionContext } from "./EventConditionParser.js";
import { AnyConditionContext } from "./EventConditionParser.js";
import { AllConditionContext } from "./EventConditionParser.js";
import { BasicConditionListContext } from "./EventConditionParser.js";
import { GameServerContext } from "./EventConditionParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `EventConditionParser`.
 */
export default class EventConditionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `EventConditionParser.eventCondition`.
	 * @param ctx the parse tree
	 */
	enterEventCondition?: (ctx: EventConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.eventCondition`.
	 * @param ctx the parse tree
	 */
	exitEventCondition?: (ctx: EventConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.voteCondition`.
	 * @param ctx the parse tree
	 */
	enterVoteCondition?: (ctx: VoteConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.voteCondition`.
	 * @param ctx the parse tree
	 */
	exitVoteCondition?: (ctx: VoteConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.voteOrCondition`.
	 * @param ctx the parse tree
	 */
	enterVoteOrCondition?: (ctx: VoteOrConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.voteOrCondition`.
	 * @param ctx the parse tree
	 */
	exitVoteOrCondition?: (ctx: VoteOrConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.playerInfo`.
	 * @param ctx the parse tree
	 */
	enterPlayerInfo?: (ctx: PlayerInfoContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.playerInfo`.
	 * @param ctx the parse tree
	 */
	exitPlayerInfo?: (ctx: PlayerInfoContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.basicCondition`.
	 * @param ctx the parse tree
	 */
	enterBasicCondition?: (ctx: BasicConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.basicCondition`.
	 * @param ctx the parse tree
	 */
	exitBasicCondition?: (ctx: BasicConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.compositeCondition`.
	 * @param ctx the parse tree
	 */
	enterCompositeCondition?: (ctx: CompositeConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.compositeCondition`.
	 * @param ctx the parse tree
	 */
	exitCompositeCondition?: (ctx: CompositeConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.andCondition`.
	 * @param ctx the parse tree
	 */
	enterAndCondition?: (ctx: AndConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.andCondition`.
	 * @param ctx the parse tree
	 */
	exitAndCondition?: (ctx: AndConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.orCondition`.
	 * @param ctx the parse tree
	 */
	enterOrCondition?: (ctx: OrConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.orCondition`.
	 * @param ctx the parse tree
	 */
	exitOrCondition?: (ctx: OrConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.anyCondition`.
	 * @param ctx the parse tree
	 */
	enterAnyCondition?: (ctx: AnyConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.anyCondition`.
	 * @param ctx the parse tree
	 */
	exitAnyCondition?: (ctx: AnyConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.allCondition`.
	 * @param ctx the parse tree
	 */
	enterAllCondition?: (ctx: AllConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.allCondition`.
	 * @param ctx the parse tree
	 */
	exitAllCondition?: (ctx: AllConditionContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.basicConditionList`.
	 * @param ctx the parse tree
	 */
	enterBasicConditionList?: (ctx: BasicConditionListContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.basicConditionList`.
	 * @param ctx the parse tree
	 */
	exitBasicConditionList?: (ctx: BasicConditionListContext) => void;
	/**
	 * Enter a parse tree produced by `EventConditionParser.gameServer`.
	 * @param ctx the parse tree
	 */
	enterGameServer?: (ctx: GameServerContext) => void;
	/**
	 * Exit a parse tree produced by `EventConditionParser.gameServer`.
	 * @param ctx the parse tree
	 */
	exitGameServer?: (ctx: GameServerContext) => void;
}

